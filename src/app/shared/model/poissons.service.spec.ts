/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoissonsService } from './poissons.service';

describe('Service: Poissons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoissonsService]
    });
  });

  it('should ...', inject([PoissonsService], (service: PoissonsService) => {
    expect(service).toBeTruthy();
  }));
});
