import { Router } from '@angular/router';
import { OrderService } from './../shared/model/order.service';
import { Constants } from './../shared/constants';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/first';
import * as braintree from 'braintree-web';
import * as $ from 'jquery';

@Component({
  selector: 'app-ccpicker',
  templateUrl: './ccpicker.component.html',
  styleUrls: ['./ccpicker.component.scss']
})
export class CcpickerComponent implements OnInit {

 message: string;
  authorization: any;
boolHidden:true;
  constructor(public http: Http,public os: OrderService, private router: Router) {
    this.message = "...Loading";
  }
  goToHome() {
    let link = ['/home'];
    this.router.navigate(link);
  }
 getToken() {
   if (this.os.getTotalPrize() === 0) {
      alert('Order amount cannot be zero');
      this.goToHome();
    }
    else {
      this.http.get(Constants.API_ENDPOINT + 'api/v1/token').first().subscribe(
        data => {
console.log('in httpget');

          if (data.status === 200) {
            //      this.createClient(data.text());
            console.log('network status=' + data.statusText);
            console.log('data status=' + data.statusText);

            this.authorization = data.text();
            //   this.message = data.text();
            this.makeTransaction(this.os.getTotalPrizeAsString());
          } else {
                     console.log('in failed network status=' + data.statusText);
            console.log('data status=' + data.statusText);


                  alert('Get token failed: ' + data.status + ' Please check internet connection and try again.');
            console.error("error in getToken, status =" + data.status + "REASON: " + data.statusText);
           window.location.href = '/dialog';
        }
        }, (error: any) => {
          console.error("error in subscribe gettoken=" + error);
                alert('Get token failed: ' + 'Please check internet connection and try again.If not working pls contact angular2firebaseconsultant@gmail.com');
            window.location.href = '/home';

     //      window.location.href="/home";
        }
      );
    }
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    //   this.amount.focus();
    this.getToken();
  }
 makeTransaction(totalPrize: string) {
    let amount: string = totalPrize;
    let form: HTMLFormElement = (<HTMLFormElement>document.querySelector('#checkout-form'));
    let submit: HTMLElement = (<HTMLElement>document.getElementById('button-pay'));
    let spincirle: HTMLElement = (<HTMLElement>document.getElementById('spincircle'));
   let spincirle2: HTMLElement = (<HTMLElement>document.getElementById('spincircle2'));

    braintree.client.create({
      authorization: this.authorization
    }, function (err, clientInstance) {
      if (err) {
        console.error(err);
        return;
      }
      //   braintree.hostedFields.create({
      // Create input fields and add text styles
      braintree.hostedFields.create({
        client: clientInstance,
         styles: {
      'input': {
        'color': '#282c37',
        'font-size': '16px',
        'transition': 'color 0.1s',
        'line-height': '3'
      },
      // Style the text of an invalid input
      'input.invalid': {
        'color': '#E53A40'
      },
      // placeholder styles need to be individually adjusted
      '::-webkit-input-placeholder': {
        'color': 'rgba(0,0,0,0.6)'
      },
      ':-moz-placeholder': {
        'color': 'rgba(0,0,0,0.6)'
      },
      '::-moz-placeholder': {
        'color': 'rgba(0,0,0,0.6)'
      },
      ':-ms-input-placeholder ': {
        'color': 'rgba(0,0,0,0.6)'
      }

    },
    // Add information for individual fields
    fields: {
      number: {
        selector: '#card-number',
        placeholder: '1111  1111  1111  1111',
        formatInput: true
      },
      cvv: {
        selector: '#cvv',
        placeholder: '123'
      },
      expirationDate: {
        selector: '#expiration-date',
        placeholder: '10 / 2019'
      }
    }
      }, function (hostedFieldsErr, hostedFieldsInstance) {

        if (hostedFieldsErr) {
          console.error(hostedFieldsErr);
          return;
        }
        spincirle.remove();
hostedFieldsInstance.on('validityChange', function (event) {
      // Check if all fields are valid, then show submit button
      var formValid = Object.keys(event.fields).every(function (key) {
        return event.fields[key].isValid;
      });

      if (formValid) {
        $('#button-pay').addClass('show-button');
      } else {
        $('#button-pay').removeClass('show-button');
      }
    });

    hostedFieldsInstance.on('empty', function (event) {
      $('header').removeClass('header-slide');
      $('#card-image').removeClass();
      $(form).removeClass();
    });

    hostedFieldsInstance.on('cardTypeChange', function (event) {
      // Change card bg depending on card type
      if (event.cards.length === 1) {
        $(form).removeClass().addClass(event.cards[0].type);
        $('#card-image').removeClass().addClass(event.cards[0].type);
        $('header').addClass('header-slide');

        // Change the CVV length for AmericanExpress cards
        if (event.cards[0].code.size === 4) {
          hostedFieldsInstance.setPlaceholder('cvv', '1234');
        }
      } else {
        hostedFieldsInstance.setPlaceholder('cvv', '123');
      }
    });


        submit.removeAttribute('disabled');
      //  submit.setAttribute('class', '.mstyle');
                 submit.setAttribute('class', 'pay-button');

     //    submit.style.backgroundColor = '#E91E63';

        form.addEventListener('submit', function (event) {
          event.preventDefault();
          hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
               spincirle2.style.visibility = 'visible';

            if (tokenizeErr) {
              console.error('tokenizeErr=' + JSON.stringify(tokenizeErr));

              return;
            }
 $.ajax({
              url: Constants.API_ENDPOINT + 'checkout',
              type: 'POST',
              data: JSON.stringify({
                payment_method_nonce: payload.nonce,
                amount: amount
              }),
              contentType: 'application/json',
              success: function (data) {
                //   console.log("data.transaction.status=" + data.transaction.status);
                //   console.log("data.transaction.status=" + JSON.stringify(data.transaction.status));

                if (data.success) {
                  submit.style.backgroundColor = 'rgba(0, 0, 0, .54)';
                  submit.setAttribute('disabled', 'true');
                                  //alert('Payment authorized, thanks.');
                  window.location.href = '/dialog';
                } else {
                  alert('Payment failed: ' + data.message + ' Please refresh the page and try again.');
                  console.error("data=" + JSON.stringify(data));
                  submit.style.backgroundColor = 'rgba(0, 0, 0, .54)';
                  submit.setAttribute('disabled', 'true');
                   window.location.href = '/home';
                }
              },
              error: function (error) {
                alert('Error: cannot connect to server. Please make sure your server is running.');
                console.error(error);
                 window.location.href = '/home';
                ;
              }
            });
          });
        }, false);
      });
    });
  }
}
