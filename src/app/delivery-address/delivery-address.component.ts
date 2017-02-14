import { BelgiumZipcodeService } from './../shared/findCity/belgium-zipcode.service';
import { UserService } from './../shared/model/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {  } from 'ng2-validators';


@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  fgAddress: FormGroup;
  public showBtn= false;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private belgiumZipcodeService: BelgiumZipcodeService) { }

  ngOnInit() {
    this.fgAddress = this.fb.group({
      deliveryAddress: this.fb.group({
        street: ['', [Validators.required]],
        postcode: ['', [Validators.required]],
        city: ['', [Validators.required]],
        number: ['', [Validators.required]],
      }
      )
    });
  }
  onSubmit() {
    this.userService.setUserDeliveryAddress(this.fgAddress.value);


    //    let link = ['/deliveryaddress'];
    //   this.router.navigate(link);
    //    console.log(this.user.value, this.user.valid);
    /*  alert(this.userService.getUserFirstName());
      alert(this.userService.getUserLastName());
      alert(this.userService.getUserPhone());
      alert(this.userService.getUserEmail());
      alert(this.userService.getUserDeliveryStreet());
      alert(this.userService.getUserDeliveryStreetNumber());

      alert(this.userService.getUserDeliveryPostCode());*/
  }
  setCity() {
    let postcode = (<HTMLInputElement>document.getElementById("postcode")).value;
    if (postcode !== '' && postcode.length > 0) {
      let temp = this.belgiumZipcodeService.toCity(parseInt(postcode, 10), false);
      if (temp !== undefined && temp.length > 0) {
        (<HTMLInputElement>document.getElementById("city")).value = temp;
        this.fgAddress.get('deliveryAddress').get('city').markAsUntouched();
this.fgAddress.get('deliveryAddress').get('postcode').markAsUntouched();



      } else {
        (<HTMLInputElement>document.getElementById("city")).value = '';
      }
    }
    if ((<HTMLInputElement>document.getElementById("postcode")).value !== ''
      && (<HTMLInputElement>document.getElementById("city")).value !== '') {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }
  setZip() {
    //  this.fgAddress.status = 'INVALID';
    //   alert('in city');
    let city = (<HTMLInputElement>document.getElementById("city")).value;
    if (city !== '' && city.length > 0) {
      let temp = this.belgiumZipcodeService.toZip(city);
      if (temp !== undefined && temp.length > 0) {
        (<HTMLInputElement>document.getElementById("postcode")).value = temp;
this.fgAddress.get('deliveryAddress').get('city').markAsUntouched();
this.fgAddress.get('deliveryAddress').get('postcode').markAsUntouched();



      } else {
        (<HTMLInputElement>document.getElementById("postcode")).value = '';
      }
    }
    if ((<HTMLInputElement>document.getElementById("postcode")).value !== ''
      && (<HTMLInputElement>document.getElementById("city")).value !== '') {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }
}
