import { OrderService } from './../../model/order.service';
import { Component, OnInit,  Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { DatetimeService } from '../datetime.service';

declare var moment: any;
// moment['locale']('nl-be'); //e.g. fr-ca
//noinspection TypeScriptCheckImport
// import { Ng2Datetime } from 'ng2-datetime-picker';
DatetimeService.firstDayOfWeek = 0; // e.g. 1, or 6

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  providers: [],
  //  styleUrls: ['./datetime.component.css']

  styles: [`
    div { font-family: Courier; font-size: 13px}
    input { min-width: 200px; font-size: 15px; }
    input.ng-dirty { background: #ddd; }
  `]
})

//  myForm: FormGroup; // our form model
//   date = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
//   gmtDate = '2015-01-01T00:00:00.000Z';
//   date5DefaultValue = new Date(2014, 11, 31, 21, 45, 59);
//  minDate = new Date(Date.now()  + (30 * 60 * 1000));
// minDate:String='';

export class DatetimeComponent implements OnInit {
  defaultValue: Date;
  minDate: Date;
  maxDate: Date;
  dateSelected: Date;

  @Output('ngModelChange') ngModelChange = new EventEmitter();
  // moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:MM');
  //  defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000)), 'YYYY-MM-DD HH:mm');

  //   disabledDates = [new Date(2016, 11, 26), new Date(2016, 11, 27)];
  // date2: Date = new Date(Date.now());
  // maxDate = new Date(Date.now() + (4320 * 60 * 1000));
  // //  constructor(private fb: FormBuilder) { }
  constructor(public orderService: OrderService,
      public viewContainerRef: ViewContainerRef) {
    // moment.locale('nl-be');
    this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    // this.date2 = this.defaultValue;
    this.dateSelected = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    this.minDate = moment().format("YYYY-MM-DD");
      this.maxDate = new Date(Date.now() + (5760 * 60 * 1000));
    // var d= moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:MM');
    // this.defaultValue=d;
    // this.defaultValue = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    //   d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    // this.minDate = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY/MM/DD, h:mm:ss');

    // this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('MMMM Do YYYY, h:mm:ss');
  }
  ngOnInit() {
}



  setTextValue(newValue): void {
 //   alert(newValue);
  //  alert(this.minDate);
  //  alert(this.maxDate);
    var newDate = moment(new Date(newValue));
    var oldDate = moment(this.defaultValue);
  //  alert((newDate < this.minDate));
// alert("newdate=" + newDate);
// alert("oldDate=" + oldDate);
    if (newDate > oldDate) {
         this.orderService.setPickupTime(newValue);
    }
    if (newDate < oldDate) {
       this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');

      alert("The pickup date cannot be before: " + this.defaultValue +
      " you entered " + moment(new Date(newDate)).format('YYYY-MM-DD HH:mm'));
         this.orderService.setPickupTime(oldDate);
    }
  }
}
