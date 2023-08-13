import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { EventsComponent } from './pages/events/events.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: 'characters',
    component: HomeComponent,
  },
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'characters/details/:nameCharacter',
    component: DetailsComponent,
  },
  {
    path: 'comics/details/:nameComic',
    component: DetailsComponent,
  },
  {
    path: 'events/details/:nameEvent',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
