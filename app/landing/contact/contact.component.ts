import { Component,OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: 'app/landing/contact/contact.component.html'
})

export class ContactComponent implements OnInit{

  ngOnInit() {
    //Initialisation gmap
    var maposition=new google.maps.LatLng(41.385385, 2.180871);
    var mapProp = {
      center: maposition,
      zoom: 20,
      scrollwheel: false,
      zoomControl: false,
      scaleControl: false,
      navigationControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("gmap"), mapProp);

    // gmap custom style

    var styles = [
      {
        stylers: [
          { hue: "#00000" },
          { saturation: -100 }
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

      // gmap marker
      var marker = new google.maps.Marker({
        position: maposition,
        title:"BANANA BREAD",
        visible:false
      });

      // Add the marker to the map
      marker.setMap(map);
      var infowindow = new google.maps.InfoWindow({
        content: "<div id='info-window'>banana bread</div>"  });
        infowindow.open(map, marker);

      }
      // validation form
      send(message) {
        console.log(message);
    }
    }
