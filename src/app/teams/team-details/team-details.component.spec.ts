import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/teams/team.service';
import { TeamDetailsComponent } from './team-details.component';
import { BehaviorSubject, of } from 'rxjs';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;

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
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should bring the new teams calling ngOnInit', () => {
    mockTeamService.teams$ = new BehaviorSubject([
      { id: '123' },
      { id: '456' },
    ]);
    component.ngOnInit();
    expect(mockTeamService.teams$).toBeTruthy();
  });
});
