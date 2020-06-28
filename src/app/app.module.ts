import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, forwardRef } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './shared/modules/components/components.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PokemonApiService } from './pages/services/pokemon-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpUtilService } from './pages/services/http-util.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlPtbrService } from './pages/services/mat-paginator-intl-ptbr.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ComponentsModule, 
    RouterModule,
    HttpClientModule
  ],
  providers: [
    PokemonApiService, 
    HttpUtilService,
    {
      provide: MatPaginatorIntl,
      useClass: forwardRef(() => MatPaginatorIntlPtbrService)
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
