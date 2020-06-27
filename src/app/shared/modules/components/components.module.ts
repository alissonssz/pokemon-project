import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';

@NgModule({
  declarations: [
    NavigatorComponent,
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    NavigatorComponent
  ]
})
export class ComponentsModule { }
