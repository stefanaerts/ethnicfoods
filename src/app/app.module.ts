import { DatetimeService } from './shared/datetime/datetime.service';
import { CounterService } from './shared/counter/counter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2/index';
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
import { ToastService } from './shared/toast.service';
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
// import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { PizzadialogComponent } from './shared/pizza/pizzadialog/pizzadialog.component';
// import { CounterPipe } from './shared/pipes/counter.pipe';
import { TesterComponent } from './test/tester/tester.component';
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
import { DrinksComponent } from './drinks/drinks.component';
// import { WrongDateDialogComponent } from './wrong-date-dialog/wrong-date-dialog.component';
// import { ConfirmWrongDateDialogComponent } from './confirm-wrong-date-dialog/confirm-wrong-date-dialog.component';
let options = <ToastOptions>{
  animate: 'flyRight',
  positionClass: 'toast-bottom-right',
};

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
    TesterComponent,
    SnackbarComponent,
    PizzadialogComponent,
    // CounterPipe,
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
    DrinksComponent
    // WrongDateDialogComponent,
    // ConfirmWrongDateDialogComponent
  ],
  entryComponents: [
    AppComponent,
    DialogComponent,
    ConfirmDialogComponent,
    // SnackbarComponent,
    PizzadialogComponent,
    NoWifiDialogComponent,
    ConfirmNoWifiDialogComponent,
    //  ConfirmWrongDateDialogComponent,
    // WrongDateDialogComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    ToastModule.forRoot(options),
    Ng2DatetimePickerModule
    //  MaterializeModule,
    //   ModalModule.forRoot(),
    //  BootstrapModalModule
  ],
  providers: [FormBuilder, DessertsService, SaladesService, SpécialitésService, PainViandesService, PainVolaillesService,
    FormulesService, PetiteEntreesService, PainVegetariensService, PlatDuJourService, PainPoissonsService,
    PainGarnisOptionsService, DrinksService,
  PainGarnisRequiredService, ToastService, Constants, OrderService, CounterService, DatetimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
