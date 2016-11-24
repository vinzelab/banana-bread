"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        //Initialisation gmap
        var maposition = new google.maps.LatLng(41.385385, 2.180871);
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
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 100 },
                    { visibility: "simplified" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];
        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        // gmap marker
        var marker = new google.maps.Marker({
            position: maposition,
            title: "BANANA BREAD",
            visible: false
        });
        // Add the marker to the map
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: "<div id='info-window'>banana bread</div>" });
        infowindow.open(map, marker);
    };
    // validation form
    ContactComponent.prototype.send = function (message) {
        console.log(message);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: 'app/landing/contact/contact.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map