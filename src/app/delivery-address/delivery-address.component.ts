import { UserService } from './../shared/model/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {  } from 'ng2-validators';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  fgAddress: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    // alert(this.userService.getUserFirstName());
    this.fgAddress = this.fb.group({
      deliveryAddress: this.fb.group({
        street: ['', [Validators.required]],
        postcode: ['', [Validators.required]],
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
    alert(this.userService.getUserFirstName());
    alert(this.userService.getUserLastName());
    alert(this.userService.getUserPhone());
    alert(this.userService.getUserEmail());
    alert(this.userService.getUserDeliveryStreet());
    alert(this.userService.getUserDeliveryStreetNumber());

    alert(this.userService.getUserDeliveryPostCode());
  }
}
