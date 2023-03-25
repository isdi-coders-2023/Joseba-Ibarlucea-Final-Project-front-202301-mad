import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversCardsComponent } from './drivers-cards/drivers-cards.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DriversCardsComponent, DriverDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class DriversModule {}
