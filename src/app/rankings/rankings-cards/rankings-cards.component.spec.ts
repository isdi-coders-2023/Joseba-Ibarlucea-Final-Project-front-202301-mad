import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingsService } from 'src/app/services/rankings/rankings.service';

import { RankingsCardsComponent } from './rankings-cards.component';

describe('RankingsCardsComponent', () => {
  let component: RankingsCardsComponent;
  let fixture: ComponentFixture<RankingsCardsComponent>;
  let service: RankingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RankingsCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RankingsCardsComponent);
    service = TestBed.inject(RankingsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call queryRanking on ngOnInit', () => {
    const rankings = spyOn(service, 'queryRanking').and.callThrough();
    component.ngOnInit();
    expect(rankings).toHaveBeenCalled();
  });
});
