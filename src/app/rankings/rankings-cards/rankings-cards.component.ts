import { Component } from '@angular/core';
import { RankingsService } from 'src/app/services/rankings/rankings.service';
import { Ranking } from 'src/types/types';

@Component({
  selector: 'app-rankings-cards',
  templateUrl: './rankings-cards.component.html',
  styleUrls: ['./rankings-cards.component.scss'],
})
export class RankingsCardsComponent {
  rankings: Ranking[] = [];
  constructor(public srv: RankingsService) {}

  ngOnInit(): void {
    this.srv.queryRanking().subscribe();
  }
}
