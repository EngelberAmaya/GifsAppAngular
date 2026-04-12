import { TestBed } from '@angular/core/testing';

import { ScrollState } from './scroll-state';

describe('ScrollState', () => {
  let service: ScrollState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
