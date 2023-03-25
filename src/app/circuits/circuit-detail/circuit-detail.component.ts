import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CircuitsService } from 'src/app/services/circuits/circuits.service';
import { Circuit } from 'src/types/types';

@Component({
  selector: 'app-circuit-detail',
  templateUrl: './circuit-detail.component.html',
  styleUrls: ['./circuit-detail.component.scss'],
})
export class CircuitDetailComponent {
  circuits: Circuit[] = [];
  circuit: Circuit = {
    id: '',
    race: '',
    image: '',
    location: {
      country: '',
      city: '',
    },
    laps: 0,
    lapRecord: {
      time: '',
      driver: '',
      year: '',
    },
  } as Circuit;
  params: Params = { id: '' };
  constructor(public srv: CircuitsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => (this.params = p));
    this.srv.circuits$.subscribe((c) => {
      this.circuits = c;
    });

    this.findCircuit();
  }

  findCircuit() {
    const found = this.circuits.find(
      (circuit) => circuit.id === this.params['id']
    );
    if (!found) return;
    this.circuit = found;
  }
}
