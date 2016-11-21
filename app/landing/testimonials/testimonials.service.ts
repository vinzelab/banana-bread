import { Injectable } from '@angular/core';

// Step 2. Use @Injectable() to declare the FriendService class as an Injectable
@Injectable()

/**
    Step 3A. - Create and export FriendsService  Class { }
    3B: create friends object and declare it to be an Array of any values/
    3C: Add friends object to the constructor function
    3D: create getFriends() function to call all friends values.
**/
// 3A
export class TestimonialsService {

    // 3B
    testimonials:Array<any>;

    // 3C
    constructor() {
        this.testimonials = [
    { name: 'Carole Dubois', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/work1.jpg'},
    { name: 'Carole Dubois', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/work1.jpg'},
    { name: 'Carole Dubois', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/work1.jpg'},
    { name: 'Carole Dubois', comment: 'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper . Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Maecenassed diam eget risus varius blandit sit amet non magna.',url:'app/img/work1.jpg'}
        ];
    }

    // 3D
    getTestimonials() {
        return this.testimonials;
    }

}
