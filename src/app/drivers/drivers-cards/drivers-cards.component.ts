import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-drivers-cards',
  templateUrl: './drivers-cards.component.html',
  styleUrls: ['./drivers-cards.component.scss'],
})
export class DriversCardsComponent {
  constructor(public srv: DriversService) {}

  ngOnInit(): void {
    this.srv.queryDrivers().subscribe();
  }
}
