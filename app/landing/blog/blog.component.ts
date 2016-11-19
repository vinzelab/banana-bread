import { Component } from '@angular/core';
import {BlogService} from './blog.service'

@Component({
  selector: 'app-blog',
  providers: [BlogService],
  templateUrl: 'app/landing/blog/blog.component.html'
})

export class BlogComponent {
  public articles;

    // Inject FriendService and assign it to _friendService
    constructor(_blogService: BlogService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.articles = _blogService.getArticles();
    }
}
