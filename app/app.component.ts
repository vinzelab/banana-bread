import { Component , Input} from '@angular/core';

/** Nested Component */
import { HeaderComponent } from './landing/header/header.component';
import { AboutComponent } from './landing/about/about.component';
import { WorksComponent } from './landing/works/works.component';
import { TestimonialsComponent } from './landing/testimonials/testimonials.component';
import { InstagramComponent } from './landing/instagram/instagram.component';
// import { WorksService } from './landing/works/works.service';

@Component({
  selector: 'app',
  template: '<app-header></app-header><app-about></app-about><app-works></app-works><app-testim></app-testim><app-blog></app-blog><app-contact></app-contact><app-insta></app-insta>'
})

export class AppComponent { }
