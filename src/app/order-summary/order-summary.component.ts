import { Drink } from './../shared/model/drink';
import { Product } from './../shared/model/product';
import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Order } from '../shared/model/order';
declare var moment: any;
import { Subscription } from 'rxjs/Subscription';

class ProductDisplay {
  prod: Product;
  duplicateProducts: Array<string>;
  // constructor(product: Product) {
  //   this.prod=product;
  //   this.duplicateProducts=[];
  // }
}

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})


export class OrderSummaryComponent implements OnInit, OnChanges {
  // order: Order;
 // pTime;
  totalPay: string;
  totalPrize: string;
  totalTax: string;
  // minDate: Date;
  // maxDate: Date;
  // defaultValue: Date;

   constructor(private orderService: OrderService, public router: Router) {
  }
  ngOnChanges(changes) {
    // console.log(changes);
    //  this.pTime = this.orderService.getPickupTime();
  }

  ngOnInit() {
    this.totalPrize = this.orderService.getTotalPrizeAsString();
    this.totalPay = (Number(this.orderService.getTotalPrizeWithTaxAsString())).toFixed(2);
    this.totalTax = this.orderService.getTotalTaxAsString();
    //  this.order = this.orderService.getOrder();
   // this.minDate = moment().format("YYYY-MM-DD");
   // this.maxDate = new Date(Date.now() + (8640 * 60 * 1000));
   // this.defaultValue = moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    //  $(window).scrollTop(300);


  }
   setTotalPay(totalpay: string) {
    this.totalPay = totalpay;
    this.totalPrize = this.orderService.getTotalPrizeAsString();
    this.totalTax = this.orderService.getTotalTaxAsString();

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
