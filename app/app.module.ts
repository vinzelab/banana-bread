import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { AboutComponent } from './landing/about/about.component';
import { WorksComponent } from './landing/works/works.component';
import { TestimonialsComponent } from './landing/testimonials/testimonials.component';
import { BlogComponent } from './landing/blog/blog.component';
import { ContactComponent } from './landing/contact/contact.component';
import { InstagramComponent } from './landing/instagram/instagram.component';


// import { HeaderComponent }   from './app/landing-page/header.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, HeaderComponent,AboutComponent,WorksComponent,TestimonialsComponent,BlogComponent,ContactComponent,InstagramComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
