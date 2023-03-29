import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversCardsComponent } from './drivers-cards/drivers-cards.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { RouterModule } from '@angular/router';
import { AddUpdateDriverComponent } from './add-update-driver/add-update-driver.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DriversCardsComponent,
    DriverDetailComponent,
    AddUpdateDriverComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class DriversModule {}
