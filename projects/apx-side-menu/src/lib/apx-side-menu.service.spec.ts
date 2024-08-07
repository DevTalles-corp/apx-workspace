import { TestBed } from '@angular/core/testing';

import { ApxSideMenuService } from './apx-side-menu.service';

describe('ApxSideMenuService', () => {
  let service: ApxSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApxSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
