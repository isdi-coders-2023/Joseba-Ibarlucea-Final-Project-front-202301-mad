import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircuitsService } from 'src/app/services/circuits/circuits.service';

import { CircuitsCardComponent } from './circuits-card.component';

describe('CircuitsCardComponent', () => {
  let component: CircuitsCardComponent;
  let fixture: ComponentFixture<CircuitsCardComponent>;
  let service: CircuitsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CircuitsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitsCardComponent);
    service = TestBed.inject(CircuitsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service', () => {
    const circuits = spyOn(service, 'queryCircuits').and.callThrough();
    component.ngOnInit();
    expect(circuits).toHaveBeenCalled();
  });
});
