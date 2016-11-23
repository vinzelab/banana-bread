import { Injectable } from '@angular/core';

@Injectable()

export class WorksService {

  works:Array<any>;

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
  getWorks() {
    return this.works;
  }

}
