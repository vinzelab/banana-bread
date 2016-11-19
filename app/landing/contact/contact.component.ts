import { Component,OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: 'app/landing/contact/contact.component.html'
})

export class ContactComponent implements OnInit{
  ngOnInit() {
    var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
  }
}
