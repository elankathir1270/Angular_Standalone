import { Component, inject } from '@angular/core';
import { ActionService } from 'src/app/shared/action.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  action : string = 'Done'
  actionService : ActionService = inject(ActionService);

  onClick(){
    this.action = this.actionService.changeAction()
  }

}
