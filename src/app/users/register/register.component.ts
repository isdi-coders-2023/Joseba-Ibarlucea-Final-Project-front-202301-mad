import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/types/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage: string = '';
  public teams: Array<string> = ['Scuderia Ferrari', 'Red Bull'];
  register: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public srv: UserService,
    private router: Router
  ) {
    this.register = formBuilder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      favoriteTeam: [''],
    });
  }

  handleSubmit() {
    const newUser: Partial<User> = {
      email: this.register.value.email,
      name: this.register.value.name,
      surname: this.register.value.surname,
      password: this.register.value.password,
      favoriteTeam: this.register.value.favoriteTeam,
    };

    this.srv
      .registerUser(newUser)
      .pipe(
        catchError(() => {
          this.errorMessage = 'Invalid field';
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/login');
        this.register.reset();
      });
  }
}
