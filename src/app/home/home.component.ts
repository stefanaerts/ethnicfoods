import {Router} from '@angular/router';
import { Salade } from '../shared/model/salade';
import { Dessert } from '../shared/model/dessert';
import { PainVegetarien } from '../shared/model/pain_vegetarien';
import { PainVolaille } from '../shared/model/pain_volailles';
import { PainViandes } from '../shared/model/pain_viandes';
import { PainPoisson } from '../shared/model/pain_poisson';
import { Formule } from '../shared/model/formule';
import { PetiteEntree } from '../shared/model/petite-entree';
import { PlatDuJour } from '../shared/model/plat-du-jour';
import { Specialite } from '../shared/model/specialite';


import { DessertsService } from './../shared/model/desserts.service';
import { SaladesService } from './../shared/model/salades.service';
import { SpécialitésService } from './../shared/model/spécialités.service';
import { VegetariensService } from './../shared/model/vegetariens.service';
import { VolaillesService } from './../shared/model/volailles.service';
import { ViandesService } from './../shared/model/viandes.service';
import { FormulesService } from './../shared/model/formules.service';
import { PlatDuJourService } from './../shared/model/plat-du-jour.service';
import { PetiteEntreesService } from './../shared/model/petite-entrees.service';
import { PoissonsService } from './../shared/model/poissons.service';
import {RequiredOptionsComponent} from '../required-options/required-options.component';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dessertsVisible = false;
  saladesVisible = false;
  specialitesVisible = false;
    formulesVisible = false;
 petites_entreesVisible = false;
 plat_du_jourVisible = false;
 pain_poissonsVisible = false;
 pain_ViandesVisible = false;
  // Pains_garnis_optionsVisible = false;
   pain_VegetariensVisible = false;
  pain_VolaillesVisible = false;




  desserts: Dessert[];
  salades: Salade[];
  specialites: Specialite[];
  painvegetariens: PainVegetarien[];
  painpoissons: PainPoisson[];
  painvolailles: PainVolaille[];
  painviandes: PainViandes[];
  petite_entrees: PetiteEntree[];
  formules: Formule[];
  platdujours: PlatDuJour[];


  constructor(private router: Router, private dessertsService: DessertsService, private saladesService: SaladesService,
    private specialitesService: SpécialitésService, private vegetariensService: VegetariensService,
    private volaillesService: VolaillesService, private viandesService: ViandesService,
    private poissonsService: PoissonsService, private formulesService: FormulesService,
    private platdujoursService: PlatDuJourService, private petiteentreesService: PetiteEntreesService,

  ) { }

  ngOnInit() {
  //  this.dessertsService.findAllDesserts().do(dessertjes =>console.log(dessertjes))
  //    .subscribe(desserts => this.desserts = desserts);

 this.dessertsService.findAllDesserts()
      .subscribe(desserts => this.desserts = desserts);

     this.saladesService.findAllSalades()
       .subscribe(salades => this.salades = salades);

    this.specialitesService.findAllSpécialités()
      .subscribe(specialites => this.specialites = specialites);

    this.vegetariensService.findAllPainVegetariens()
      .subscribe(vegetariens => this.painvegetariens = vegetariens);

    this.volaillesService.findAllPainVolailles()
      .subscribe(volailles => this.painvolailles = volailles);

    this.viandesService.findAllPainViandes()
      .subscribe(viandes => this.painviandes = viandes);

    this.poissonsService.findAllPain_Poissons()
      .subscribe(pain_poissons => this.painpoissons = pain_poissons);


    this.formulesService.findAllFormules()
      .subscribe(formules => this.formules = formules);

    this.platdujoursService.findAllPlatDuJours()
      .subscribe(platdujours => this.platdujours = platdujours);

    this.petiteentreesService.findAllPetiteEntrees()
      .subscribe(petiteentrees => this.petite_entrees = petiteentrees);



  }
  gotoRequiredOptions(item: any): void {
    let link = ['/required', item.$key];
    this.router.navigate(link);
  }
 }
