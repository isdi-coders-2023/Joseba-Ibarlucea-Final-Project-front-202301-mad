import { Component } from '@angular/core';
import { TeamService } from 'src/app/services/teams/team.service';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  constructor(public srv: TeamService) {}

  async ngOnInit(): Promise<void> {
    this.srv.queryTeams().subscribe();
  }
}
