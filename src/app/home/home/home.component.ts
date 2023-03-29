import { Component } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { MenuItems } from 'src/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  labels: MenuItems[];
  constructor(private user: UserService) {
    this.labels = [
      { label: 'Teams', path: 'teams' },
      { label: 'Drivers', path: 'drivers' },
      { label: 'Circuits', path: 'circuits' },
      { label: 'Rankings', path: 'rankings' },
    ];
  }

  ngOnInit(): void {
    this.user.getToken();
  }
}
