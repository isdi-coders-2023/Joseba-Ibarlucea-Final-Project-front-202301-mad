import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitsCardComponent } from './circuits-card/circuits-card.component';
import { RouterModule } from '@angular/router';
import { CircuitDetailComponent } from './circuit-detail/circuit-detail.component';

@NgModule({
  declarations: [CircuitsCardComponent, CircuitDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class CircuitsModule {}
