import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsList } from './gifs-list';

describe('GifsList', () => {
  let component: GifsList;
  let fixture: ComponentFixture<GifsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
