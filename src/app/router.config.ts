import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OptionsComponent} from './options/options.component';
import {RequiredOptionsComponent} from './required-options/required-options.component';

export const routerConfig : Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'required/:id', component: RequiredOptionsComponent },
 // { path: 'options',     component: OptionsComponent },
  {path : 'options', component : OptionsComponent, data : {some_data : 'some value'}},
 { path: '**', redirectTo: 'home' },
]
;
