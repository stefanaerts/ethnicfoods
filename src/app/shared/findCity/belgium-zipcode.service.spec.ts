/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BelgiumZipcodeService } from './belgium-zipcode.service';

describe('BelgiumZipcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BelgiumZipcodeService]
    });
  });

  it('should ...', inject([BelgiumZipcodeService], (service: BelgiumZipcodeService) => {
    expect(service).toBeTruthy();
  }));
});
