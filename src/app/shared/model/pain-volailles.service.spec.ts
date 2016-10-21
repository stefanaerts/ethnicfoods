/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PainVolaillesService } from './pain-volailles.service';

describe('Service: Volailles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainVolaillesService]
    });
  });

  it('should ...', inject([PainVolaillesService], (service: PainVolaillesService) => {
    expect(service).toBeTruthy();
  }));
});
