import { Router } from '@angular/router';
import { OrderService } from './../../model/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'pizza-dialog',
  templateUrl: './pizzadialog.component.html',
  styleUrls: ['./pizzadialog.component.scss'],
  providers: []
})
export class PizzadialogComponent implements OnInit {

tp: number;
  constructor(public os: OrderService, public router: Router) {
   }

  ngOnInit() {
this.tp= this.os.getTotalPrize();
  }
  goToOrder(){
let link=['/order'];
this.router.navigate(link);
  }

}


