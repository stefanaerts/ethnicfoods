import { Constants } from './../shared/constants';
import { Router } from '@angular/router';
import { OrderService } from './../shared/model/order.service';
import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
  selector: 'app-find-distance',
  templateUrl: './find-distance.component.html',
  styleUrls: ['./find-distance.component.css'],
})
export class FindDistanceComponent implements OnInit {
  directionsDisplay: any;
  directionsService: any;
  largeInfowindow: any;
  public boolHiddenCalc = false;
  public showBtnConfirmDelivery = false;
  public showDeliveryFeeBox = true;

  boolHiddenOK: boolean = true;

  map: any;
  marker: any;

  constructor(public ordersv: OrderService, private router: Router, public mapsAPILoader: MapsAPILoader, ) {

    this.mapsAPILoader.load().then(() => {
      //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      //       types: ["address"]
      this.directionsService = new google.maps.DirectionsService();
      this.largeInfowindow = new google.maps.InfoWindow();
      this.initialize();
    });

  }
  ngOnInit() {
   // this.initialize();

  }

  goToOrder(deliverymethod: string) {
    this.ordersv.setDeliveryMethod(deliverymethod);
    if (deliverymethod === Constants.PICKUP) {
      this.ordersv.setDeliveryFee('0');
      let link = ['/order'];
      this.router.navigate(link);
    } else {
      this.ordersv.setDeliveryFee((<HTMLElement>document.getElementById("totalFee")).textContent);
      this.ordersv.setDeliveryAddress((<HTMLInputElement>document.getElementById("end")).value);
      let link = ['/orderdelivery'];
      this.router.navigate(link);

    }
  }
  setBool() {
    this.boolHiddenCalc = true;
    this.showDeliveryFeeBox = false;
    this.showBtnConfirmDelivery = false;
    //    alert((<HTMLInputElement>document.getElementById("end")).value.length);
    if ((<HTMLInputElement>document.getElementById("end")) !== undefined) {

      if (((<HTMLInputElement>document.getElementById("end")).value).trim() !== '') {

        this.boolHiddenCalc = true;
      } else {
        this.boolHiddenCalc = false;
        this.showBtnConfirmDelivery = false;

        //  let distance = (<HTMLElement>document.getElementById("distance"));
        //     (<HTMLElement>distance).hidden = true;
        //     let totalFee = (<HTMLElement>document.getElementById("totalFee"));
        //     (<HTMLElement>totalFee).hidden = true;
      }
    }
  }
  setBoolConfirm() {
    this.boolHiddenOK = false;
    alert(this.boolHiddenOK);
  }
  initialize() {

    this.showDeliveryFeeBox = false;
    this.showBtnConfirmDelivery = false;
    this.boolHiddenCalc = false;
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    let ethnicfoods = new google.maps.LatLng(50.848091, 4.364204599999994);
    let myOptions = {
      zoom: 12,
      //   styles: this.styles,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: ethnicfoods
    };

    this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    this.directionsDisplay.setMap(this.map);
    this.marker = new google.maps.Marker({
      map: this.map,
      position: { lat: 50.848091, lng: 4.364204599999994 },
      title: 'Ethnicfoods the best food in the world',
      animation: google.maps.Animation.DROP,
    });
    this.largeInfowindow.close(this.map, this.marker);
    this.largeInfowindow.setContent('Ethnicfoods the best food in the world');
    this.largeInfowindow.open(this.map, this.marker);
    // This autocomplete is for use in the search within time entry box.
    var timeAutocomplete = new google.maps.places.Autocomplete(
      (<HTMLInputElement>document.getElementById('end')));
    // // This autocomplete is for use in the geocoder entry box.
    // var zoomAutocomplete = new google.maps.places.Autocomplete(
    //     (<HTMLInputElement>document.getElementById('zoom-to-area-text')));
    // //Bias the boundaries within the map for the zoom to area text.
    // zoomAutocomplete.bindTo('bounds', map);
    // Push the marker to our array of markers.
  }
  calcRoute(travelmode) {
    // let distanceDisp = (<HTMLElement>document.getElementById("distance"));
    // (<HTMLElement>distanceDisp).hidden = false;
    // let totalFeeDisp = (<HTMLElement>document.getElementById("totalFee"));
    // (<HTMLElement>totalFeeDisp).hidden = false;
    let travelmodedispl;
    switch (travelmode) {
      case google.maps.TravelMode.DRIVING:
        travelmodedispl = google.maps.TravelMode.DRIVING;
        break;
      case google.maps.TravelMode.WALKING:
        travelmodedispl = google.maps.TravelMode.WALKING;
        break;
      case google.maps.TravelMode.BICYCLING:
        travelmodedispl = google.maps.TravelMode.BICYCLING;
        break;
      default:
        travelmodedispl = google.maps.TravelMode.DRIVING;
        break;
    }
    this.largeInfowindow.close(this.map, this.marker);
    let infowindow2 = this.largeInfowindow;
    this.marker.setMap(null);
    let start = '14 rue de la Croix de Fer à 1000 Bruxelles';
    let end = (<HTMLInputElement>document.getElementById("end")).value;
    this.showDeliveryFeeBox = true;
    this.showBtnConfirmDelivery = true;

    let directionsDisplay = this.directionsDisplay;
    let map = this.map;
    let distance = 0;
    let totalprize = this.ordersv.getTotalPrize();
    let request = {
      origin: start,
      destination: end,
      travelMode: travelmodedispl
    };

    this.directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        //distanceInput.click();
        distance = response.routes[0].legs[0].distance.value / 1000;

        if (!((totalprize >= 10) && (distance < 1))) {
          let totalFee = (<HTMLInputElement>document.getElementById("totalFee"));

          totalFee.textContent = ((Math.round(5 * distance)).toString());
        };
        let distanceInput = (<HTMLInputElement>document.getElementById("distance"));
        //    alert(distanceInput.textContent);
        distanceInput.textContent = distance.toString();
        (<HTMLElement>document.getElementById("confirmDelivery")).hidden = false;
        (<HTMLElement>document.getElementById("cancelDelivery")).hidden = false;
     //   (<HTMLElement>document.getElementById("calcroute")).hidden = true;
        document.getElementById("confirmDelivery").textContent = 'Confirm '
          + (<HTMLInputElement>document.getElementById("end")).value;
      }

      //         (<HTMLElement>document.getElementById("confirmDelivery")).hidden = false;
      //         (<HTMLElement>document.getElementById("cancelDelivery")).hidden = false;
try {
  let totalstepstmp = response.routes[0].legs[0].steps.length;
} catch (error) {
  alert('no route calculation possible,pls give another address in');
  return;
}
      let totalsteps = response.routes[0].legs[0].steps.length;
      let step = totalsteps / 2;
      let step2 = Math.floor(step);
      infowindow2.setContent(response.routes[0].legs[0].distance.text
        + "<br>" + response.routes[0].legs[0].duration.text + " " + travelmode);

      infowindow2.setPosition(response.routes[0].legs[0].steps[step2].end_location);
      infowindow2.open(map);
    });


    //     setTimeout(function () {
    //        this.showDeliveryFeeBox = true;
    //       let distanceInput = (document.getElementById("distance").textContent);
    //   alert('5 sec passed' + distanceInput);
    //   //    if (distanceInput.textContent.length > 0) {
    //   //      this.showBtnConfirmDelivery = true;
    //  //     }
    //     }, );


  }
}

