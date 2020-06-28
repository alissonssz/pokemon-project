import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, forwardRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpUtilService } from './pages/services/http-util.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlPtbrService } from './pages/services/mat-paginator-intl-ptbr.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SpinnerService } from './pages/services/spinner.service';
import { AppHttpInterceptor } from './app-http-interceptor.service';
import { NgxSpinnerModule } from "ngx-spinner";
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
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    PokemonApiService, 
    HttpUtilService,
    {
      provide: MatPaginatorIntl,
      useClass: forwardRef(() => MatPaginatorIntlPtbrService)
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AppHttpInterceptor
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
