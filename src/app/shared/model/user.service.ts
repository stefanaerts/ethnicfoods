import { User } from './signup.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
user: User;
  constructor() { }

setUser(user: User){
this.user = user;
}
setUserDeliveryAddress(address: User) {
this.user.deliveryAddress = address.deliveryAddress;
}

getUser() {
  return this.user;
}
getUserFirstName() {
  return this.user.firstName;
}
getUserPhone() {
  return this.user.account.phone;
}
getUserEmail() {
  return this.user.account.email;
}
getUserLastName() {
  return this.user.lastName;
}
getUserDeliveryStreet() {
  return this.user.deliveryAddress.street;
}
getUserDeliveryStreetNumber() {
  return this.user.deliveryAddress.number;
}
getUserDeliveryPostCode() {
  return this.user.deliveryAddress.postcode;
}
getUserDeliveryCity() {
  return this.user.deliveryAddress.city;
}

}
