

import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatToolbarModule,
  ]
})
export class HomeModule { }