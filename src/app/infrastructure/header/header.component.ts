import { Component } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { initialToken } from 'src/initial.values/values';
import { Token } from 'src/types/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logged: Token = initialToken;

  constructor(public user: UserService) {}

  ngOnInit(): void {
    this.user.getToken();
    this.user.token$.subscribe((t) => (this.logged = t));
  }
}
