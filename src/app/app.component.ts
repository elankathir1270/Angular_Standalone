import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ActionService } from './shared/action.service';

@Component({
  standalone : true,
  imports : [HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers : [ActionService] //providing service in parent component level
})
export class AppComponent {
  title = 'ng-standalone';
}
