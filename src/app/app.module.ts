import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../environments/firebase.config';
import { HomeComponent } from './home/home.component';
import { DessertsService } from './shared/model/desserts.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DessertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
