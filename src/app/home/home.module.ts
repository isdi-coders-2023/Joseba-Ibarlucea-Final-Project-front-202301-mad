import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
