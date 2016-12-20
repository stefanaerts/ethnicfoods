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

    let dt = new Date(Date.now());
    let tmp = dt.toString().substring(0, dt.toString().length - 14);
    return tmp;
  }
  getOrder() {
    return this.order;
  }

  getTotalPrize() {
    return this.order.totalPrize;
  }
  getTotalPrizeAsString() {
    return this.order.totalPrize.toFixed(2);
  }
  getTotalTaxAsString() {
    return (this.order.totalPrize * 0.06).toFixed(2);
  }

  checkTotalPrizeNotNull() {
    return (this.order.totalPrize === 0);
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
  removeProductFromOrder(product: Product) {
    try {
      let index;
      switch (product.type) {
        case Constants.PAINVEGETARIEN:
                 console.log('painveg: product.orderid=' + product.orderId);
        console.log('painveg: order.orderid=' + this.order.orderId);

          index = this.order.painVegetarien.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.painVegetarien.splice(index, 1);
          }
          this.counterService.dec(product.$key);
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
        console.log('product.orderid=' + product.orderId);
        console.log('order.orderid=' + this.order.orderId);

          index = this.order.platdujour.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.platdujour.splice(index, 1);
          }
          this.counterService.dec(product.$key);
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
      // console.log("error in pushPainToOrder=" + error);

    }


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
      // console.log("error in pushPainToOrder=" + error);

    }

  }

}
