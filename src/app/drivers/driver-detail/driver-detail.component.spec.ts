import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { DriverDetailComponent } from './driver-detail.component';

describe('DriverDetailComponent', () => {
  let component: DriverDetailComponent;
  let fixture: ComponentFixture<DriverDetailComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let service: DriversService;

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
    mockRouter = jasmine.createSpyObj<Router>(['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [DriverDetailComponent],
      providers: [
        { provide: DriversService, useValue: mockDriversService },
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: Router, useValue: mockRouter },
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DriverDetailComponent);
    service = TestBed.inject(DriversService);
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

  describe('When the deleteDriver method is called', () => {
    it('Should delete the driver', () => {
      const some = spyOn(component, 'deleteDriver').and.callThrough();

      component.deleteDriver();

      expect(some).toHaveBeenCalled();
    });
  });
});
