import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingsCardsComponent } from './rankings-cards/rankings-cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RankingsCardsComponent],
  imports: [CommonModule, RouterModule],
})
export class RankingsModule {}
