import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { initialToken } from 'src/initial.values/values';
import { Token, User } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private register = 'http://localhost:4321/users/register';
  private login = 'http://localhost:4321/users/login';
  token$: BehaviorSubject<Token>;

  constructor(private http: HttpClient) {
    this.token$ = new BehaviorSubject(initialToken);
  }

  registerUser(user: Partial<User>): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>(this.register, user)
      .pipe(catchError(this.handleError));
  }

  logUser(user: Partial<User>) {
    return this.http
      .post<Token>(this.login, user)
      .pipe(catchError(this.handleError));
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.token$.next(JSON.parse(token));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => `${error.error}`);
  }
}
