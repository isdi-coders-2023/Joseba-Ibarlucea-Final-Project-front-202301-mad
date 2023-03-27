import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { initialParam, teams } from 'src/initial.values/values';
import { Driver } from 'src/types/types';

@Component({
  selector: 'app-add-update-driver',
  templateUrl: './add-update-driver.component.html',
  styleUrls: ['./add-update-driver.component.scss'],
})
export class AddUpdateDriverComponent {
  title = '';
  driver!: FormGroup;
  errorMessage: string = '';
  params: Params = initialParam;
  id = '';
  public teams: Array<string> = teams;

  constructor(
    public fb: FormBuilder,
    private srv: DriversService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.driver = this.fb.group({
      name: ['', Validators.required],
      nationality: ['', Validators.required],
      racingNumber: ['', Validators.required],
      championships: ['', Validators.required],
      podiums: ['', Validators.required],
      team: [''],
    });
    this.route.params.subscribe((p) => console.log(p));
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => (this.id = p['id']));

    this.id
      ? ((this.title = 'Update'), this.loadDriver())
      : (this.title = 'Add');
  }

  addDriver() {
    const newDriver: Partial<Driver> = {
      name: this.driver.value.name,
      nationality: this.driver.value.nationality,
      racingNumber: this.driver.value.racingNumber,
      championships: this.driver.value.championships,
      podiums: this.driver.value.podiums,
      team: this.driver.value.team,
      image: 'some',
    };

    this.srv
      .addDriver(newDriver)
      .pipe(
        catchError(() => {
          this.errorMessage = 'Error creating driver';
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.driver.reset();
      });
  }

  loadDriver() {
    this.srv.findDriver(this.id).subscribe((d) => {
      this.driver.patchValue({
        name: d.name,
        nationality: d.nationality,
        racingNumber: d.racingNumber,
        championships: d.championships,
        podiums: d.podiums,
        team: d.team,
      });
    });
  }

  updateDriver() {
    console.log(this.driver.value, this.id);

    const patchDriver: Partial<Driver> = {
      name: this.driver.value.name,
      nationality: this.driver.value.nationality,
      racingNumber: Number(this.driver.value.racingNumber),
      championships: Number(this.driver.value.championships),
      podiums: Number(this.driver.value.podiums),
      team: this.driver.value.team,
      image: 'some',
      id: this.id,
    };

    console.log(patchDriver);

    this.srv
      .updateDriver(patchDriver)
      .pipe(
        catchError(() => {
          this.errorMessage = 'Error updating driver';
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/home');
      });
  }
  selectMethod() {
    return this.id ? this.updateDriver() : this.addDriver();
  }
}
