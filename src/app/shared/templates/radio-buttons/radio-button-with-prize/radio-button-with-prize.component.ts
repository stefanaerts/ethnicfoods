import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button-with-prize',
  templateUrl: './radio-button-with-prize.component.html',
  styleUrls: ['./radio-button-with-prize.component.scss']
})
export class RadioButtonWithPrizeComponent implements OnInit {

  @Output() setPrizeEvent = new EventEmitter<string>();

@Input()
prize_small: string;

@Input()
prize_large: string;
  constructor() { }

  ngOnInit() {
  }

setPrize(size: string) {
  this.setPrizeEvent.emit(size);
}
}
