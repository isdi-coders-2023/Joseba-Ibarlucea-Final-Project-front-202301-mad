import { HttpErrorResponse } from '@angular/common/http';
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

  const mockDriver = {
    id: '33',
  } as Driver;

  const mockError: HttpErrorResponse = {
    statusText: 'Driver crashed',
  } as HttpErrorResponse;

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
    service.queryDrivers('1').subscribe((res) => {
      expect(res).toEqual([{} as Driver]);
    });

    const req = httpController.expectOne('http://localhost:4321/drivers');
    expect(req.request.method).toEqual('GET');
    req.flush({ results: [{}] });
    httpController.verify();
  });

  describe('When the addDriver method is called', () => {
    it('Should create a new driver', () => {
      service.addDriver({ name: 'Mike' }).subscribe((res) => {
        expect(res).toEqual({ name: 'Mike' });
      });

      const req = httpController.expectOne(
        'http://localhost:4321/drivers/create'
      );
      expect(req.request.method).toEqual('POST');
      req.flush({ name: 'Mike' });
      httpController.verify();
    });
  });

  describe('When the updateDriver method is called', () => {
    it('Should patch the driver with the new info', () => {
      service.updateDriver(mockDriver).subscribe((res) => {
        expect(res).toEqual(mockDriver);
      });

      const req = httpController.expectOne('http://localhost:4321/drivers/33');
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockDriver);
      httpController.verify();
    });
  });

  describe('When the findDriver method is called', () => {
    it('Should return an specific driver', () => {
      service.findDriver('33').subscribe((res) => {
        expect(res).toEqual(mockDriver);
      });

      const req = httpController.expectOne('http://localhost:4321/drivers/33');
      expect(req.request.method).toEqual('GET');
      req.flush(mockDriver);
      httpController.verify();
    });
  });

  describe('When the handleError is called', () => {
    it('Should return an error message', () => {
      service.handleError(mockError).subscribe({
        error: () => {
          expect(mockError.statusText).toBe('Driver crashed');
        },
      });
    });
  });
});
