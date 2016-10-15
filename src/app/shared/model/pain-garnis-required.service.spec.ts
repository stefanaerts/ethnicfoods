/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainGarnisRequiredService } from './pain-garnis-required.service';

describe('Service: PainGarnisRequired', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainGarnisRequiredService]
    });
  });

  it('should ...', inject([PainGarnisRequiredService], (service: PainGarnisRequiredService) => {
    expect(service).toBeTruthy();
  }));
});
