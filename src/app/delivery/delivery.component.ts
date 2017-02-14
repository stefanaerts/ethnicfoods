import { UserService } from './../shared/model/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, PhoneValidators } from 'ng2-validators';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  user: FormGroup;
  //myGroup: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private userService: UserService) { }
  //user.inval
  ngOnInit() {

    /*   this.user = new FormGroup({
         name: new FormControl('', [Validators.required, Validators.minLength(2)]),
         account: new FormGroup({
           email: new FormControl('', Validators.required),
           confirm: new FormControl('', Validators.required)
         })*/
         //PhoneValidators.isPhoneNumber('BE')
    this.user = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({

        phone: ['', [Validators.required,PhoneValidators.isPhoneNumber('BE'),PhoneValidators.isPossibleNumberWithReason('BE')]],
        email: ['', Validators.compose([EmailValidators.normal()])],

      }
      )
    });
  }
  //onSubmit({ value, valid }: { value: User, valid: boolean }) {
  //    console.log(value, valid);
  //  }
  onSubmit() {
   this.userService.setUser(this.user.value);

     let link = ['/deliveryaddress'];
    this.router.navigate(link);
//    console.log(this.user.value, this.user.valid);
//    alert(this.user.value.account.confirm);
  }
}
