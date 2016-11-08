import { element } from 'protractor';
import { Constants } from './../shared/constants';
import { CounterService } from './../shared/counter/counter.service';
import { Product } from './../shared/model/product';
import { OrderService } from './../shared/model/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/model/order';
import { DessertsService } from './../shared/model/desserts.service';
import { SaladesService } from './../shared/model/salades.service';
import { SpécialitésService } from './../shared/model/spécialités.service';
import { PainVegetariensService } from './../shared/model/pain-vegetariens.service';
import { PainVolaillesService } from './../shared/model/pain-volailles.service';
import { PainViandesService } from './../shared/model/pain-viandes.service';
import { FormulesService } from './../shared/model/formules.service';
import { PlatDuJourService } from './../shared/model/plat-du-jour.service';
import { PetiteEntreesService } from './../shared/model/petite-entrees.service';
import { PainPoissonsService } from './../shared/model/pain-poissons.service';

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
  styleUrls: ['./order-summary.component.scss']
})

export class OrderSummaryComponent implements OnInit {
  order: Order;
  visibool: boolean = false;
  counts: ProductDisplay;
  arr = [];
arrdupl = [];
  constructor(private router: Router, private orderService: OrderService,
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.order = this.orderService.getOrder();

    this.order.painVegetarien.sort();
      // (leftSide, rightSide): number => {
      //   if (leftSide.$key < rightSide.$key) return -1;
      //   if (leftSide.$key > rightSide.$key) return 1;
      //   return 0;
      // });
      this.order.painVolaille.sort();
       this.order.painViande.sort();
        this.order.painPoisson.sort();
         this.order.platdujour.sort();
    //    this.order.painVegetarien
    //  this.order.painVegetarien.forEach(
    //    element => {
    //      console.log(element.options[0]);
    //    }
    //     if (this.arr.some(x=>x.name === element.name) )
    //     {
    //     console.log("el in arr=" + element.name);
    //     this.arrdupl.push(element);
    //     }
    //     else{
    //        console.log("el not in arr=" + element.name);
    //        this.arr.push(element);
    //     }
    //   }
 //);
// console.log("arr.length na =" + this.arr.length);
// console.log("arrdupl.length na =" + this.arrdupl.length);

//  console.log("is element in arr" +
//   arr.some(element=>element.name==='Gouda'));
// this.arr.forEach(
//      element => {console.log(element.name + ',' + element.typeOfBread + ',' + element.options + ',' + element.prize);
//   });
   }

// hack(val) {
//   return Array.from(val);
// }
// getdupllength(){
//   return this.arrdupl.length;
// }
// initDisplayOrderedProducts() {
//   //  this.painVegetarien = new Array<ProductDisplay>();
// }
goToHome() {
  let link = ['/home'];
     this.router.navigate(link);
}
}
