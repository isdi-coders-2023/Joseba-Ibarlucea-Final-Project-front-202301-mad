import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/types/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  register: FormGroup;
  constructor(public formBuilder: FormBuilder, private srv: UserService) {
    this.register = formBuilder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    const newUser: Partial<User> = {
      email: this.register.value.email,
      name: this.register.value.name,
      surname: this.register.value.surname,
      password: this.register.value.password,
    };

    this.srv.registerUser(newUser).subscribe();
  }
}
