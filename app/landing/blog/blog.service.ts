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
export class BlogService {

    // 3B
    articles:Array<any>;

    // 3C
    constructor() {
        this.articles = [
    { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ',category:'lifestyle',url:'app/img/blog1.jpg',description:'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... '},
    { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ',category:'lifestyle',url:'app/img/blog2.jpg',description:'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... '},
    { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ',category:'lifestyle',url:'app/img/blog3.jpg',description:'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... '}

        ];
    }

    // 3D
    getArticles() {
        return this.articles;
    }

}
