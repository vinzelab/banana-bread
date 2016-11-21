import { Component } from '@angular/core';

import {TestimonialsService} from './testimonials.service';

@Component({
  selector: 'app-testim',
  providers:[TestimonialsService],
  templateUrl: 'app/landing/testimonials/testimonials.component.html'
})

export class TestimonialsComponent {
  public testimonials;

    // Inject FriendService and assign it to _friendService
    constructor(_testimonialsService: TestimonialsService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.testimonials = _testimonialsService.getTestimonials();
    }
}
