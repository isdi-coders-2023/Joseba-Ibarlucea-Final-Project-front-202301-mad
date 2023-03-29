import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CopyrightComponent } from './copyright/copyright.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StaticsModule { }
