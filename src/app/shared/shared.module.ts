import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './components/section/section.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { DetailsPECComponent } from './components/details-pec/details-pec.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SectionComponent,
    DetailsPECComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SectionComponent,
    DetailsPECComponent
  ]
})
export class SharedModule { }
