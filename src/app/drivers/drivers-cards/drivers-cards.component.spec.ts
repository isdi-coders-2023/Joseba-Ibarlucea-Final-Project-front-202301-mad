import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { DriversCardsComponent } from './drivers-cards.component';

describe('DriversCardsComponent', () => {
  let component: DriversCardsComponent;
  let fixture: ComponentFixture<DriversCardsComponent>;
  let service: DriversService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriversCardsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DriversCardsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DriversService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call queryDrivers with ngOnInit', () => {
    const drivers = spyOn(service, 'queryDrivers').and.callThrough();
    component.ngOnInit();
    expect(drivers).toHaveBeenCalled();
  });
});
