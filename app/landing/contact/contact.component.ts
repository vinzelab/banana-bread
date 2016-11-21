import { Component,OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: 'app/landing/contact/contact.component.html'
})

export class ContactComponent implements OnInit{
  ngOnInit() {
    var mapProp = {
            center: new google.maps.LatLng(41.385385, 2.180871),
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(document.getElementById("gmap"), mapProp);

      var styles = [
          {
            stylers: [
              { hue: "#00ffe6" },
              { saturation: -20 }
            ]
          },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});
          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');

          var marker = new google.maps.Marker({
      position: new google.maps.LatLng(41.385385, 2.180871),
      title:"BANANA BREAD"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
    content: "banana bread"
  });
    infowindow.open(map, marker);
  }
}
