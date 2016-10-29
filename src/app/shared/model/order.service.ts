import { CounterService } from './../counter/counter.service';
import { Product } from './product';
import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable()
export class OrderService {
  private order: Order;
  private product: Product;
  private tempTotalPrize: number;
  constructor(private counterService: CounterService) {
    this.order = new Order([], [], [], [], [], [], [], [], [], [], 0, this.getDate_Time());

  }

  setProduct(product: Product) {
    this.product = product;
  }
  getProduct() {
    return this.product;
  }
  setTempTotalPrize(tempTotalPrize: number) {
    this.tempTotalPrize = tempTotalPrize;
  }
  getTempTotalPrize() {
    return this.tempTotalPrize;
  }

  getDate_Time() {
    let d = new Date();
    return d.toLocaleTimeString();
  }
  getOrder() {
    return this.order;
  }

  getTotalPrize() {
    return this.order.totalPrize;
  }

  getAllOrderedPainVolailles() {
    return this.order.painVolaille;
  }
  getAllOrderedPainViandes() {
    return this.order.painViande;
  }
  getAllOrderedPainPoisson() {
    return this.order.painPoisson;
  }
  getAllOrderedPainVegetarien() {
    return this.order.painVegetarien;
  }
  clearOrder() {
    this.order = null;
  }
  pushProductToOrder(product: Product) {

    try {
      switch (product.type) {
        case Constants.PAINVEGETARIEN:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painVegetarien.push(product);
          this.counterService.inc(product.$key);

          break;
        case Constants.PAINVOLAILLE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painVolaille.push(product);
          this.counterService.inc(product.$key);
        break;
        case Constants.PAINVIANDE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painViande.push(product);
        this.counterService.inc(product.$key);
          break;
        case Constants.PAINPOISSON:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painPoisson.push(product);
                  this.counterService.inc(product.$key);
          break;
        case Constants.DESSERTS:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.dessert.push(product);
                  this.counterService.inc(product.$key);
          break;
        case Constants.FORMULES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.formule.push(product);
                  this.counterService.inc(product.$key);
          break;
        case Constants.SPECIALITES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.specialite.push(product);
                  this.counterService.inc(product.$key);
          break;
        case Constants.PETITEENTREE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.petiteentree.push(product);
                  this.counterService.inc(product.$key);
          break;
        case Constants.PLATDUJOUR:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.platdujour.push(product);
                  this.counterService.inc(product.$key);
          break;
        case Constants.SALADES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.salade.push(product);
                  this.counterService.inc(product.$key);
          break;

        default:
        alert("product not found");
          break;
      }
    } catch (error) {
      console.log("error in pushPainToOrder=" + error);

    }

  }

}
