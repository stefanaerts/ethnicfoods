//import { PainGarnisOption } from './../shared/model/pain-garnis-option';
import { PainGarnisRequiredService } from './../shared/model/pain-garnis-required.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { OrderService } from "../shared/model/order.service";
//import { ToastService } from "../shared/toast.service";
//import { PainGarnisRequired } from './../shared/model/pain-garnis-required';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit, OnDestroy {
  //    options: PainGarnisOption [ ];
  options: string[];

  selected = [];
  boolchecked: boolean;

//  constructor(private toastService: ToastService, private orderService: OrderService,
constructor( private orderService: OrderService,
    private garnisrequiredService: PainGarnisRequiredService, private router: Router) {
  }

  ngOnInit() {
    $(window).scrollTop(0);
    this.options = this.orderService.getProduct().description.split(',');
    this.boolchecked = true;
    this.options.forEach(element => {
      this.selected.push(element);
    });
    ;
    //this.garnisrequiredService.findAllGarnisRequired()
    //      .subscribe(paingarnisrequired => this.paingarnisrequired = paingarnisrequired);
  }

  addOrder() {
    try {
      //         this.orderService.getProduct().options = this.selected;
      //      alert(this.selected.sort());
      //       alert(this.orderService.getTempTotalPrize());
      //     this.orderService.getOrder().totalPrize = this.orderService.getTempTotalPrize();
      // alert(this.orderService.getProduct().name);
      this.orderService.getProduct().options = this.selected.sort();
      //  alert(this.orderService.getProduct().options);
      //    this.orderService.pushProductToOrder(this.orderService.getProduct());
      //     this.orderService.getOrder().painVegetarien.forEach(element => {
      //     alert(element.options);
      //     });
      this.goToRequiredOptions();
    } catch (error) {
      //this.toastService.showError();
      alert(error);
    }
  }
  toggle(id) {
    //  alert(id);
    let index = this.selected.indexOf(id);
    // alert(index);
    if (index === -1) {
      this.selected.push(id);
    } else {
      //    this.boolchecked = false;
      this.selected.splice(index, 1);
    };

    //    this.selectedChange.emit(this.selected);
  };

  // exists(id) {
  //   return this.selected.indexOf(id) > -1;
  // }
  ngOnDestroy() {

    //  this.orderService.clearOrder();
  }
  // setType(itemname: string) {
  //     try {
  //       this.orderService.getProduct().typeOfBread = itemname;

  //       this.typeDisabled = false;
  //    /*   if (this.sizeDisabled === false) {
  //         this.boolDisabled = false;
  //       }
  //       */
  //     } catch (e) {
  //       this.toastService.showError();
  //     }
  //   }

  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToRequiredOptions(): void {
// alert(this.selected.length);
   // + this.selected.length);
    //   this.orderService.setTempTotalPrize(this.tempTotalPrize);
    let link = ['/required'];
    this.router.navigate(link);
  };
}
