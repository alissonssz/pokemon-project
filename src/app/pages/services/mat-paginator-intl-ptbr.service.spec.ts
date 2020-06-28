import { TestBed } from '@angular/core/testing';

import { MatPaginatorIntlPtbrService } from './mat-paginator-intl-ptbr.service';

describe('MatPaginatorIntlPtbrService', () => {
  let service: MatPaginatorIntlPtbrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorIntlPtbrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
