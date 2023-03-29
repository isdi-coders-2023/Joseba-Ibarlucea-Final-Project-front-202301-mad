import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { Driver } from 'src/types/types';

import { AddUpdateDriverComponent } from './add-update-driver.component';

describe('AddUpdateDriverComponent', () => {
  let component: AddUpdateDriverComponent;
  let fixture: ComponentFixture<AddUpdateDriverComponent>;
  let driversService: jasmine.SpyObj<DriversService>;

  const mockRoute = {
    params: of({ id: '1324' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdateDriverComponent],
      providers: [
        DriversService,
        {
          provide: ActivatedRoute,
          useValue: mockRoute,
        },
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }).compileComponents();

    driversService = TestBed.inject(
      DriversService
    ) as jasmine.SpyObj<DriversService>;

    fixture = TestBed.createComponent(AddUpdateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Given the addDriver method', () => {
    it('Should take the form values and create a new driver', () => {
      const newDriver: Partial<Driver> = {
        name: 'Fabio',
        nationality: 'Italian',
        racingNumber: 0,
        championships: 1,
        podiums: 13,
        team: 'Scuderia Ferrari',
        image: 'some',
      };

      const add = spyOn(component, 'addDriver').and.returnValue();

      // driversService.addDriver(newDriver).subscribe((res) => {
      //   expect(res).toEqual(newDriver);
      // });

      expect(add).toHaveBeenCalled();
      expect(driversService.addDriver).toHaveBeenCalled();
    });
  });

  describe("When there's and id in the params", () => {
    it('Should call the loadDriver on init', () => {
      component.id = '123';
      const load = spyOn(component, 'loadDriver').and.callThrough();
      component.ngOnInit();

      expect(load).toHaveBeenCalled();
    });
  });
});
