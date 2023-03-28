import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { initialTokenRole } from 'src/initial.values/values';
import { Driver, TokenRole } from 'src/types/types';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private query = 'http://localhost:4321/drivers';
  private add = 'http://localhost:4321/drivers/create';
  private update = 'http://localhost:4321/drivers/';
  private findId = 'http://localhost:4321/drivers/';

  drivers$: BehaviorSubject<Driver[]>;
  token: TokenRole = initialTokenRole;
  constructor(private http: HttpClient, private user: UserService) {
    const initialDriver: Driver[] = [];
    this.drivers$ = new BehaviorSubject(initialDriver);
  }

  queryDrivers(): Observable<Driver[]> {
    this.user.token$.subscribe((t) => (this.token = t.results));
    return this.http.get<{ results: Array<Driver> }>(this.query).pipe(
      map((d) => {
        this.drivers$.next(d.results);
        return d.results;
      })
    );
  }

  addDriver(driver: Partial<Driver>): Observable<Partial<Driver>> {
    return this.http
      .post<Partial<Driver>>(this.add, driver)
      .pipe(catchError(this.handleError));
  }

  updateDriver(driver: Partial<Driver>): Observable<Partial<Driver>> {
    return this.http
      .patch(`${this.update + driver.id}`, driver)
      .pipe(catchError(this.handleError));
  }

  findDriver(id: string): Observable<Partial<Driver>> {
    return this.http
      .get(`${this.findId + id}`)
      .pipe(catchError(this.handleError));
  }

  deleteDriver(id: string) {
    console.log(id);
    return this.http
      .delete(`${this.findId + id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => `${error.status}`);
  }
}
