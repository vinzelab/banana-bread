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
var testimonials_service_1 = require('./testimonials.service');
var TestimonialsComponent = (function () {
    function TestimonialsComponent(_testimonialsService) {
        this.testimonial = [];
        this.slideIndex = 1;
        this.testimonials = _testimonialsService.getTestimonials();
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        // first testimonial on init
        this.testimonial.push(this.testimonials[0]);
        // first dot active
        this.activeDot = 0;
    };
    TestimonialsComponent.prototype.currentSlide = function (i) {
        this.showSlides(this.slideIndex = i);
        if (this.activeDot === i) {
            this.activeDot = 0;
        }
        else {
            this.activeDot = i;
        }
    };
    // Push the selection
    TestimonialsComponent.prototype.showSlides = function (i) {
        this.testimonial = [];
        this.testimonial.push(this.testimonials[i]);
    };
    TestimonialsComponent = __decorate([
        core_1.Component({
            selector: 'app-testim',
            providers: [testimonials_service_1.TestimonialsService],
            templateUrl: 'app/landing/testimonials/testimonials.component.html'
        }), 
        __metadata('design:paramtypes', [testimonials_service_1.TestimonialsService])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());
exports.TestimonialsComponent = TestimonialsComponent;
//# sourceMappingURL=testimonials.component.js.map