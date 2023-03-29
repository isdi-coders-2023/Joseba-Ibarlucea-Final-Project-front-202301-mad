import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Team } from 'src/types/types';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private query = 'http://localhost:4321/teams';

  private _teams$: BehaviorSubject<Team[]>;
  token: string;

  constructor(private http: HttpClient, private user: UserService) {
    const initialTeam: Team[] = [];
    this._teams$ = new BehaviorSubject(initialTeam);
    this.token = '';
  }

  public get teams$(): Observable<Team[]> {
    return this._teams$.asObservable();
  }

  public queryTeams(): Observable<Team[]> {
    this.user.token$.subscribe((t) => (this.token = t.results.token));
    return this.http.get<{ results: Array<Team[]> }>(this.query).pipe(
      map((t) => {
        this._teams$.next(t.results[0]);
        return t.results[0];
      })
    );
  }
}
