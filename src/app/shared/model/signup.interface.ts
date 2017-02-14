export interface User {
  firstName: string;
  lastName: string;
  account: {
    email: string;
    phone: string;
  };
  address: {
    street: string;
    postcode: string;
    city: string;
    number: string;
  };
  deliveryAddress: {
   // address: string;
      street: string;
      postcode: string;
      city: string;
      number: string;
  };
}
