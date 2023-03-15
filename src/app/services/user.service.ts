import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private register = 'http://localhost:4321/users/register';

  constructor(private http: HttpClient) {}

  registerUser(user: UserRegister) {
    console.log(user);
    return this.http.post(this.register, user);
  }
}
