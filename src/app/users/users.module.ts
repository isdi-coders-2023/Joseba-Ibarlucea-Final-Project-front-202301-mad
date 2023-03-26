import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from '../commons/error/error.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  exports: [RegisterComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, CommonsModule],
})
export class UsersModule {}
