import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-or-delivery',
  templateUrl: './pickup-or-delivery.component.html',
  styleUrls: ['./pickup-or-delivery.component.css']
})
export class PickupOrDeliveryComponent implements OnInit {

  constructor(public router: Router,public os: OrderService) { }

  ngOnInit() {
  }
  goToPickup() {
this.os.setDeliveryMethod('PICKUP');
    let link = ['/order'];
    this.router.navigate(link);
  }
  goToDeliveryAddress() {
    let link = ['/deliveryaddress'];
    this.router.navigate(link);
  }
}
