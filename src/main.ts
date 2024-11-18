
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ActionService } from './app/shared/action.service';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app-routing';



bootstrapApplication(AppComponent,{
  providers : [
    ActionService, //providing service in global
    //importProvidersFrom(AppRoutingModule) //instead of appRouting in appModule we can use this method
    provideRouter(APP_ROUTES)
  ],
});
//bootstrapApplication(AppComponent);
