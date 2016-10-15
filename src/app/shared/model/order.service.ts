import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable()
export class OrderService {
  order: Order;
  constructor() {
    this.order = new Order(null, "", "", 0);
  }
  clearOrder() {
  //  this.order = new Order(null, "", "", 0);
  }
}
