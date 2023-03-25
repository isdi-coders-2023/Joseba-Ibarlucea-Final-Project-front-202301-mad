import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Driver } from 'src/types/types';
import { DriversService } from './drivers.service';

describe('DriversService', () => {
  let service: DriversService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DriversService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should subscribe to queryDrivers from the service', () => {
    service.queryDrivers().subscribe((res) => {
      expect(res).toEqual([{} as Driver]);
    });

    const req = httpController.expectOne('http://localhost:4321/drivers');
    expect(req.request.method).toEqual('GET');
    req.flush({ results: [{}] });
    httpController.verify();
  });
});
