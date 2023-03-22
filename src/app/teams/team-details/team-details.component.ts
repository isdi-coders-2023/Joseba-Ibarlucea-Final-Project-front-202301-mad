import { Component } from '@angular/core';
import { TeamService } from 'src/app/services/teams/team.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Team } from 'src/types/types';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent {
  teams: Team[] = [];
  team: Team = {} as Team;
  params: Params = { id: '' };
  constructor(public srv: TeamService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => (this.params = p));
    this.srv.teams$.subscribe((t) => {
      this.teams = t;
    });
    this.findTeam();
  }

  findTeam() {
    const found = this.teams.find((team) => team.id === this.params['id']);
    if (!found) return;
    this.team = found;
  }
}
