import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/types/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: FormGroup;
  constructor(public formBuilder: FormBuilder, private srv: UserService) {
    this.login = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async ngOnInit(): Promise<void> {
    this.srv.token$.subscribe((x) => console.log(x.results.token));
  }

  handleSubmit() {
    const log: Partial<User> = {
      email: this.login.value.email,
      password: this.login.value.password,
    };
    this.srv.logUser(log).subscribe((x) => this.srv.token$.next(x));
  }
}
