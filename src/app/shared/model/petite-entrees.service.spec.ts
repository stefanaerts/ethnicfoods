/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetiteEntreesService } from './petite-entrees.service';

describe('Service: PetiteEntrees', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetiteEntreesService]
    });
  });

  it('should ...', inject([PetiteEntreesService], (service: PetiteEntreesService) => {
    expect(service).toBeTruthy();
  }));
});
