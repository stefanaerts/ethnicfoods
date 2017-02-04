import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-distance',
  templateUrl: './find-distance.component.html',
  styleUrls: ['./find-distance.component.css'],
})
export class FindDistanceComponent implements OnInit {
  directionsDisplay: any;
  directionsService: any;
  largeInfowindow: any;
  map: any;
  //markers:any;
  marker: any;
  // styles = [
  //         {
  //           featureType: 'water',
  //           stylers: [
  //             { color: '#19a0d8' }
  //           ]
  //         },{
  //           featureType: 'administrative',
  //           elementType: 'labels.text.stroke',
  //           stylers: [
  //             { color: '#ffffff' },
  //             { weight: 6 }
  //           ]
  //         },{
  //           featureType: 'administrative',
  //           elementType: 'labels.text.fill',
  //           stylers: [
  //             { color: '#e85113' }
  //           ]
  //         },{
  //           featureType: 'road.highway',
  //           elementType: 'geometry.stroke',
  //           stylers: [
  //             { color: '#efe9e4' },
  //             { lightness: -40 }
  //           ]
  //         },{
  //           featureType: 'transit.station',
  //           stylers: [
  //             { weight: 9 },
  //             { hue: '#e85113' }
  //           ]
  //         },{
  //           featureType: 'road.highway',
  //           elementType: 'labels.icon',
  //           stylers: [
  //             { visibility: 'off' }
  //           ]
  //         },{
  //           featureType: 'water',
  //           elementType: 'labels.text.stroke',
  //           stylers: [
  //             { lightness: 100 }
  //           ]
  //         },{
  //           featureType: 'water',
  //           elementType: 'labels.text.fill',
  //           stylers: [
  //             { lightness: -100 }
  //           ]
  //         },
  //         // {
  //         //   featureType: 'poi',
  //         //   elementType: 'geometry',
  //         //   stylers: [
  //         //     { visibility: 'on' },
  //         //     { color: '#f0e4d3' }
  //         //   ]
  //         // },
  //         {
  //           featureType: 'road.highway',
  //           elementType: 'geometry.fill',
  //           stylers: [
  //             { color: '#efe9e4' },
  //             { lightness: -25 }
  //           ]
  //         }
  //       ];
  constructor() {

    this.directionsService = new google.maps.DirectionsService();
    this.largeInfowindow = new google.maps.InfoWindow();
    //this.markers = [];


  }
  ngOnInit() {
    this.initialize();
  }
  initialize() {
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
  calcRoute() {
    this.largeInfowindow.close(this.map, this.marker);
    let infowindow2 = this.largeInfowindow;
    this.marker.setMap(null);
    let start = '14 rue de la Croix de Fer à 1000 Bruxelles';
    let end = (<HTMLInputElement>document.getElementById("end")).value;
    let distanceInput = document.getElementById("distance");
    let directionsDisplay = this.directionsDisplay;

    let map = this.map;
    let request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        (<HTMLInputElement>distanceInput).value = (response.routes[0].legs[0].distance.value / 1000).toString();
      }
      let step = 1;

      infowindow2.setContent(response.routes[0].legs[0].distance.text
        + "<br>" + response.routes[0].legs[0].duration.text + " ");
      infowindow2.setPosition(response.routes[0].legs[0].steps[step].end_location);
      infowindow2.open(map);
    });
    // Push the marker to our array of markers.
  }
}
  /*initialize(){
     let directionsDisplay = new google.maps.DirectionsRenderer();
      let ethnic = new google.maps.LatLng(50.848091, 4.364204599999994);
      let myOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: ethnic
      };
      this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
      directionsDisplay.setMap(this.map);
  }
  ngOnInit(){
  this.initialize();

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
  }*/

