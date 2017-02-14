import { OrderService } from './../shared/model/order.service';
import { Constants } from './../shared/constants';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/first';
 import * as braintree from 'braintree-web';


@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit, AfterViewInit {
  authorization: any;
  amount: number;
  constructor(public http: Http, public os: OrderService, ) {
    this.amount = Number(this.os.getTotalPrize().toFixed(2));
    if (this.amount === 0) {
      alert('Order amount cannot be zero');
      window.location.href = '/home';
    }
 //   console.log('in constructor');

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    try {
  //    console.log('before getToken');

      this.getToken();
    } catch (error) {
  //          console.log('error getToken');
      alert('error');
    }

  }
  makeTransaction(totalPrize: number) {
    let amount: number = totalPrize;
//    console.log('amount in txn=' + amount);
    //   var delay = 4000; //1 second
    //   setTimeout(function () {
    //   },delay);

    //    let ppButton = document.getElementById('pp-button');
    //  console.log('voor disabled remove');
    //    ppButton.removeAttribute('disabled');

    //  setTimeout(function () {
    //  },delay);

    // Fetch the button you are using to initiate the PayPal flow
    // Create a Client component

    braintree.client.create({
      authorization: this.authorization
    }, function (clientErr, clientInstance) {
      // Create PayPal component
      braintree.paypal.create({
        client: clientInstance
      }, function (err, paypalInstance) {

        //     ppButton.addEventListener('click', function () {

        //       ppButton.setAttribute('disabled', 'true');

        paypalInstance.tokenize({
          flow: 'checkout', // Required
          amount: amount, // Required
          currency: 'USD', // Required
          locale: 'en_US',
          enableShippingAddress: true,
          shippingAddressEditable: false,
          shippingAddressOverride: {
            recipientName: 'Scruff McGruff',
            line1: '1234 Main St.',
            line2: 'Unit 1',
            city: 'Chicago',
            countryCode: 'US',
            postalCode: '60652',
            state: 'IL',
            phone: '123.456.7890'
          }
        // tslint:disable-next-line:no-shadowed-variable
        }, function (err, payload) {
          if (err) {
            console.error('tokenizeErr=' + JSON.stringify(err));
            alert('Error: cannot connect to tokenize server. Please make sure your server is running.');
             window.location.href = '/home';
            return;
          }
          // If this was a real integration, this is where you would
          // send the nonce to your server.
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
                //      ppButton.style.backgroundColor = 'rgba(0, 0, 0, .54)';
                //      ppButton.setAttribute('disabled', 'true');
                // alert('Payment authorized, thanks.');
                //  this.ConfirmDialogComponent.dialog();
                // alert('Payment authorized, thanks.');
                //             window.location.href = '/home';
                 window.location.href = '/dialog';
              } else {
                alert('Payment failed: ' + data.message + ' Please refresh the page and try again.');
                console.error("data=" + JSON.stringify(data));
                //     ppButton.style.backgroundColor = 'rgba(0, 0, 0, .54)';
                //     ppButton.setAttribute('disabled', 'true');
                window.location.href = '/home';

              }
            },
            error: function (error) {
              alert('Error: cannot connect to server. Please make sure your server is running.');
              console.error(error);
              window.location.href = '/home';

              ;
            }
            //         });
          });
        }, false);
      });
    });
  }

  getToken() {

try {
// console.log('in getttoken');


    this.http.get(Constants.API_ENDPOINT + 'api/v1/token').first().subscribe(
      data => {

        if (data.status === 200) {
          //      this.createClient(data.text());
          this.authorization = data.text();

          setTimeout(function () {
          }, 1000);
          this.makeTransaction(this.amount);

          //   this.message = data.text();
        } else {
          console.error("error in getToken, status =" + data.status + "REASON: " + data.statusText);
        }
      }, (error: any) => {
        alert('network problem,pls try again. If still not working please contact angular2firebaseconsultant@gmail.com');
        window.location.href = '/home';
        console.error("error in pp subscribe gettoken=" + error);
      }
    );
} catch (error) {
  alert('something went wrong.See message:-> ' + error);
window.location.href = '/home';
}
  }


}
