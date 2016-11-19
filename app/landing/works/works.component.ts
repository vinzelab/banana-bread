import { Component } from '@angular/core';
import { WorksService } from './works.service';


@Component({
  selector: 'app-works',
  providers: [WorksService],
  templateUrl: 'app/landing/works/works.component.html'
})

export class WorksComponent {
  public works;

    // Inject FriendService and assign it to _friendService
    constructor(_worksService: WorksService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.works = _worksService.getWorks();
    }
}
