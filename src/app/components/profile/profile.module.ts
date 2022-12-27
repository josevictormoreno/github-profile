import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { ProfileComponent } from './profile.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { IconesComponent } from './icones/icones.component';

@NgModule({
  declarations: [
    ProfileComponent,
    RepositorioComponent,
    IconesComponent
  ],
  imports: [
    MatTabsModule
  ]
})
export class ProfileModule { }