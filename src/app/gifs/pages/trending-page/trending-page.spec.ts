import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPage } from './trending-page';

describe('TrendingPage', () => {
  let component: TrendingPage;
  let fixture: ComponentFixture<TrendingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
