import { Component, OnChanges, OnInit } from '@angular/core';

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  //	draggable: boolean;
}
@Component({
  selector: 'app-find-distance',
  templateUrl: './find-distance.component.html',
  styleUrls: ['./find-distance.component.css'],
})
export class FindDistanceComponent implements OnInit {
//  lat: number = 50.848091;
//  lng: number = 4.364204599999994;
  // google maps zoom level
//  zoom: number = 8;
  map: any;
  directionsDisplay: any;

  // initial center position for the map
  //lat: number = 51.673858;
  // lng: number = 7.815982;
  // markers: marker[] = [
  //   {
  //     lat: 50.848091,
  //     lng: 4.364204599999994,
  //     label: 'A',
  //     //	  draggable: true
  //   },
  //   {
  //     lat: 50.9602473,
  //     lng: 4.4842550999999276,
  //     label: 'B',
  //     //		  draggable: false
  //   },
  // ];
  //directionsDisplay:any;
  constructor() {

  }

ngOnInit(){
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    let ethnic = new google.maps.LatLng(50.848091, 4.364204599999994);
    let myOptions = {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: ethnic
    }
    this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    this.directionsDisplay.setMap(this.map);

    //   this.initialize();
  }
  calcRoute() {
    let start = (<HTMLInputElement>document.getElementById("start")).value;
    let end = (<HTMLInputElement>document.getElementById("end")).value;
    let distanceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("distance");
    let directionsDisplay: any;
    let request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    google.maps.DirectionsService.prototype.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setDirections(response);
        distanceInput.value = (response.routes[0].legs[0].distance.value / 1000).toString();
      }
    });
  }
}
