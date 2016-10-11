/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlatDuJourService } from './plat-du-jour.service';

describe('Service: PlatDuJour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatDuJourService]
    });
  });

  it('should ...', inject([PlatDuJourService], (service: PlatDuJourService) => {
    expect(service).toBeTruthy();
  }));
});
