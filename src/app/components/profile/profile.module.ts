import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { ProfileComponent } from './profile.component'
import { RepositorioComponent } from './repositorio/repositorio.component'
import { IconesComponent } from './icones/icones.component'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CodigoComponent } from './codigo/codigo.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [
    ProfileComponent,
    RepositorioComponent,
    IconesComponent,
    CodigoComponent,
    SnakeComponent
  ],
  imports: [
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class ProfileModule { }
