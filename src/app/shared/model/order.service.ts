import { Product } from './product';
import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable()
export class OrderService {
  private order: Order;
  private product: Product;
  private tempTotalPrize: number;
  constructor() {
    console.log('instance of orderservice Created');
    this.order = new Order([], [], [], [], [], [], [], [], [], [], 0, this.getDate_Time());

  }

  setProduct(product: Product) {
    this.product = product;
 //   this.product.itemId = this.getDate_Time();
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
          console.log("pushed veg PainToOrder=" + this.order.painVegetarien.length);
          break;
        case Constants.PAINVOLAILLE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painVolaille.push(product);
          console.log("pushed vol PainToOrder=" + this.order.painVolaille.length);
          break;
        case Constants.PAINVIANDE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painViande.push(product);
          console.log("pushed viande PainToOrder=" + this.order.painViande.length);
          break;
        case Constants.PAINPOISSON:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painPoisson.push(product);
          console.log("pushed poisson PainToOrder=" + this.order.painPoisson.length);
          break;
        case Constants.DESSERTS:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.dessert.push(product);
          console.log("pushed dessert ToOrder=" + this.order.dessert.length);
          break;
        case Constants.FORMULES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.formule.push(product);
          console.log("pushed formule ToOrder=" + this.order.formule.length);
          break;
        case Constants.SPECIALITES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.specialite.push(product);
          console.log("pushed specialite PainToOrder=" + this.order.specialite.length);
          break;
        case Constants.PETITEENTREE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.petiteentree.push(product);
          console.log("pushed petiteentree PainToOrder=" + this.order.petiteentree.length);
          break;
        case Constants.PLATDUJOUR:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.platdujour.push(product);
          console.log("pushed platdujour PainToOrder=" + this.order.platdujour.length);
          break;
        case Constants.SALADES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.salade.push(product);
          console.log("pushed salade PainToOrder=" + this.order.salade.length);
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
