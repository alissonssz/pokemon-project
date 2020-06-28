import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RotasPokemonApiEnum } from '../models/enums/rotas-pokemon-api.enum';
import { Observable } from 'rxjs';
import { PokemonSimples } from '../models/pokemon-simples.model';
import { ListaPokemon } from '../models/lista-pokemon.model';
import { QueryParamsPokemon } from '../models/query-params-pokemon.model';
import { HttpUtilService } from './http-util.service';
import { Ability } from '../models/ability.model';
import { DetalhesPokemon } from '../models/detalhes-pokemon.model';
import { FormDetalhe } from '../models/form-detalhe.model';

@Injectable()
export class PokemonApiService {

  constructor(
    private httpClient: HttpClient, 
    private httpUtilService: HttpUtilService
  ) { }

  getPokemons(queryParams?: QueryParamsPokemon): Observable<ListaPokemon<PokemonSimples>> {
    return this.httpClient.get<ListaPokemon<PokemonSimples>>(
      `${environment.baseUrl}${RotasPokemonApiEnum.pokemon}`, 
      {params: this.httpUtilService.httpParamsByObjeto(queryParams)}
    );
  }

  getDetalhesPokemon(url: string): Observable<DetalhesPokemon> {
    return this.httpClient.get<DetalhesPokemon>(url);
  }

  getPokemonAbilities(url: string): Observable<Ability[]> {
    return this.httpClient.get<Ability[]>(url);
  }

  getPokemonForm(url: string): Observable<FormDetalhe> {
    return this.httpClient.get<FormDetalhe>(url);
  }

}
