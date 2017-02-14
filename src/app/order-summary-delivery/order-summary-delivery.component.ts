import { Product } from './../shared/model/product';
import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Drink } from './../shared/model/drink';
import { Order } from '../shared/model/order';
declare var moment: any;
@Component({
  selector: 'app-order-summary-delivery',
  templateUrl: './order-summary-delivery.component.html',
  styleUrls: ['./order-summary-delivery.component.scss']
})
export class OrderSummaryDeliveryComponent implements OnInit {
  order: Order;
  visibool: boolean = false;
  arr = [];
  arrdupl = [];
  currentDate: number = 0;
  delTime: any = '';
  delFee: any = 0;
  totalPay: any = 0;
  minDate: Date;
  maxDate: Date;
  totalPrize: string;
  totalTax: string;
  delAddress: string;
  constructor(public router: Router, public orderService: OrderService) {
    //   console.log('in constructor ordersumm');
    //   this.order = this.orderService.getOrder();
  }

  ngOnInit() {
    this.totalPrize = this.orderService.getTotalPrizeAsString();
    this.totalPay = (Number(this.orderService.getTotalPrizeWithTaxAndFeeAsString())).toFixed(2);
    this.totalTax = this.orderService.getTotalTaxAsString();
    this.delTime = this.orderService.getDeliveryTime();
    this.delFee = this.orderService.getDeliveryFee();
    this.delAddress = this.orderService.getDeliveryAddress();
  }
  setTotalPay(totalpay: string) {
    this.totalPay = (Number(totalpay) + Number(this.orderService.getDeliveryFee())).toFixed(2);
    this.totalPrize = this.orderService.getTotalPrizeAsString();
    this.totalTax = this.orderService.getTotalTaxAsString();
    this.delFee = this.orderService.getDeliveryFee();
  };
  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToCheckout() {
    let link = ['/checkoutMenu'];
    this.router.navigate(link);
  }
  goToInvoice() {
    let link = ['/invoice'];
    this.router.navigate(link);
  }
}
