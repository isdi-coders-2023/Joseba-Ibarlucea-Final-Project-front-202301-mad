import { Component } from '@angular/core';
import { CircuitsService } from 'src/app/services/circuits/circuits.service';
import { Circuit } from 'src/types/types';

@Component({
  selector: 'app-circuits-card',
  templateUrl: './circuits-card.component.html',
  styleUrls: ['./circuits-card.component.scss'],
})
export class CircuitsCardComponent {
  constructor(public srv: CircuitsService) {}

  ngOnInit(): void {
    this.srv.queryCircuits().subscribe();
  }
}
