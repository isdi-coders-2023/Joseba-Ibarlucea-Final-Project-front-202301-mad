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
      { path: 'register', label: 'Register' },
      { path: 'login', label: 'Login' },
      { path: 'teams', label: 'Teams' },
    ];
  }
}
