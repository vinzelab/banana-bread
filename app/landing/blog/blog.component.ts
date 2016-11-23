import { Component } from '@angular/core';
import {BlogService} from './blog.service'

@Component({
  selector: 'app-blog',
  providers: [BlogService],
  templateUrl: 'app/landing/blog/blog.component.html'
})

export class BlogComponent {
  public articles;

  // Inject BlogService and assign it to _blogService
  constructor(_blogService: BlogService) {
    // Utilize .get request from app/blog.service.ts to populate article object
    this.articles = _blogService.getArticles();
  }
}
