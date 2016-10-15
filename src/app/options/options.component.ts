import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { PainGarnisOptionsService } from '../shared/model/pain-garnis-options.service';
import { GarnisOption } from '../shared/model/garnis-option';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Order } from "../shared/model/order";
import { OrderService } from "../shared/model/order.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit,OnDestroy  {
  paingarnisoptions: GarnisOption[];

  constructor(private orderService: OrderService,private garnisoptionsService: PainGarnisOptionsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
  console.log("ordername  in options=" + this.orderService.order.painVegetarien.name);
  console.log("order description  in options=" + this.orderService.order.painVegetarien.description);
  console.log("order  in options size=" + this.orderService.order.size);
  console.log("order  in options totalprize=" + this.orderService.order.totalprize);
  console.log("order  in options type =" + this.orderService.order.type);


      this.garnisoptionsService.findAllGarnisOptions()
        .subscribe(paingarnisoptions => this.paingarnisoptions = paingarnisoptions);
  }
  ngOnDestroy() {
  //  this.orderService.clearOrder();
  }
}
