import { element } from 'protractor';
import { PainGarnisOptionsService } from './../shared/model/pain-garnis-options.service';
import { Router } from '@angular/router';
import { OrderService } from './../shared/model/order.service';
import { Component, OnInit } from '@angular/core';
import { PainGarnisOption } from './../shared/model/pain-garnis-option';
@Component({
  selector: 'app-extraoptions',
  templateUrl: './extra-options.component.html',
  styleUrls: ['./extra-options.component.scss']
})
export class ExtraOptionsComponent implements OnInit {
  extraOptions: PainGarnisOption[];
  selected = [];

  constructor(private router: Router,
    private orderService: OrderService, private extraOptionsService: PainGarnisOptionsService) { }

  ngOnInit() {

    //  alert(this.orderService.getAllOrderedPainVegetarien().length);
    this.selected = new Array<PainGarnisOption>();
    this.extraOptionsService.findAllGarnisOptions()
      .subscribe(extraOptions => this.extraOptions = extraOptions);
  }
  addOrder() {
    try {
      let tempprize: number = 0;
      let tempprize2 = 0;
      let tempprize3 = 0;
      this.selected.sort();
      this.selected.forEach(element => {

        this.orderService.getProduct().options.push(element.name);
        tempprize = element.prize;
        tempprize2 = this.orderService.getProduct().prize;
        tempprize3 = Number(tempprize) + Number(tempprize2);
        //this.orderService.getProduct().prize = (this.orderService.getProduct().prize + +0.50);
           this.orderService.getProduct().prize = tempprize3;
          this.orderService.getOrder().totalPrize = Number(this.orderService.getOrder().totalPrize)  + Number(tempprize);
      });
         this.orderService.setProduct(null);

      this.goToHome();
    } catch (error) {
      alert('error in adding extraoptions to order');
    }
  }
  toggle(id) {
    //  alert(id);
    let index = this.selected.indexOf(id);
    // alert(index);
    if (index === -1) {
      this.selected.push(id);
    } else {
      this.selected.splice(index, 1);
    };

  };
  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToTypeOfBread() {
    let link = ['/typeOfBread'];
    this.router.navigate(link);
  }
}
