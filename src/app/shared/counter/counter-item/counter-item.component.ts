import { CounterService } from './../counter.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-item',
  templateUrl: './counter-item.component.html',
  styleUrls: ['./counter-item.component.css'],
 // providers: [ CounterService ]
})
export class CounterItemComponent implements OnInit {

@Input()
itemKey: string;


constructor(private counterService: CounterService) {
  }

  getCount() {
  return this.counterService.getCount(this.itemKey)
  }

  ngOnInit() {
  }

}
