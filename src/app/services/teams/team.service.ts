import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Team } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private query = 'http://localhost:4321/teams';

  private _teams$: BehaviorSubject<Team[]>;

  constructor(private http: HttpClient) {
    const initialTeam: Team[] = [];
    this._teams$ = new BehaviorSubject(initialTeam);
  }

  public get teams$(): Observable<Team[]> {
    return this._teams$.asObservable();
  }

  public queryTeams(): Observable<Team[]> {
    return this.http.get<{ results: Array<Team[]> }>(this.query).pipe(
      map((t) => {
        this._teams$.next(t.results[0]);
        return t.results[0];
      })
    );
  }
}
