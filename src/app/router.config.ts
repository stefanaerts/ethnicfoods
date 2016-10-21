import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { RequiredOptionsComponent } from './required-options/required-options.component';

export const routes: Routes = [
   { path: '',pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'required', component: RequiredOptionsComponent },
  { path: 'options', component: OptionsComponent },
  {path: '**',pathMatch: 'full', redirectTo: '/home'}
];