import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    console.log(user);
    return this.http.post(this.register, user) as Observable<{ user: User }>;
  }

  logUser(user: Partial<User>): Observable<Token> {
    return this.http.post(this.login, user) as Observable<Token>;
  }
}
