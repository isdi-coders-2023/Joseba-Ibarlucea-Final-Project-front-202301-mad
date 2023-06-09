import { Component } from '@angular/core';
import { MenuItems } from 'src/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  labels: MenuItems[];
  constructor() {
    this.labels = [
      { label: 'Teams', path: 'teams' },
      { label: 'Drivers', path: 'drivers' },
      { label: 'Circuits', path: 'circuits' },
      { label: 'Rankings', path: 'rankings' },
    ];
    console.log(this.labels);
  }
}
