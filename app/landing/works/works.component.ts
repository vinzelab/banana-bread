import { Component } from '@angular/core';
import { WorksService } from './works.service';


@Component({
  selector: 'app-works',
  providers: [WorksService],
  templateUrl: 'app/landing/works/works.component.html'
})

export class WorksComponent {
  public works;

  constructor(_worksService: WorksService) {
    this.works = _worksService.getWorks();
  }
}
