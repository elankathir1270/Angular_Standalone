
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ActionService } from './app/shared/action.service';


bootstrapApplication(AppComponent,{
  providers : [ActionService]
});  //providing service in global
//bootstrapApplication(AppComponent);
