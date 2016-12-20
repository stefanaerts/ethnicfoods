import { PainGarnisRequiredService } from './../shared/model/pain-garnis-required.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from "@angular/router";
import { OrderService } from "../shared/model/order.service";
import { ToastService } from "../shared/toast.service";

@Component({
  selector: 'app-required-options',
  templateUrl: './required-options.component.html',
  styleUrls: ['./required-options.component.scss']
})
export class RequiredOptionsComponent implements OnInit, OnDestroy {
  sizeDisabled = true;
  boolDisabled = true;


  constructor(private toastService: ToastService, private orderService: OrderService,
    private garnisrequiredService: PainGarnisRequiredService, private router: Router
    ) {
  }

goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  ngOnInit() {

    try {
      this.orderService.setTempTotalPrize(this.orderService.getTotalPrize());

    } catch (error) {

      this.toastService.showError();
    }
  }

  ngOnDestroy() {
    this.boolDisabled = true;
  }

  setPrize(type: string) {
    try {
      switch (type) {
        case 'large':
          this.orderService.getProduct().prize = this.orderService.getProduct().prize_large;
          this.orderService.setTempTotalPrize(
            this.orderService.getTotalPrize() + +this.orderService.getProduct().prize_large);
          break;
        case 'small':
          this.orderService.getProduct().prize = this.orderService.getProduct().prize_small;
          this.orderService.setTempTotalPrize(
            this.orderService.getTotalPrize() + +this.orderService.getProduct().prize_small);
          break;

        default:
          break;
      }
      //       break;
      //   }
      this.sizeDisabled = false;
 //     if (this.typeDisabled === false) {
        this.boolDisabled = false;
 //     }
    } catch (e) {
      this.toastService.showError();
    }
  }

  /*setType(itemname: string) {
    try {
      this.orderService.getProduct().typeOfBread = itemname;

      this.typeDisabled = false;
      if (this.sizeDisabled === false) {
        this.boolDisabled = false;
      }

    } catch (e) {
      this.toastService.showError();
    }
  }*/

  gotoOptions(): void {
    //   this.orderService.setTempTotalPrize(this.tempTotalPrize);
    let link = ['/options'];
    this.router.navigate(link);
  };
}
