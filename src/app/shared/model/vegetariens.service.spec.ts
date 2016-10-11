/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VegetariensService } from './vegetariens.service';

describe('Service: Vegetariens', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VegetariensService]
    });
  });

  it('should ...', inject([VegetariensService], (service: VegetariensService) => {
    expect(service).toBeTruthy();
  }));
});
