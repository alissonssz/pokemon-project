import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { ModalPokemonInfoComponent } from './modal-pokemon-info/modal-pokemon-info.component';
import { TradutorBooleanPipe } from 'src/app/pages/Pipes/tradutor-boolean.pipe';

@NgModule({
  declarations: [
    NavigatorComponent,
    CardPokemonComponent,
    ModalPokemonInfoComponent,
    TradutorBooleanPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    NavigatorComponent,
    CardPokemonComponent,
    TradutorBooleanPipe
  ],
  providers: [
    
  ]
})
export class ComponentsModule { }
