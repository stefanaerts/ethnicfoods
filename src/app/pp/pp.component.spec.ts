/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PpComponent } from './pp.component';

describe('PpComponent', () => {
  let component: PpComponent;
  let fixture: ComponentFixture<PpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
