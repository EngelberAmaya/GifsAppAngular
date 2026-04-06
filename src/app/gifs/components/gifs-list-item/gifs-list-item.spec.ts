import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsListItem } from './gifs-list-item';

describe('GifsListItem', () => {
  let component: GifsListItem;
  let fixture: ComponentFixture<GifsListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
