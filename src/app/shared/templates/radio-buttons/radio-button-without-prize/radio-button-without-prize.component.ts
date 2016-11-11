import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PainGarnisRequired } from '../../../model/pain-garnis-required';
@Component({
  selector: 'app-radio-button-without-prize',
  templateUrl: './radio-button-without-prize.component.html',
  styleUrls: ['./radio-button-without-prize.component.scss']
})
export class RadioButtonWithoutPrizeComponent implements OnInit, OnChanges {


  @Output() setTypeEvent = new EventEmitter<string>();

  @Input()
  items: PainGarnisRequired[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
}

  setType(type: string) {
    this.setTypeEvent.emit(type);
  }
}
