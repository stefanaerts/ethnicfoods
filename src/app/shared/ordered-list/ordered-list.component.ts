import { SnackbarComponent } from './../snackbar/snackbar.component';
import { Router } from '@angular/router';
import { Drink } from './../model/drink';
import { Product } from './../model/product';
import { OrderService } from './../model/order.service';
import { Order } from './../model/order';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ordered-list',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['./ordered-list.component.scss']
})
export class OrderedListComponent implements OnInit {
 order: Order;
// @Input()  totalPay: string;
@Output() setTotalPay = new EventEmitter<string>();
//@Output() setTypeEvent = new EventEmitter<string>();
  constructor( private orderService: OrderService,public router: Router,public snb: SnackbarComponent) { }

  ngOnInit() {
  //  alert(this.totalPay);
      this.order = this.orderService.getOrder();
 this.order.painVegetarien.sort(
      (leftSide, rightSide): number => {
        if (leftSide.name < rightSide.name) return -1;
        if (leftSide.name > rightSide.name) return 1;
        if (leftSide.name === rightSide.name) {
          if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
          if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
          if (leftSide.typeOfBread === rightSide.typeOfBread) {
            if (leftSide.prize < rightSide.prize) return -1;
            if (leftSide.prize > rightSide.prize) return 1;
          }
        }
        return 0;
      });

    this.order.painVolaille.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.painViande.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.painPoisson.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.platdujour.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.drinks.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });

    this.order.dessert.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.petiteentree.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.specialite.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.salade.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
    this.order.formule.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) return -1;
      if (leftSide.name > rightSide.name) return 1;
      if (leftSide.name === rightSide.name) {
        if (leftSide.typeOfBread < rightSide.typeOfBread) return -1;
        if (leftSide.typeOfBread > rightSide.typeOfBread) return 1;
        if (leftSide.typeOfBread === rightSide.typeOfBread) {
          if (leftSide.prize < rightSide.prize) return -1;
          if (leftSide.prize > rightSide.prize) return 1;
        }
      }
      return 0;
    });
  }
 deleteItem(item: Product) {
    this.orderService.removeProductFromOrder(item);
this.setTotalPay.emit( Number(this.orderService.getTotalPrizeWithTaxAsString()).toFixed(2));
this.snb.refreshTotalPrizeSnackbar();
    //  this.delFee = this.orderService.getDeliveryFee();
  }
  deleteDrink(drink: Drink) {
    this.orderService.removeDrinkFromOrder(drink);
this.setTotalPay.emit( Number(this.orderService.getTotalPrizeWithTaxAsString()).toFixed(2));
this.snb.refreshTotalPrizeSnackbar();
 }

}
