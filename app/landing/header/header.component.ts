import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'app/landing/header/header.component.html'
})

export class HeaderComponent {
  showMenu: false;

  constructor() {
    }

    getStyle() {
      if(this.showMenu){
        return 1;
      } else {
        return 0;
      }
    }
    getDisplay() {
      if(this.showMenu){
        return "block";
      } else {
        return "none";
      }
    }
    getRotate(){
      if(this.showMenu){
        return "rotate(-30deg)";
      } else {
        return "none";
      }
    }
}
