import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DriversService } from 'src/app/services/drivers/drivers.service';

import { AddUpdateDriverComponent } from './add-update-driver.component';

describe('AddUpdateDriverComponent', () => {
  let component: AddUpdateDriverComponent;
  let fixture: ComponentFixture<AddUpdateDriverComponent>;

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

    fixture = TestBed.createComponent(AddUpdateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Given the addDriver method', () => {
    it('Should take the form values and create a new driver', () => {});
  });
});
