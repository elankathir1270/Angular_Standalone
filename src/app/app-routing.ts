import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';



export const APP_ROUTES: Route[] = [
  {path : '', component : HomeComponent},
  {path : 'about', loadComponent : () => import('./about/about.component').then(com => com.AboutComponent)},//this loadComponent syntax only works with standalone component
  {path : 'courses', loadChildren : () => import('./courses/courses-route').then(mod => mod.COURSE_ROUTES)}
  //{path : 'courses', loadChildren : () =>  CoursesModule}
];


