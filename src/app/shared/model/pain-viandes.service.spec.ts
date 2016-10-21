/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainViandesService } from './viandes.service';

describe('Service: Viandes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainViandesService]
    });
  });

  it('should ...', inject([PainViandesService], (service: PainViandesService) => {
    expect(service).toBeTruthy();
  }));
});
