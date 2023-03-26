import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() message = '';

  constructor() {}

  ngOnInit(): void {
    this.timeError();
  }

  ngOnDestroy(): void {
    this.message = '';
  }

  timeError() {
    setTimeout(() => {
      this.message = '';
    }, 2500);
  }
}
