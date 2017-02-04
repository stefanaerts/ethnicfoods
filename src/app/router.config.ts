import { FindDistanceComponent } from './find-distance/find-distance.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { PickupOrDeliveryComponent } from './pickup-or-delivery/pickup-or-delivery.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ExtraOptionsComponent } from './drinks/extra-options.component';
import { TypeOfBreadComponent } from './type-of-bread/type-of-bread.component';
// import { ConfirmWrongDateDialogComponent } from './confirm-wrong-date-dialog/confirm-wrong-date-dialog.component';
// import { WrongDateDialogComponent } from './wrong-date-dialog/wrong-date-dialog.component';
import { DatetimeComponent } from './shared/datetime/datetime/datetime.component';
import { ConfirmNoWifiDialogComponent } from './confirm-no-wifi-dialog/confirm-no-wifi-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CcpickerComponent } from './ccpicker/ccpicker.component';
import { PpComponent } from './pp/pp.component';
import {BetaalMenuComponent} from './betaal-menu/betaal-menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TesterComponent } from './test/tester/tester.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { RequiredOptionsComponent } from './required-options/required-options.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'required', component: RequiredOptionsComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'typeOfBread', component: TypeOfBreadComponent },
  { path: 'extraOptions', component: ExtraOptionsComponent },
  { path: 'invoice', component: InvoiceComponent },

  { path: 'order', component: OrderSummaryComponent },
  { path: 'test', component: TesterComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'pp', component: PpComponent },
  { path: 'ccpick', component: CcpickerComponent },
{ path: 'datepick', component: DatetimeComponent },

  { path: 'checkoutMenu', component: BetaalMenuComponent },
  { path: 'dialog', component: ConfirmDialogComponent },
  { path: 'nowifidialog', component: ConfirmNoWifiDialogComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'deliveryaddress', component: DeliveryAddressComponent },
  { path: 'findDistance', component: FindDistanceComponent },
  { path: 'pickupOrDeliveryMenu', component: PickupOrDeliveryComponent },

 // { path: 'wrongDateDialog', component: ConfirmWrongDateDialogComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/home' }

];
