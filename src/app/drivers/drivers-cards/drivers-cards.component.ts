import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { UserService } from 'src/app/services/users/user.service';
import { initialTokenRole } from 'src/initial.values/values';
import { TokenRole } from 'src/types/types';

@Component({
  selector: 'app-drivers-cards',
  templateUrl: './drivers-cards.component.html',
  styleUrls: ['./drivers-cards.component.scss'],
})
export class DriversCardsComponent {
  info: TokenRole = initialTokenRole;
  constructor(public srv: DriversService) {}

  ngOnInit(): void {
    this.srv.queryDrivers().subscribe();
    this.info = this.srv.token;
  }
}
