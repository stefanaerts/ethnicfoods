import { SimpleDialogComponent } from './../../simple-dialog/simple-dialog.component';
import { OrderService } from './../../model/order.service';
import { Component, OnInit, Output, Input, EventEmitter, ViewContainerRef } from '@angular/core';
import { DatetimeService } from '../datetime.service';
declare var moment: any;
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';


// moment['locale']('nl-be'); //e.g. fr-ca
//noinspection TypeScriptCheckImport
// import { Ng2Datetime } from 'ng2-datetime-picker';
DatetimeService.firstDayOfWeek = 0; // e.g. 1, or 6

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  providers: [],
  styleUrls: ['./datetime.component.css'],

  styles: [`
     div { font-family: Courier; font-size: 13px}
     input { min-width: 200px; font-size: 15px;background: #ddd; }
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
  //defaultValue: Date;
  // minDate: Date;
  // maxDate: Date;
  dateSelected;
  dialogDate: any;
  selectedOption: string;
  @Output('ngModelChange') ngModelChange = new EventEmitter();
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() minHour: number;
  @Input() maxHour: number;
  @Input() defaultValue: Date;


  // moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:MM');
  //  defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000)), 'YYYY-MM-DD HH:mm');

  //   disabledDates = [new Date(2016, 11, 26), new Date(2016, 11, 27)];
  // date2: Date = new Date(Date.now());
  // maxDate = new Date(Date.now() + (4320 * 60 * 1000));
  // //  constructor(private fb: FormBuilder) { }
  constructor(public orderService: OrderService,
    public viewContainerRef: ViewContainerRef, public dialog: MdDialog ) {
    // moment.locale('nl-be');
    //   this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    //    this.defaultValue = moment().format('YYYY-MM-DD 12:30');
    //this.minHour=12;
    //this.maxHour=13;

    // this.date2 = this.defaultValue;
    //   this.dateSelected = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    //  this.dateSelected = moment().format('YYYY-MM-DD 12:30');
    //  this.minDate = moment().format("YYYY-MM-DD");
    //  this.maxDate = new Date(Date.now() + (5760 * 60 * 1000));
    // var d= moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:MM');
    // this.defaultValue=d;
    // this.defaultValue = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    //   d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    // this.minDate = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY/MM/DD, h:mm:ss');

    // this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('MMMM Do YYYY, h:mm:ss');
  }
   sendMessage(pTime:Date): void {
        // send message to subscribers via observable subject
        this.orderService.sendMessage(String(pTime));
    }
    clearMessage(): void {
        this.orderService.clearMessage();
    }
  ngOnInit() {
  }




  setTextValue(newValue): void {
   // console.log('in  setTextValue ' + this.defaultValue);
    let newDate = moment.parseZone(new Date(newValue)).format('YYYY-MM-DD HH:mm');
   // let defaultDate = moment.parseZone(new Date(this.defaultValue)).format('YYYY-MM-DD HH:mm');
    if (newDate > this.defaultValue) {
      this.orderService.sendMessage(newDate);
      (<HTMLInputElement>document.getElementById('cal')).value=String(newDate);
    }
    if (newDate < this.defaultValue) {
  this.dateSelected = String(this.defaultValue);
  (<HTMLInputElement>document.getElementById('cal')).value = String(this.defaultValue);

      this.sendMessage(this.defaultValue);
      this.dialogDate = newDate;
        moment.parseZone(new Date(newDate)).format('YYYY-MM-DD HH:mm');
      this.openDialog();

    }

  }
  openDialog() {
    let dialogRef: MdDialogRef<SimpleDialogComponent> = this.dialog.open(SimpleDialogComponent);
    dialogRef.componentInstance.oldDate = this.defaultValue;
    dialogRef.componentInstance.newDate = this.dialogDate;
  }

}

