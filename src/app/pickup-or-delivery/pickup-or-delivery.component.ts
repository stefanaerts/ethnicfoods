import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-or-delivery',
  templateUrl: './pickup-or-delivery.component.html',
  styleUrls: ['./pickup-or-delivery.component.css']
})
export class PickupOrDeliveryComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
goToPickup() {
    let link = ['/order'];
    this.router.navigate(link);
  }
  goToDelivery() {
    let link = ['/delivery'];
    this.router.navigate(link);
  }
}
