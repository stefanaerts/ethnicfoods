/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CcpickerComponent } from './ccpicker.component';

describe('CcpickerComponent', () => {
  let component: CcpickerComponent;
  let fixture: ComponentFixture<CcpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
