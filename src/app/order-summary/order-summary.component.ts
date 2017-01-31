import { Drink } from './../shared/model/drink';
/*import { DatetimeService } from './../shared/datetime/datetime.service';
import { Item } from './../shared/model/item';
import { element } from 'protractor';
import { Constants } from './../shared/constants';
import { CounterService } from './../shared/counter/counter.service';
*/
import { Product } from './../shared/model/product';
import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Order } from '../shared/model/order';
/*import { DessertsService } from './../shared/model/desserts.service';
import { SaladesService } from './../shared/model/salades.service';
import { SpécialitésService } from './../shared/model/spécialités.service';
import { PainVegetariensService } from './../shared/model/pain-vegetariens.service';
import { PainVolaillesService } from './../shared/model/pain-volailles.service';
import { PainViandesService } from './../shared/model/pain-viandes.service';
import { FormulesService } from './../shared/model/formules.service';
import { PlatDuJourService } from './../shared/model/plat-du-jour.service';
import { PetiteEntreesService } from './../shared/model/petite-entrees.service';
import { PainPoissonsService } from './../shared/model/pain-poissons.service';
*/
import * as $ from 'jquery';

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


export class OrderSummaryComponent implements OnInit,AfterViewInit {
  order: Order;
  visibool: boolean = false;
  counts: ProductDisplay;
  arr = [];
  arrdupl = [];
  currentDate: number = 0;
// pickupTimeTemp: String = '';
  pickupTime: String = '';

  constructor(public router: Router, public orderService: OrderService) {
 //   console.log('in construct');
    this.order = this.orderService.getOrder();
  }

  ngAfterViewInit(){
  }

  ngOnInit() {
//console.log('in init');
 this.order = this.orderService.getOrder();
  $(window).scrollTop(300);

 //this.order.painVegetarien.forEach(element => {
 //  alert(element.options);
 // });
  //  this.currentDate = Date.now();
 //  this.pickupTimeTemp = new Date(Date.now() + (30 * 60 * 1000)).toString();
  //   this.orderService.setPickupTime(this.pickupTimeTemp.substring(0, this.pickupTimeTemp.length - 14));
    // {{pickupTime | date:'medium'}}
   // this.order.painVegetarien.sort();

    this.order.painVegetarien.sort(
      (leftSide, rightSide): number => {
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
        if(leftSide.name < rightSide.name)return -1;
        if(leftSide.name > rightSide.name)return 1;
        if (leftSide.name === rightSide.name)
        {
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
  }
  deleteDrink(drink: Drink) {
    this.orderService.removeDrinkFromOrder(drink);
  }

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
