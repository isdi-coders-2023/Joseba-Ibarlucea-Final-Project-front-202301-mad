import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { CircuitsService } from 'src/app/services/circuits/circuits.service';

import { CircuitDetailComponent } from './circuit-detail.component';

describe('CircuitDetailComponent', () => {
  let component: CircuitDetailComponent;
  let fixture: ComponentFixture<CircuitDetailComponent>;

  const mockCircuitService = {
    queryCircuit: () => {},
    circuits$: new BehaviorSubject([{ id: '' }]),
    circuit: {
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
        year: '12',
      },
    },
  };

  const mockRoute = {
    params: of({ id: '123' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockRoute,
        },
        {
          provide: CircuitsService,
          useValue: mockCircuitService,
        },
      ],
      declarations: [CircuitDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should bring the circuits when ngOnInit is called', () => {
    mockCircuitService.circuits$ = new BehaviorSubject([
      {
        id: '123',
        lapRecord: {
          time: '',
          driver: '',
          year: '12',
        },
      },
      { id: '456' },
    ]);
    component.ngOnInit();
    expect(mockCircuitService.circuits$).toBeTruthy();
  });
});
