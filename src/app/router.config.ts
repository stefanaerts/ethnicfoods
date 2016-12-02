import { CheckoutComponent } from './checkout/checkout.component';
import { TesterComponent } from './test/tester/tester.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { RequiredOptionsComponent } from './required-options/required-options.component';

export const routes: Routes = [
   { path: '',pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'required', component: RequiredOptionsComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'order', component: OrderSummaryComponent},
  { path: 'test', component: TesterComponent},
  { path: 'checkout', component: CheckoutComponent},

  {path: '**',pathMatch: 'full', redirectTo: '/home'}
];
