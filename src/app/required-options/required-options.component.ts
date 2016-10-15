import { Component, Input , OnInit } from '@angular/core';
import { PainGarnisRequiredService } from '../shared/model/pain-garnis-required.service';
import { VegetariensService } from '../shared/model/vegetariens.service';
import { GarnisRequired } from '../shared/model/garnis-required';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PainVegetarien } from "../shared/model/pain_vegetarien";
import { Order } from "../shared/model/order";
import { OrderService } from "../shared/model/order.service";

@Component({
  selector: 'app-required-options',
  templateUrl: './required-options.component.html',
  styleUrls: ['./required-options.component.css']
})
export class RequiredOptionsComponent implements OnInit{

  paingarnisrequired: GarnisRequired[];
  sizeDisabled = true;
  typeDisabled = true;
  boolDisabled = true;
  painVeg: PainVegetarien;
  prize_entier: string;
  prize_demi: string;
  num: number;
  constructor(private vegetariensService: VegetariensService,private orderService: OrderService,
    private garnisrequiredService: PainGarnisRequiredService, private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    /*this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log("name=" + id);
    });
*/
        const painveg$ = this.route.params.
         switchMap(params => this.vegetariensService.findPainVegetarienByKey(params['id']));
  //  this.route.params.forEach((params: Params) => {
   //   let id = params['id'];
   //   const painveg$ = this.vegetariensService.findPainVegetarienByKey(id);

      painveg$.subscribe(painveg => this.painVeg = painveg);
         this.prize_demi = this.painVeg.prize_demi;
         this.prize_entier = this.painVeg.prize_entier;
         this.orderService.order.painVegetarien = this.painVeg;
         this.orderService.order.size = "";
         this.orderService.order.type = "";
         this.orderService.order.totalprize = 0;
  //    });
    this.garnisrequiredService.findAllGarnisRequired()
      .subscribe(paingarnisrequired => this.paingarnisrequired = paingarnisrequired);


  }

  setPrize(prize: string) {

    switch (prize) {
      case 'entier':
        this.orderService.order.totalprize = Number(this.painVeg.prize_entier);
        break;
      case 'demi':
        this.orderService.order.totalprize = Number(this.painVeg.prize_demi);
        break;
      default:
        this.orderService.order.totalprize = Number(this.painVeg.prize_entier);
        break;
    }
     this.sizeDisabled = false;
     if ( this.typeDisabled === false){
       this.boolDisabled = false;
     }
  }

setType(itemname: string) {
  this.orderService.order.type = itemname;
      this.typeDisabled = false;
      if ( this.sizeDisabled === false){
       this.boolDisabled = false;
     }
  }
  gotoOptions(): void {
    let link = ['/options',];
    this.router.navigate(link);
  }
}
