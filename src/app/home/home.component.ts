import { Dessert } from '../shared/model/dessert';
import { DessertsService } from './../shared/model/desserts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  desserts: Dessert[];
  constructor(private dessertsService: DessertsService) { }

  ngOnInit() {
    this.dessertsService.findAllDesserts().do(console.log)
      .subscribe(desserts => this.desserts = desserts);

  }

}
