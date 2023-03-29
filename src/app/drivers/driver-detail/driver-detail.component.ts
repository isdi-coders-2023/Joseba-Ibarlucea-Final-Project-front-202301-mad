import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { initialParam, initialTokenRole } from 'src/initial.values/values';
import { Driver, TokenRole } from 'src/types/types';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss'],
})
export class DriverDetailComponent {
  drivers: Driver[] = [];
  driver: Driver = {} as Driver;
  params: Params = initialParam;
  path = ``;
  info: TokenRole = initialTokenRole;
  constructor(
    public srv: DriversService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => (this.params = p));
    this.srv.drivers$.subscribe((d) => (this.drivers = d));
    this.info = this.srv.token;
    this.findDriver();
    this.path = `/drivers/update/${this.driver.id}`;
  }

  findDriver() {
    const found = this.drivers.find(
      (driver) => driver.id === this.params['id']
    );
    if (!found) return;
    this.driver = found;
  }

  deleteDriver() {
    this.srv.deleteDriver(this.driver.id).subscribe();
    this.router.navigateByUrl('/drivers');
  }
}
