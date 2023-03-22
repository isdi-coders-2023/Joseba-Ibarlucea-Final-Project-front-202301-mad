import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Team } from 'src/types/types';

import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TeamService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query teams', () => {
    const mockTeams: Team[] = [{ id: '2' }, { id: '1' }] as Team[];

    service.queryTeams().subscribe((res) => {
      expect(res).toEqual(mockTeams);
    });

    const req = httpController.expectOne('http://localhost:4321/teams');
    expect(req.request.method).toEqual('GET');
    req.flush({ results: [mockTeams] });

    httpController.verify();
  });
});
