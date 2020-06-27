import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
    data: {
      nome: 'pokemons'
    }
  },
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: '**',
    redirectTo: 'pokemons'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }