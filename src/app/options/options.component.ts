import { PainGarnisRequiredService } from './../shared/model/pain-garnis-required.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { OrderService } from "../shared/model/order.service";
import { ToastService } from "../shared/toast.service";
import { PainGarnisRequired } from './../shared/model/pain-garnis-required';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit, OnDestroy {
    paingarnisrequired: PainGarnisRequired[ ];

  selected = [];
   typeDisabled = true;
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();

  constructor(private toastService: ToastService, private orderService: OrderService,
    private garnisrequiredService: PainGarnisRequiredService, private router: Router) {
  }

  ngOnInit() {

  this.garnisrequiredService.findAllGarnisRequired()
        .subscribe(paingarnisrequired => this.paingarnisrequired = paingarnisrequired);
  }

  addOrder() {
    try {
         // this.orderService.getProduct().options = this.selected;
         this.orderService.getOrder().totalPrize = this.orderService.getTempTotalPrize();
         this.orderService.getProduct().options = this.selected.sort();
          this.orderService.pushProductToOrder(this.orderService.getProduct());
          this.orderService.setProduct(null);
          this.goToHome();

    } catch (error) {
      this.toastService.showError();
    }
  }
  toggle(id) {
    let index = this.selected.indexOf(id);
    if (index === -1) {
      this.selected.push(id);
    }else {
      this.selected.splice(index, 1);
    };
    this.selectedChange.emit(this.selected);
  };

  exists(id) {
    return this.selected.indexOf(id) > -1;
  }
  ngOnDestroy() {

    //  this.orderService.clearOrder();
  }
setType(itemname: string) {
    try {
      this.orderService.getProduct().typeOfBread = itemname;

      this.typeDisabled = false;
   /*   if (this.sizeDisabled === false) {
        this.boolDisabled = false;
      }
      */
    } catch (e) {
      this.toastService.showError();
    }
  }

goToHome() {
  let link = ['/home'];
    this.router.navigate(link);
}

 goToRequiredOptions(): void {
    //   this.orderService.setTempTotalPrize(this.tempTotalPrize);
    let link = ['/required'];
    this.router.navigate(link);
  };
}
