/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainPoissonsService } from './pain-poissons.service';

describe('Service: Poissons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainPoissonsService]
    });
  });

  it('should ...', inject([PainPoissonsService], (service: PainPoissonsService) => {
    expect(service).toBeTruthy();
  }));
});
