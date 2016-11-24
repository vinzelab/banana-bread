import { Component , Input} from '@angular/core';

/** Nested Component */
import { HeaderComponent } from './landing/header/header.component';
import { AboutComponent } from './landing/about/about.component';
import { WorksComponent } from './landing/works/works.component';
import { TestimonialsComponent } from './landing/testimonials/testimonials.component';
import { InstagramComponent } from './landing/instagram/instagram.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {

}
