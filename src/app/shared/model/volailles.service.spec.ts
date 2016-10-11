/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VolaillesService } from './volailles.service';

describe('Service: Volailles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolaillesService]
    });
  });

  it('should ...', inject([VolaillesService], (service: VolaillesService) => {
    expect(service).toBeTruthy();
  }));
});
