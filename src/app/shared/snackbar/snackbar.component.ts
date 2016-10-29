import { PizzadialogComponent } from './../pizza/pizzadialog/pizzadialog.component';
import { Router } from '@angular/router';
import { OrderService } from './../model/order.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarRef, MdSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  providers: []
})

export class SnackbarComponent implements OnInit {

  snackBarRef: MdSnackBarRef<PizzadialogComponent>;
  //snackBarRef: MdSnackBarRef<SimpleMdSna>;

  constructor(private router: Router, private orderService: OrderService, public vc: ViewContainerRef, public sb: MdSnackBar ) { }

  ngOnInit() {
 //    console.log('in snackbar init');
  //  this.refreshTotalPrizeSnackbar();
  }


   refreshTotalPrizeSnackbar() {

  //  if (this.orderService.getTotalPrize() > 0) {
       let sbConfig = new MdSnackBarConfig(this.vc);
    //   sbConfig.
      this.snackBarRef = this.sb.openFromComponent(PizzadialogComponent,sbConfig);
    //  this.snackBarRef = this.sb.open('Total Prize(' + this.orderService.getTotalPrize() + ')', 'View Order', sbConfig);
  //    this.snackBarRef.afterDismissed().subscribe(result => {
  //      console.log('result: ' + result);
  //      this.snackBarRef = null;
  //    });
  //  }
   }

  goToOrderSummary() {
    let link = ['/order'];
    this.router.navigate(link);
  }
}


