/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpécialitésService } from './spécialités.service';

describe('Service: Spécialités', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpécialitésService]
    });
  });

  it('should ...', inject([SpécialitésService], (service: SpécialitésService) => {
    expect(service).toBeTruthy();
  }));
});
