import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { RouterModule } from '@angular/router';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
  declarations: [CardsComponent, TeamDetailsComponent],
  exports: [CardsComponent],
  imports: [CommonModule, RouterModule],
})
export class TeamsModule {}
