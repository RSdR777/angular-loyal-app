import { TestBed } from '@angular/core/testing';

import { TopBarResolveService } from './top-bar-resolve.service';

describe('TopBarResolveService', () => {
  let service: TopBarResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopBarResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
