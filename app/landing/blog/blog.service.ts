import { Injectable } from '@angular/core';

@Injectable()

export class BlogService {

  articles:Array<any>;

  constructor() {
    this.articles = [
      { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ',category:'lifestyle',url:'app/img/blog1.jpg',description:'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... '},
      { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ',category:'lifestyle',url:'app/img/blog2.jpg',description:'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... '},
      { title: 'Cras mattis consectetur purus sit amet', date: 'DECEMBER 17, 2015 ',category:'lifestyle',url:'app/img/blog3.jpg',description:'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper.Nullam id dolor id nibh elit... '}
    ];
  }

  getArticles() {
    return this.articles;
  }

}
