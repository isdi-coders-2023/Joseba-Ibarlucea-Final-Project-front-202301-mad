import { Component } from '@angular/core';
import { TeamService } from 'src/app/services/teams/team.service';
import { Team } from 'src/types/types';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  teams: Team[] = [];
  constructor(public srv: TeamService) {}

  async ngOnInit(): Promise<void> {
    this.srv.queryTeams().subscribe();
  }
}
