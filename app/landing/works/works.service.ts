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
export class WorksService {

    // 3B
    works:Array<any>;

    // 3C
    constructor() {
        this.works = [
    { name: 'work name 1', category: 'portrait / landscape / lighting',url:'app/img/work1.jpg'},
    { name: 'work name 2', category: 'portrait / landscape / lighting',url:'app/img/work2.jpg'},
    { name: 'work name 3', category: 'portrait / landscape / lighting',url:'app/img/work3.jpg'},
    { name: 'work name 4', category: 'portrait / landscape / lighting',url:'app/img/work4.jpg'},
    { name: 'work name 5', category: 'portrait / landscape / lighting',url:'app/img/work5.jpg'},
    { name: 'work name 6', category: 'portrait / landscape / lighting',url:'app/img/work6.jpg'}

        ];
    }

    // 3D
    getWorks() {
        return this.works;
    }

}
