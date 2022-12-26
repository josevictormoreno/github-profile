import { NgModule } from '@angular/core';
import {Dialog, HomeComponent} from './home.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    HomeComponent,
    Dialog
  ],
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class HomeModule { }
