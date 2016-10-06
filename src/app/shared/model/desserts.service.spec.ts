/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DessertsService } from './desserts.service';

describe('Service: Desserts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DessertsService]
    });
  });

  it('should ...', inject([DessertsService], (service: DessertsService) => {
    expect(service).toBeTruthy();
  }));
});
