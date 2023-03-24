import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Circuit } from 'src/types/types';

import { CircuitsService } from './circuits.service';

describe('CircuitsService', () => {
  let service: CircuitsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CircuitsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should some', () => {
    service.queryCircuits().subscribe((res) => {
      expect(res).toEqual([{} as Circuit]);
    });

    const req = httpController.expectOne('http://localhost:4321/circuits');
    expect(req.request.method).toEqual('GET');
    req.flush({ results: [{}] });

    httpController.verify();
  });
});
