import { PainGarnisRequiredService } from './../shared/model/pain-garnis-required.service';
import { Router } from '@angular/router';
//import { ToastService } from './../shared/toast.service';
import { OrderService } from './../shared/model/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PainGarnisRequired } from './../shared/model/pain-garnis-required';

@Component({
  selector: 'app-type-of-bread',
  templateUrl: './type-of-bread.component.html',
  styleUrls: ['./type-of-bread.component.scss']
})
export class TypeOfBreadComponent implements OnInit, OnDestroy {
  paingarnisrequired: PainGarnisRequired[];
  selected = [];
  boolDisabled = true;

  constructor(private garnisrequiredService: PainGarnisRequiredService,
   private orderService: OrderService, private router: Router) { }

//    private orderService: OrderService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {

    //  this.orderService.getProduct().typeOfBread = null;
    this.garnisrequiredService.findAllGarnisRequired()
      .subscribe(paingarnisrequired => this.paingarnisrequired = paingarnisrequired);
    // this.orderService.getOrder().painVegetarien.forEach(element => {
    //    alert(element.options);
    //    });

  }
  ngOnDestroy() {
    this.boolDisabled = true;
  }
  setType(itemname: string) {
    try {
      this.orderService.getProduct().typeOfBread = itemname;

      //   this.typeDisabled = false;
      /*   if (this.sizeDisabled === false) {
           this.boolDisabled = false;
         }
         */
        this.boolDisabled = false;
    } catch (e) {
      alert(e);
    //  this.toastService.showError();
    }
  }
  addOrder() {
    try {
      // this.orderService.getProduct().options = this.selected;
      this.orderService.getOrder().totalPrize = this.orderService.getTempTotalPrize();
      //   this.orderService.getProduct().options = this.selected.sort();
      this.goToExtraOptions();

    } catch (error) {
 //     this.toastService.showError();
      alert(error);
    }
  }

  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }

  goToExtraOptions(): void {
    //   this.orderService.setTempTotalPrize(this.tempTotalPrize);
    let link = ['/extraOptions'];
    this.router.navigate(link);
  };
  goToRequiredOptions(): void {
    // alert(this.selected.length);
    // + this.selected.length);
    //   this.orderService.setTempTotalPrize(this.tempTotalPrize);
    let link = ['/required'];
    this.router.navigate(link);
  };
}
