import { DrinksService } from './../shared/model/drinks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from './../shared/constants';
import { DessertsService } from './../shared/model/desserts.service';
import { SaladesService } from './../shared/model/salades.service';
import { SpécialitésService } from './../shared/model/spécialités.service';
import { PainVegetariensService } from './../shared/model/pain-vegetariens.service';
import { PainVolaillesService } from './../shared/model/pain-volailles.service';
import { PainViandesService } from './../shared/model/pain-viandes.service';
import { FormulesService } from './../shared/model/formules.service';
import { PlatDuJourService } from './../shared/model/plat-du-jour.service';
import { PetiteEntreesService } from './../shared/model/petite-entrees.service';
import { PainPoissonsService } from './../shared/model/pain-poissons.service';
import { OrderService } from "../shared/model/order.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit {
  dessertsVisible = false;
  saladesVisible = false;
  specialitesVisible = false;
  formulesVisible = false;
  petites_entreesVisible = false;
  plat_du_jourVisible = false;
  pain_PoissonsVisible = false;
  pain_ViandesVisible = false;
  pain_VegetariensVisible = false;
  pain_VolaillesVisible = false;
  drinksVisible = false;
  totalPrize$: Observable<number>;
  constructor(
    private router: Router, public dessertsService: DessertsService, private saladesService: SaladesService,
    private specialitesService: SpécialitésService, public vegetariensService: PainVegetariensService,
    private volaillesService: PainVolaillesService, private viandesService: PainViandesService,
    private poissonsService: PainPoissonsService, private formulesService: FormulesService,
    private platdujoursService: PlatDuJourService, private petiteentreesService: PetiteEntreesService,
    public orderService: OrderService, private drinksService: DrinksService, private constants: Constants

  ) {
  }

  ngOnInit() {
  }


  goToOrderSummary() {
    let link = ['/order'];
    this.router.navigate(link);
  }
}
