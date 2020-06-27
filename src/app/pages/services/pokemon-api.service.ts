import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RotasPokemonApiEnum } from '../models/enums/rotas-pokemon-api.enum';
import { Observable } from 'rxjs';
import { PokemonSimples } from '../models/pokemon-simples.model';
import { ListaPokemon } from '../models/lista-pokemon.model';
import { QueryParamsPokemon } from '../models/query-params-pokemon.model';
import { HttpUtilService } from './http-util.service';


@Injectable()
export class PokemonApiService {

  constructor(private httpClient: HttpClient, private httpUtilService: HttpUtilService) { }

  getPokemons(queryParams?: QueryParamsPokemon): Observable<ListaPokemon<PokemonSimples>> {
    return this.httpClient.get<ListaPokemon<PokemonSimples>>(`${environment.baseUrl}${RotasPokemonApiEnum.pokemon}`, 
    {params: this.httpUtilService.httpParamsByObjeto(queryParams)});
  }

}
