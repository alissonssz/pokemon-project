import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { PokemonApiService } from '../services/pokemon-api.service';
import { Subject } from 'rxjs';
import { takeUntil, retry } from 'rxjs/operators';
import { QueryParamsPokemon } from '../models/query-params-pokemon.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ListaPokemon } from '../models/lista-pokemon.model';
import { PokemonSimples } from '../models/pokemon-simples.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnDestroy, AfterViewInit  {

  totalDeItens = 99;
  tamanhoDaPagina = 10;
  opcaoDePaginacao = [5,10,20,30];
  destroy$: Subject<boolean> = new Subject<boolean>();
  numeroTentativas = 3;
  @ViewChild('paginador') paginator: MatPaginator;

  constructor(private pokemonApiService: PokemonApiService) { }
  
  ngOnInit(): void {
    this.consultarPokemons();
  }

  ngAfterViewInit(): void {
    this.observarPaginador();
  }

  consultarPokemons(queryParams?: QueryParamsPokemon) {
    this.pokemonApiService.getPokemons(queryParams).pipe(retry(this.numeroTentativas), takeUntil(this.destroy$)).
      subscribe((response: ListaPokemon<PokemonSimples>) => {
        console.log('response', response);
        this.configurarPaginador(response);
      });
  }

  configurarPaginador(listaPokemons: ListaPokemon<PokemonSimples>) {
    this.totalDeItens = listaPokemons.count;
  }

  observarPaginador() {
    this.paginator.page.subscribe((pagina: PageEvent) => {
      console.log('pagina:', pagina);
      this.consultarPokemons({limit: (pagina.pageSize), offset: (pagina.pageSize * pagina.pageIndex)} as QueryParamsPokemon);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
