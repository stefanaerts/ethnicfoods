import { Constants } from './../../constants';
import { OrderService } from './../../model/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
declare var moment: any;
import { Subscription } from 'rxjs/Subscription';

class Message {
  text: Date;
}

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss']
})
export class CalendarSelectorComponent implements OnInit,OnDestroy {
message: Message;
   subscription: Subscription;
  minDate: Date;
  maxDate: Date;
  defaultValue: Date;
  delMethod;
  constructor(private orderService: OrderService) {
        // subscribe to home component messages

       this.message = new Message();
    this.message.text = moment.parseZone(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    this.subscription = this.orderService.getMessage().subscribe(message => { this.message = message; });
    this.delMethod = this.orderService.getDeliveryMethod();
    switch (this.orderService.getDeliveryMethod()) {
      case Constants.PICKUP:
        this.delMethod = Constants.PICKUP + ' TIME';
        break;
    case Constants.DELIVERY:
        this.delMethod = Constants.DELIVERY + ' TIME at ' + this.orderService.getDeliveryAddress();
        break;
      default:
        break;
    }
   }

  ngOnInit() {
       this.minDate = moment().format("YYYY-MM-DD");
    this.maxDate = new Date(Date.now() + (8640 * 60 * 1000));
    this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');

  }
ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
