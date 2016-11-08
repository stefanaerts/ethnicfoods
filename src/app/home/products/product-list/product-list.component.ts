import { HomeComponent } from './../../home.component';
import { CounterService } from './../../../shared/counter/counter.service';
import { ToastService } from './../../../shared/toast.service';
import { Product } from './../../../shared/model/product';
import { Constants } from './../../../shared/constants';
import { OrderService } from './../../../shared/model/order.service';
import { Component, Input } from '@angular/core';
import { Item } from '../../../shared/model/item';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

  @Input()
  items: Item[];

  @Input()
  boolVisible;

  // @Input()
  // typeOfProduct: string;

  constructor( private homeComponent: HomeComponent,
   private counterService: CounterService, private router: Router, private orderService: OrderService, private toastService: ToastService) {
  }


  addToOrder(item: Product) {
try {
         // this.orderService.getProduct().options = this.selected;
          this.orderService.getOrder().totalPrize = (this.orderService.getOrder().totalPrize + +item.prize);
          this.orderService.pushProductToOrder(item);
          this.orderService.setProduct(null);
    } catch (error) {
 //       console.log(error);
      this.toastService.showError();
    }
  }

  checkForRequirementsOrOptions(item: Product): void {

    this.orderService.setProduct(item);
    switch (item.type) {
      case Constants.PLATDUJOUR:
        this.addToOrder(item);
        break;
      case Constants.DESSERTS:
        this.addToOrder(item);
        break;
      case Constants.FORMULES:
        this.addToOrder(item);
        break;
      case Constants.PETITEENTREE:
        this.addToOrder(item);
        break;
      case Constants.SALADES:
        this.addToOrder(item);
        break;
      case Constants.SPECIALITES:
           this.addToOrder(item);
        break;
      case Constants.PAINVEGETARIEN:
          this.goToRequirements();
        break;
      case Constants.PAINVOLAILLE:
         this.goToRequirements();
        break;
     case Constants.PAINPOISSON:
         this.goToRequirements();
        break;

      case Constants.PAINVIANDE:
         this.goToRequirements();
        break;
      default:
      alert("No Product selected");
        break;
    }

  }
  goToRequirements() {
    let link = ['/required'];
    this.router.navigate(link);
  }
}
