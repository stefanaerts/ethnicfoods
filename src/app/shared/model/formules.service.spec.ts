/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormulesService } from './formules.service';

describe('Service: Formules', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormulesService]
    });
  });

  it('should ...', inject([FormulesService], (service: FormulesService) => {
    expect(service).toBeTruthy();
  }));
});
