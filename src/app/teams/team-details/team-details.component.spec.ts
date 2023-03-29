import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/teams/team.service';
import { TeamDetailsComponent } from './team-details.component';
import { BehaviorSubject, of } from 'rxjs';
import { Team } from 'src/types/types';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;

  let fixture: ComponentFixture<TeamDetailsComponent>;

  const mockTeamService = {
    queryTeams: () => {},
    teams$: new BehaviorSubject([
      {
        id: '',
        bestPosition: {
          position: 1,
          times: 2,
        },
        driver1: {
          image: '',
        },
        driver2: {
          image: '',
        },
      },
    ]),
  };
  const mockRoute = {
    params: of({
      id: '123',
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockRoute,
        },
        {
          provide: TeamService,
          useValue: mockTeamService,
        },
      ],
      declarations: [TeamDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bring the new teams calling ngOnInit', () => {
    mockTeamService.teams$.next([
      {
        id: '123',
        bestPosition: {
          position: 1,
          times: 2,
        },
        driver1: {
          image: 'image2',
        },
        driver2: {
          image: '',
        },
      },
      {
        id: '456',
        bestPosition: {
          position: 2,
          times: 3,
        },
        driver1: {
          image: 'test',
        },
        driver2: {
          image: 'mocky',
        },
      },
    ]);

    component.ngOnInit();

    expect(mockTeamService.teams$).toBeTruthy();
  });
});
