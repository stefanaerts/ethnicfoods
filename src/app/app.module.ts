import { googlemapsConfig } from './../environments/googlemaps.config';
import { AgmCoreModule } from "angular2-google-maps/core";
import { UserService } from './shared/model/user.service';
import { DatetimeService } from './shared/datetime/datetime.service';
import { CounterService } from './shared/counter/counter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2/index';
import {AngularFireOfflineModule} from 'angularfire2-offline';
import { firebaseConfig } from '../environments/firebase.config';
import { HomeComponent } from './home/home.component';
import { DessertsService } from './shared/model/desserts.service';
import { SaladesService } from './shared/model/salades.service';
import { PainVegetariensService } from './shared/model/pain-vegetariens.service';
import { PainVolaillesService } from './shared/model/pain-volailles.service';
import { PainViandesService } from './shared/model/pain-viandes.service';
import { FormulesService } from './shared/model/formules.service';
import { PlatDuJourService } from './shared/model/plat-du-jour.service';
import { SpécialitésService } from './shared/model/spécialités.service';
import { PetiteEntreesService } from './shared/model/petite-entrees.service';
import { PainPoissonsService } from './shared/model/pain-poissons.service';
import { PainGarnisOptionsService } from './shared/model/pain-garnis-options.service';
import { PainGarnisRequiredService } from './shared/model/pain-garnis-required.service';
import { DrinksService } from './shared/model/drinks.service';
import { OrderService } from './shared/model/order.service';

import { RouterModule } from '@angular/router';
import { routes } from './router.config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { OptionsComponent } from './options/options.component';
import { RequiredOptionsComponent } from './required-options/required-options.component';
import { MdCardSubtitleComponent } from './shared/templates/headers/md-card-subtitle/md-card-subtitle.component';
import { RadioButtonWithPrizeComponent } from './shared/templates/radio-buttons/radio-button-with-prize/radio-button-with-prize.component';
import { RadioButtonWithoutPrizeComponent } from
  './shared/templates/radio-buttons/radio-button-without-prize/radio-button-without-prize.component';
import { TotalPrizeComponent } from './shared/templates/md-cards/total-prize/total-prize.component';
import { AddActionComponent } from './shared/templates/action-buttons/add-action/add-action.component';
import { ProductListComponent } from './home/products/product-list/product-list.component';
import { Constants } from './shared/constants';
import { CounterItemComponent } from './shared/counter/counter-item/counter-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { PizzadialogComponent } from './shared/pizza/pizzadialog/pizzadialog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PpComponent } from './pp/pp.component';
import { BetaalMenuComponent } from './betaal-menu/betaal-menu.component';
import { CcpickerComponent } from './ccpicker/ccpicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NoWifiDialogComponent } from './no-wifi-dialog/no-wifi-dialog.component';
import { ConfirmNoWifiDialogComponent } from './confirm-no-wifi-dialog/confirm-no-wifi-dialog.component';
import { DatetimeComponent } from './shared/datetime/datetime/datetime.component';
import { TypeOfBreadComponent } from './type-of-bread/type-of-bread.component';
import { ExtraOptionsComponent } from './drinks/extra-options.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PickupOrDeliveryComponent } from './pickup-or-delivery/pickup-or-delivery.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { FindDistanceComponent } from './find-distance/find-distance.component';
import { OrderSummaryDeliveryComponent } from './order-summary-delivery/order-summary-delivery.component';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';
import { OrderedListComponent } from './shared/ordered-list/ordered-list.component';
import { OrderListToolbarComponent } from './shared/toolbars/order-list-toolbar/order-list-toolbar.component';
import { CalendarSelectorComponent } from './shared/calendar/calendar-selector/calendar-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    OptionsComponent,
    RequiredOptionsComponent,
    MdCardSubtitleComponent,
    RadioButtonWithPrizeComponent,
    RadioButtonWithoutPrizeComponent,
    TotalPrizeComponent,
    AddActionComponent,
    ProductListComponent,
    CounterItemComponent,
    OrderSummaryComponent,
    SnackbarComponent,
    PizzadialogComponent,
    CheckoutComponent,
    PpComponent,
    BetaalMenuComponent,
    CcpickerComponent,
    DialogComponent,
    ConfirmDialogComponent,
    PpComponent,
    NoWifiDialogComponent,
    ConfirmNoWifiDialogComponent,
    DatetimeComponent,
    TypeOfBreadComponent,
    ExtraOptionsComponent,
    InvoiceComponent,
    DeliveryComponent,
    PickupOrDeliveryComponent,
    DeliveryAddressComponent,
    FindDistanceComponent,
    OrderSummaryDeliveryComponent,
    SimpleDialogComponent,
    OrderedListComponent,
    OrderListToolbarComponent,
    CalendarSelectorComponent,
  ],
  entryComponents: [
    AppComponent,
    DialogComponent,
    ConfirmDialogComponent,
    PizzadialogComponent,
    NoWifiDialogComponent,
    ConfirmNoWifiDialogComponent,
    DatetimeComponent,
    SimpleDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    RouterModule.forRoot(routes),
  AgmCoreModule.forRoot(googlemapsConfig
    ),
    Ng2DatetimePickerModule,
ReactiveFormsModule,
  ],
  providers: [UserService,FormBuilder, DessertsService, SaladesService, SpécialitésService, PainViandesService, PainVolaillesService,
    FormulesService, PetiteEntreesService, PainVegetariensService, PlatDuJourService, PainPoissonsService,
    PainGarnisOptionsService, DrinksService,
  PainGarnisRequiredService, Constants, OrderService, CounterService, DatetimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
