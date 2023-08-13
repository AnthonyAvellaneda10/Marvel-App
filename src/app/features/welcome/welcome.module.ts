import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComicsComponent } from './pages/comics/comics.component';
import { EventsComponent } from './pages/events/events.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    ComicsComponent,
    EventsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
