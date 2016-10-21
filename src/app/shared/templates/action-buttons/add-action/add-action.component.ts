import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {

@Input()
boolDisabled;

 @Output() setAddActionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

 setAddAction(methodName: string) {
  this.setAddActionEvent.emit(methodName);
 }
}
