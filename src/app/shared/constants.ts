// import { DialogComponent } from './../dialog/dialog.component';

import { Injectable } from '@angular/core';

//@Injectable()
export class Constants {
  constructor() {
 //   console.log('instance of Constants Created');
   }
//  public static get API_ENDPOINT(): string { return 'http://localhost:3000/'; }
 public static get API_ENDPOINT(): string { return 'https://jvggmrjkt7.execute-api.eu-central-1.amazonaws.com/latest/'; }
public static get DELIVERY(): string {return 'DELIVERY'; }
public static get PICKUP(): string {return 'PICKUP'; }
 public static get PAINVEGETARIEN(): string {return 'PAINVEGETARIEN'; }
 public static get PAINVOLAILLE(): string {return 'PAINVOLAILLE'; }
 public static get PAINVIANDE(): string {return 'PAINVIANDE'; }
 public static get PAINPOISSON(): string {return 'PAINPOISSON'; }
 public static get PLATDUJOUR(): string {return 'PLATDUJOUR'; }
 public static get PETITEENTREE(): string {return 'PETITEENTREE'; }
 public static get FORMULES(): string {return 'FORMULES'; }
 public static get SALADES(): string {return 'SALADES'; }
 public static get SPECIALITES(): string {return 'SPECIALITES'; }
 public static get DESSERTS(): string {return 'DESSERTS'; }
 public static get DRINKS(): string {return 'DRINKS'; }
public static get USERS(): string {return 'USERS'; }

 public static get PAINGARNISOPTIONS(): string {return 'PAINGARNISOPTIONS'; }
 public static get PAINGARNISREQUIREMENTS(): string {return 'PAINGARNISREQUIREMENTS'; }
 // get PICTURE_ENDPOINT(): string { return 'http://ethnicfoods.stevegravy.com/wp-content/uploads/2016/01/PNI_4335-2.jpg' };

}
