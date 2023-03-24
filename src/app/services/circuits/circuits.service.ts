import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Circuit } from 'src/types/types';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root',
})
export class CircuitsService {
  private query = 'http://localhost:4321/circuits';

  circuits$: BehaviorSubject<Circuit[]>;

  constructor(private http: HttpClient, private user: UserService) {
    const initialCircuit: Circuit[] = [];
    this.circuits$ = new BehaviorSubject(initialCircuit);
  }

  queryCircuits(): Observable<Circuit[]> {
    this.user.token$;
    return this.http.get<{ results: Array<Circuit> }>(this.query).pipe(
      map((c) => {
        this.circuits$.next(c.results);
        return c.results;
      })
    );
  }
}
