/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaladesService } from './salades.service';

describe('Service: Salades', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaladesService]
    });
  });

  it('should ...', inject([SaladesService], (service: SaladesService) => {
    expect(service).toBeTruthy();
  }));
});
