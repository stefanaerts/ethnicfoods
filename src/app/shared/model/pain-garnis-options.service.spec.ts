/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainGarnisOptionsService } from './pain-garnis-options.service';

describe('Service: PainGarnisOptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainGarnisOptionsService]
    });
  });

  it('should ...', inject([PainGarnisOptionsService], (service: PainGarnisOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
