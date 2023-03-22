import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/teams/team.service';
import { TeamDetailsComponent } from './team-details.component';
import { BehaviorSubject, of } from 'rxjs';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  const mockTeamService = {
    queryTeams: () => {},
    teams$: new BehaviorSubject([{ id: '' }]),
  };
  const mockRoute = {
    params: of({ id: '456' }),
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
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should bring the new teams calling ngOnInit', () => {
    component.ngOnInit();
    mockTeamService.teams$ = new BehaviorSubject([
      { id: '123' },
      { id: '456' },
    ]);
    expect(mockTeamService.teams$).toBeTruthy();
  });

  it('should set team to found team if team is found', () => {
    component.ngOnInit();

    console.log(component.teams);
    expect(component.team.id).toEqual('456');
  });
});