import { Component, inject } from '@angular/core';
import { ActionService } from 'src/app/shared/action.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone : true,
  imports : [SharedModule],
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  //providers : [ActionService] //providing service in component level
})
export class DetailComponent {

  action : string = 'Done'
  actionService : ActionService = inject(ActionService);

  onClick(){
    this.action = this.actionService.changeAction()
  }

}
