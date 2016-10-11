/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViandesService } from './viandes.service';

describe('Service: Viandes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViandesService]
    });
  });

  it('should ...', inject([ViandesService], (service: ViandesService) => {
    expect(service).toBeTruthy();
  }));
});
