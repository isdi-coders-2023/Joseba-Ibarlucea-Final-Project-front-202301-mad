import { Component } from '@angular/core';
import { MenuItems } from 'src/types/types';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  btns: MenuItems[];
  constructor() {
    this.btns = [
      { path: '', label: 'Home' },
      { path: 'drivers', label: 'Drivers' },
      { path: 'circuits', label: 'Circuits' },
      { path: 'teams', label: 'Teams' },
      { path: 'rankings', label: 'Rankings' },
    ];
  }
}
