import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Ranking } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class RankingsService {
  private query = 'http://localhost:4321/rankings';
  ranking$: BehaviorSubject<Ranking[]>;
  constructor(private http: HttpClient) {
    const initialRanking: Ranking[] = [];
    this.ranking$ = new BehaviorSubject(initialRanking);
  }

  queryRanking(): Observable<Ranking[]> {
    return this.http.get<{ results: Array<Ranking> }>(this.query).pipe(
      map((r) => {
        this.ranking$.next(r.results);
        return r.results;
      })
    );
  }
}
