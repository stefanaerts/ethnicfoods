export interface User {
  firstName: string;
  lastName: string;
  account: {
    email: string;
    phone: string;
  };
  deliveryAddress: {
    street: string;
    postcode: string;
    number: string;
  };
}
