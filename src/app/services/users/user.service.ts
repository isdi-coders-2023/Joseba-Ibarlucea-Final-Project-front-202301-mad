import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Token, User } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private register = 'http://localhost:4321/users/register';
  private login = 'http://localhost:4321/users/login';
  token$: BehaviorSubject<Token>;

  constructor(private http: HttpClient) {
    const initialToken = { results: { token: '' } };
    this.token$ = new BehaviorSubject(initialToken);
  }

  registerUser(user: Partial<User>): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>(this.register, user)
      .pipe(catchError(this.handleError));
  }

  logUser(user: Partial<User>): Observable<Token> {
    return this.http
      .post<Token>(this.login, user)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => `${error.statusText}`);
  }
}
