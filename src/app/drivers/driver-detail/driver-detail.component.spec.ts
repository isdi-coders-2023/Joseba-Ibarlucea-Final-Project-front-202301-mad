import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { DriverDetailComponent } from './driver-detail.component';

describe('DriverDetailComponent', () => {
  let component: DriverDetailComponent;
  let fixture: ComponentFixture<DriverDetailComponent>;
  const mockDriversService = {
    drivers$: new BehaviorSubject([{ id: '' }]),
    token: {
      token: 'some',
      role: 'Team Manager',
    },
  };
  const mockRoute = {
    params: of({ id: '123' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverDetailComponent],
      providers: [
        { provide: DriversService, useValue: mockDriversService },
        { provide: ActivatedRoute, useValue: mockRoute },
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DriverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should load the drivers array', () => {
    mockDriversService.drivers$ = new BehaviorSubject([
      { id: '123' },
      { id: '456' },
    ]);
    component.ngOnInit();
    expect(mockDriversService.drivers$).toBeTruthy();
  });
});
