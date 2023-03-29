import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/types/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: FormGroup;
  errorMessage: string = '';
  constructor(
    public formBuilder: FormBuilder,
    public srv: UserService,
    private router: Router,
    private zone: NgZone
  ) {
    this.login = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async ngOnInit(): Promise<void> {
    this.srv.token$.subscribe((x) => console.log(x));
  }

  handleSubmit() {
    const log: Partial<User> = {
      email: this.login.value.email,
      password: this.login.value.password,
    };
    this.srv
      .logUser(log)
      .pipe(
        catchError(() => {
          // console.log(error);
          this.errorMessage = 'Error on login, check your credentials';
          return EMPTY;
        })
      )
      .subscribe((x) => {
        this.srv.token$.next(x);
        localStorage.setItem('token', JSON.stringify(x));
        this.zone.run(() => {
          this.router.navigateByUrl('/');
        });
      });
  }
}
