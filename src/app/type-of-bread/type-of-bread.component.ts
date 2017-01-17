import { PainGarnisRequiredService } from './../shared/model/pain-garnis-required.service';
import { Router } from '@angular/router';
import { ToastService } from './../shared/toast.service';
import { OrderService } from './../shared/model/order.service';
import { Component, OnInit } from '@angular/core';
import { PainGarnisRequired } from './../shared/model/pain-garnis-required';

@Component({
  selector: 'app-type-of-bread',
  templateUrl: './type-of-bread.component.html',
  styleUrls: ['./type-of-bread.component.scss']
})
export class TypeOfBreadComponent implements OnInit {
  paingarnisrequired: PainGarnisRequired[];
selected = [];
 //  typeDisabled = true;
  constructor(private garnisrequiredService: PainGarnisRequiredService,
    private orderService: OrderService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {

//  this.orderService.getProduct().typeOfBread = null;
    this.garnisrequiredService.findAllGarnisRequired()
      .subscribe(paingarnisrequired => this.paingarnisrequired = paingarnisrequired);
      // this.orderService.getOrder().painVegetarien.forEach(element => {
      //    alert(element.options);
      //    });

  }
  setType(itemname: string) {
    try {
      this.orderService.getProduct().typeOfBread = itemname;

      //   this.typeDisabled = false;
      /*   if (this.sizeDisabled === false) {
           this.boolDisabled = false;
         }
         */
    } catch (e) {
      this.toastService.showError();
    }
  }
addOrder() {
    try {
        // this.orderService.getProduct().options = this.selected;
         this.orderService.getOrder().totalPrize = this.orderService.getTempTotalPrize();
      //   this.orderService.getProduct().options = this.selected.sort();
          this.goToDrinks();

    } catch (error) {
      this.toastService.showError();
    }
  }

  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }

  goToDrinks(): void {
    //   this.orderService.setTempTotalPrize(this.tempTotalPrize);
    let link = ['/drinks'];
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
