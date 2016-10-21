/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainVegetariensService } from './pain-vegetariens.service';

describe('Service: Vegetariens', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainVegetariensService]
    });
  });

  it('should ...', inject([PainVegetariensService], (service: PainVegetariensService) => {
    expect(service).toBeTruthy();
  }));
});
