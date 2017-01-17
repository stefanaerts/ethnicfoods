import { DrinksService } from './../shared/model/drinks.service';
import { Router } from '@angular/router';
import { OrderService } from './../shared/model/order.service';
import { Component, OnInit } from '@angular/core';
import { Drink } from '../shared/model/Drink';
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks: Drink[];

  selected = [];

  constructor(private orderService: OrderService, private router: Router, private drinkservice: DrinksService) { }

  ngOnInit() {
  //  alert(this.orderService.getAllOrderedPainVegetarien().length);
    this.selected = new Array();
    this.drinkservice.findAllDrinks()
      .subscribe(drinks => this.drinks = drinks);
    // this.orderService.getOrder().painVegetarien.forEach(element => {
    //    alert(element.options);
    //    });

  }
  addOrder() {
    try {
      let tempprize: number=0;
      this.selected.sort();
      this.selected.forEach(element => {
          this.orderService.setDrink(element);
      });
 //this.orderService.setTotalPrize(tempprize);
// alert(this.orderService.getProduct().name);
        this.orderService.pushProductToOrder(this.orderService.getProduct());

               this.orderService.setProduct(null);
      this.goToHome();
    } catch (error) {
      alert('error in adding drinks to order');
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

  };
  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToTypeOfBread(){
     let link = ['/typeOfBread'];
    this.router.navigate(link);
  }
}
