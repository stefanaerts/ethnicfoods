import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betaal-menu',
  templateUrl: './betaal-menu.component.html',
  styleUrls: ['./betaal-menu.component.scss']
})
export class BetaalMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
  goToPayPal() {
    try {
       let link = ['/pp'];
    this.router.navigate(link);
    } catch (error) {
      alert('something went wrong.See message:-> ' + error);
window.location.href = '/home';
    }


  }

  goToCheckout() {
    let link = ['/checkout'];
    this.router.navigate(link);
  }
  goToCcPicker() {
    let link = ['/ccpick'];
    this.router.navigate(link);
  }
}
