import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Ranking } from 'src/types/types';

import { RankingsService } from './rankings.service';

describe('RankingsService', () => {
  let service: RankingsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RankingsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should bring the array rankings when queryRanking is called', () => {
    service.queryRanking().subscribe((res) => {
      expect(res).toEqual([{} as Ranking]);
    });

    const req = httpController.expectOne('http://localhost:4321/rankings');
    expect(req.request.method).toEqual('GET');
    req.flush({ results: [{}] });

    httpController.verify();
  });
});
