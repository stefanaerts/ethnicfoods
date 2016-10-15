import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
//import { AppComponent, SettingsDialog } from './app.component';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../environments/firebase.config';
import { HomeComponent } from './home/home.component';
import { DessertsService } from './shared/model/desserts.service';
import { SaladesService } from './shared/model/salades.service';
import { VegetariensService} from './shared/model/vegetariens.service';
import { VolaillesService } from './shared/model/volailles.service';
import { ViandesService } from './shared/model/viandes.service';
import { FormulesService } from './shared/model/formules.service';
import { PlatDuJourService } from './shared/model/plat-du-jour.service';
import { SpécialitésService} from './shared/model/spécialités.service';
import { PetiteEntreesService } from './shared/model/petite-entrees.service';
import { PoissonsService } from './shared/model/poissons.service';
import {PainGarnisOptionsService} from './shared/model/pain-garnis-options.service';
import {PainGarnisRequiredService} from './shared/model/pain-garnis-required.service';
import {OrderService} from './shared/model/order.service';
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { OptionsComponent } from './options/options.component';
import { RequiredOptionsComponent } from './required-options/required-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent,
    RequiredOptionsComponent,
  //  SettingsDialog
  ],
  entryComponents: [
AppComponent,
// SettingsDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
  ],
  providers: [DessertsService,SaladesService,SpécialitésService,ViandesService,VolaillesService,
  FormulesService,PetiteEntreesService,VegetariensService,PlatDuJourService,PoissonsService,PainGarnisOptionsService,
  PainGarnisRequiredService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
