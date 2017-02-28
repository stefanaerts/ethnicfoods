import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { Drink } from './drink';
import { CounterService } from './../counter/counter.service';
import { Product } from './product';
import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Order } from './order';
declare var moment: any;
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class OrderService {
  private order: Order;
  private product: Product;

  private tempTotalPrize: number;

  delTime: String = '';
  deliveryMethod = '';
  deliveryFee: number = 0;
  distance: number = 0;
  deliveryAddress: string;
  private subject = new Subject<any>();
  constructor(private counterService: CounterService) {
    //   console.log("in constr van orderservice");
    this.order = new Order([], [], [], [], [], [], [], [], [], [], [], 0, this.getDate_Time());
  }


  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  setDeliveryMethod(deliveryMethod: string) {
    this.deliveryMethod = deliveryMethod;
  }
  getDeliveryMethod() {
    // console.log('in delmethod');
    return this.deliveryMethod;
  }
  setDeliveryFee(deliveryFee: number) {
    if (deliveryFee > 0) {
      this.deliveryFee = deliveryFee;
    } else {
      this.deliveryFee = 0;
    }
  }
  getDeliveryFee() {
    //console.log('in delfee');
    return this.deliveryFee;
  }
  setDistance(distance: number) {
    this.distance = distance;
  }
  getDistance() {
    return this.distance;
  }
  /*setPickupTime(ptime:Observable<Date>) {
  //console.log('in setpickuptime:' + ptime);
     //   this.pickupChange.subscribe(ptime  => {
      //      this.pickupTime = ptime;
     // });
    // this.pickupTime$ = ptime;

  }*/

  setDeliveryAddress(deliveryAddress: string) {
    this.deliveryAddress = deliveryAddress;
  }
  getDeliveryAddress() {
    return this.deliveryAddress;
  }
  getDeliveryTime() {
    return this.delTime;
  }
  setProduct(product: Product) {
    this.product = product;
  }
  setDrink(drink: Drink) {
    try {
      this.order.drinks.push(drink);
      this.order.totalPrize = this.order.totalPrize + +drink.prize;
    } catch (error) {
      alert(error);
    }
  }
  setTotalPrize(prize: number) {
    this.order.totalPrize = this.order.totalPrize + +prize;
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

  getDate() {
    // returns current day as string
    // let dt = new Date(Date.now('DD/MM/YYYY'));
    let tmp = moment(new Date(Date.now())).format('DD-MM-YY');
    //           moment(new Date(Date.now() + (30 * 60 * 1000))).format('YYYY-MM-DD HH:mm');
    //let tmp = dt.toString().substring(0, dt.toString().length - 24);
    return tmp;
  }
  getDate_Time() {

    let dt = new Date(Date.now());
    let tmp = dt.toString().substring(0, dt.toString().length - 14);
    return tmp;
  }
  getOrder() {
    //   console.log('in get order');
    return this.order;
  }

  getTotalPrize() {
    return this.order.totalPrize;
  }
  getTotalPrizeAsString() {
    //   console.log('in getTotalPrizeAsString' + teller);

    return this.order.totalPrize.toFixed(2);
  }
  getTotalPrizeWithTaxAsString() {
    let tp: number = this.order.totalPrize;
    let tax: number = this.order.totalPrize * 0.06;
    let total: number = tp + tax;
    return total.toFixed(2);
  }
  getTotalPrizeWithTaxAndFeeAsString() {
    let tp: number = this.order.totalPrize;
    let tax: number = this.order.totalPrize * 0.06;
    let delFee: number = Number(this.deliveryFee);
    let total: number = tp + tax + delFee;
    return total.toFixed(2);
  }

  getTotalTaxAsString() {
    return (this.order.totalPrize * 0.06).toFixed(2);
  }

  checkTotalPrizeNotNull() {
    //console.log('in check totalprizeNoTNull');
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
  getAllOrderedDrinks() {
    return this.order.drinks;
  }
  clearOrder() {
    this.order = null;
  }
  removeDrinkFromOrder(drink: Drink) {
    try {
      let index;
      index = this.order.drinks.indexOf(drink);
      if (index > -1) {
        this.order.totalPrize = (this.order.totalPrize - drink.prize);
        this.order.drinks.splice(index, 1);
      }
      this.counterService.dec(drink.name);

    } catch (error) {
      alert(error);
    }

  }
  removeProductFromOrder(product: Product) {
    try {
      let index;

      switch (product.type) {
        case Constants.PAINVEGETARIEN:
          //            console.log('painveg: product.orderid=' + product.orderId);
          //   console.log('painveg: order.orderid=' + this.order.orderId);

          index = this.order.painVegetarien.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.painVegetarien.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;

        case Constants.PAINVOLAILLE:
          index = this.order.painVolaille.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.painVolaille.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;

        case Constants.PAINVIANDE:
          index = this.order.painViande.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.painViande.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.PAINPOISSON:
          index = this.order.painPoisson.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.painPoisson.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.DESSERTS:
          index = this.order.dessert.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.dessert.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.FORMULES:
          index = this.order.formule.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.formule.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.SPECIALITES:
          index = this.order.specialite.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.specialite.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.PETITEENTREE:
          index = this.order.petiteentree.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.petiteentree.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.PLATDUJOUR:
          //   console.log('product.orderid=' + product.orderId);
          //   console.log('order.orderid=' + this.order.orderId);

          index = this.order.platdujour.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.platdujour.splice(index, 1);
          }
          this.counterService.dec(product.name);
          break;
        case Constants.SALADES:
          index = this.order.salade.indexOf(product);
          if (index > -1) {
            this.order.totalPrize = (this.order.totalPrize - product.prize);
            this.order.salade.splice(index, 1);
          }
          this.counterService.dec(product.name);
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
          this.counterService.inc(product.name);

          break;
        case Constants.PAINVOLAILLE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painVolaille.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.PAINVIANDE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painViande.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.PAINPOISSON:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.painPoisson.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.DESSERTS:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.dessert.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.FORMULES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.formule.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.SPECIALITES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.specialite.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.PETITEENTREE:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.petiteentree.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.PLATDUJOUR:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.platdujour.push(product);
          //   console.log('product.name' + product.name);
          this.counterService.inc(product.name);
          break;
        case Constants.DRINKS:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.drinks.push(product);
          this.counterService.inc(product.name);
          break;
        case Constants.SALADES:
          product.orderId = this.order.orderId;
          product.itemId = this.getDate_Time();
          this.order.salade.push(product);
          this.counterService.inc(product.name);
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
