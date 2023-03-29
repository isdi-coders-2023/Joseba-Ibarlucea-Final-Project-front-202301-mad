import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Ranking } from 'src/types/types';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root',
})
export class RankingsService {
  private query = 'http://localhost:4321/rankings';
  ranking$: BehaviorSubject<Ranking[]>;
  token = {};

  constructor(private http: HttpClient, private user: UserService) {
    const initialRanking: Ranking[] = [];
    this.ranking$ = new BehaviorSubject(initialRanking);
  }

  queryRanking(): Observable<Ranking[]> {
    this.user.token$.subscribe((t) => (this.token = t.results));
    return this.http.get<{ results: Array<Ranking> }>(this.query).pipe(
      map((r) => {
        this.ranking$.next(r.results);
        return r.results;
      })
    );
  }
}
