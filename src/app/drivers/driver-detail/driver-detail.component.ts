import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { Driver } from 'src/types/types';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss'],
})
export class DriverDetailComponent {
  drivers: Driver[] = [];
  driver: Driver = {} as Driver;
  params: Params = { id: '' };

  constructor(public srv: DriversService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => (this.params = p));
    this.srv.drivers$.subscribe((d) => (this.drivers = d));

    this.findDriver();
  }

  findDriver() {
    const found = this.drivers.find(
      (driver) => driver.id === this.params['id']
    );
    if (!found) return;
    this.driver = found;
  }
}
