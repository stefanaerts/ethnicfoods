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
  extraOptions: Product[] = new Array<Product>();
   constructor(product: Product) {
    this.prod = product;
 }
}

@Component({
  selector: 'app-order-summary',
  templateUrl: '/order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent implements OnInit {
  painVegetarien: ProductDisplay[];
  painVolaille: ProductDisplay[];
  painViande: ProductDisplay[];
  painPoisson: ProductDisplay[];
  dessert: ProductDisplay[];
  platdujour: ProductDisplay[];
  formule: ProductDisplay[];
  petiteentree: ProductDisplay[];
  specialite: ProductDisplay[];
  salade: ProductDisplay[];
  totalPrize: number;
  order: Order;
  //   orderId: string

  constructor(private router: Router, private orderService: OrderService,
    private counterService: CounterService,
    private dessertsService: DessertsService, private saladesService: SaladesService,
    private specialitesService: SpécialitésService, private vegetariensService: PainVegetariensService,
    private volaillesService: PainVolaillesService, private viandesService: PainViandesService,
    private poissonsService: PainPoissonsService, private formulesService: FormulesService,
    private platdujoursService: PlatDuJourService, private petiteentreesService: PetiteEntreesService,
  ) { }

  ngOnInit() {
    console.log("in ordersummarycomp");
    this.order = this.orderService.getOrder();
    this.initDisplayOrderedProducts();
    this.checkForOrders(this.order.painVegetarien, Constants.PAINVEGETARIEN);
    // this.checkForOrders(this.order.painVolaille, Constants.PAINVOLAILLE);
    // this.checkForOrders(this.order.painViande, Constants.PAINVIANDE);
    // this.checkForOrders(this.order.painPoisson, Constants.PAINPOISSON);
    // this.checkForOrders(this.order.dessert, Constants.DESSERTS);
    // this.checkForOrders(this.order.platdujour, Constants.PLATDUJOUR);
    // this.checkForOrders(this.order.formule, Constants.FORMULES);
    // this.checkForOrders(this.order.petiteentree, Constants.PETITEENTREE);
    // this.checkForOrders(this.order.specialite, Constants.SPECIALITES);
    // this.checkForOrders(this.order.salade, Constants.SALADES);


  }

  checkForOrders(orders: Product[], typeOfProduct) {
    let keepGoing = true;
    let displayProducts: ProductDisplay[] = new Array<ProductDisplay>();
    orders.forEach(element => {
       let pD: ProductDisplay = new ProductDisplay(element);
      if (displayProducts.length === 0 ) {
  //      debugger;
        displayProducts.push(pD);
      } else {
        displayProducts.forEach(el => {
          if (el.prod.$key !== pD.prod.$key) {
            displayProducts.push(pD);
          } else {
      //      if (el.prod.typeOfBread !== pD.prod.typeOfBread) {
//        debugger;
              el.extraOptions.push(pD.prod);
      //      }
          }
//          keepGoing = false;
        });
      }
    });
      switch (typeOfProduct) {
      case Constants.PAINVEGETARIEN:
        this.painVegetarien = displayProducts;
    //    console.log("painVegdata=" this.painVegetarien.)
        break;
      case Constants.PAINVOLAILLE:
        displayProducts = this.painVolaille;
        break;
      case Constants.PAINVIANDE:
        displayProducts = this.painViande;
        break;
      case Constants.PAINPOISSON:
        displayProducts = this.painPoisson;
        break;
      case Constants.DESSERTS:
        displayProducts = this.dessert;
        break;
      case Constants.FORMULES:
        displayProducts = this.formule;
        break;
      case Constants.PETITEENTREE:
        displayProducts = this.petiteentree;
        break;
      case Constants.SALADES:
        displayProducts = this.salade;
        break;
      case Constants.SPECIALITES:
        displayProducts = this.specialite;
        break;
      case Constants.PLATDUJOUR:
        displayProducts = this.platdujour;
        break;
      default:
        break;
    }
    //    if (keepGoing) {
    //      if (this.counterService.getCount(element.$key) > 0) {
    //        displayProducts.push(element);
    //        keepGoing = false;
    //      }
    //    }
    // });
  }

  initDisplayOrderedProducts() {
    this.painVegetarien = new Array<ProductDisplay>();
    this.painVolaille = new Array<ProductDisplay>();
    this.painViande = new Array<ProductDisplay>();
    this.painPoisson = new Array<ProductDisplay>();
    this.dessert = new Array<ProductDisplay>();
    this.platdujour = new Array<ProductDisplay>();
    this.specialite = new Array<ProductDisplay>();
    this.salade = new Array<ProductDisplay>();
    this.petiteentree = new Array<ProductDisplay>();
    this.formule = new Array<ProductDisplay>();
  }
  goToCheckout() {
    let link = ['/checkout'];
 //   this.router.navigate(link);
  }
}
