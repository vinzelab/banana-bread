import { Component,OnInit } from '@angular/core';

import {TestimonialsService} from './testimonials.service';

@Component({
  selector: 'app-testim',
  providers:[TestimonialsService],
  templateUrl: 'app/landing/testimonials/testimonials.component.html'
})

export class TestimonialsComponent {
  public testimonials;
  public testimonial:Array<any>=[];
  public slideIndex:number=1;
  activeDot:number;

  constructor(_testimonialsService: TestimonialsService) {
    this.testimonials = _testimonialsService.getTestimonials();

  }
  ngOnInit() {
    // first testimonial on init
    this.testimonial.push(this.testimonials[0]);
    // first dot active
    this.activeDot=0;
  }

  currentSlide(i){
    this.showSlides(this.slideIndex = i);
    if (this.activeDot === i) {
      this.activeDot = 0;
    }
    else {
      this.activeDot = i;
    }
  }
  // Push the selection
  showSlides(i) {
    this.testimonial=[];
    this.testimonial.push(this.testimonials[i]);
  }

}
