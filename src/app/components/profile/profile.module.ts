import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { ProfileComponent } from './profile.component';
import { RepositorioComponent } from './repositorio/repositorio.component';

@NgModule({
  declarations: [
    ProfileComponent,
    RepositorioComponent
  ],
  imports: [
    MatTabsModule
  ]
})
export class ProfileModule { }