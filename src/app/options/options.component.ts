import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PainGarnisOptionsService } from '../shared/model/pain-garnis-options.service';
import { PainGarnisOption } from '../shared/model/pain-garnis-option';
import { Router } from "@angular/router";
import { OrderService } from "../shared/model/order.service";
import { ToastService } from "../shared/toast.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnDestroy {
  paingarnisoptions: PainGarnisOption[];
  selected = [];
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();

  constructor(private toastService: ToastService, private orderService: OrderService,
    private painGarnisoptionsService: PainGarnisOptionsService, private router: Router) {
  }

  ngOnInit() {

  this.painGarnisoptionsService.findAllGarnisOptions()
      .subscribe(paingarnisoptions => this.paingarnisoptions = paingarnisoptions);
  }

  addOrder() {
    try {
         // this.orderService.getProduct().options = this.selected;
         this.orderService.getOrder().totalPrize = this.orderService.getTempTotalPrize();
         this.orderService.getProduct().options = this.selected;
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

goToHome() {
  let link = ['/home'];
    this.router.navigate(link);
}

}
