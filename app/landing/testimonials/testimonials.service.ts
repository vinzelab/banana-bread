import { Injectable } from '@angular/core';

@Injectable()

export class TestimonialsService{

  testimonials:Array<any>;

  constructor() {
    this.testimonials = [
      { name: 'Carole Dubois', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/customers1.jpg'},
      { name: 'Joe zerbib', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Maecenas faucibus mollis interdum. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/customers2.jpg'},
      { name: 'Max zerbib', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',url:'app/img/customers3.jpg'},
      { name: 'Léa zerbib', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/customers4.jpg'}
    ];
  }

  getTestimonials() {
    return this.testimonials;
  }

}
