import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Driver } from 'src/types/types';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private query = 'http://localhost:4321/drivers';

  drivers$: BehaviorSubject<Driver[]>;
  constructor(private http: HttpClient, private user: UserService) {
    const initialDriver: Driver[] = [];
    this.drivers$ = new BehaviorSubject(initialDriver);
  }

  queryDrivers(): Observable<Driver[]> {
    return this.http.get<{ results: Array<Driver> }>(this.query).pipe(
      map((d) => {
        this.drivers$.next(d.results);
        return d.results;
      })
    );
  }
}
