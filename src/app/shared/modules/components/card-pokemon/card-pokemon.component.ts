import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPokemonInfoComponent } from '../modal-pokemon-info/modal-pokemon-info.component';
import { PokemonApiService } from 'src/app/pages/services/pokemon-api.service';
import { takeUntil } from 'rxjs/operators';
import { DetalhesPokemon } from 'src/app/pages/models/detalhes-pokemon.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit, OnDestroy {

  @Input()
  name: string;
  @Input()
  url: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  detalhesPokemon: DetalhesPokemon;

  constructor(public dialog: MatDialog, private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {

  }

  recuperarDetalhesDoPokemon() {
    this.pokemonApiService.getDetalhesPokemon(this.url).pipe(takeUntil(this.destroy$)).subscribe(
      (responseDetalhes: DetalhesPokemon) => {
        this.detalhesPokemon = responseDetalhes;
        this.exibirDialogo();
      },
      (err) => {

      }
    );
  }

  carregarDados() {
    this.recuperarDetalhesDoPokemon();
  }

  exibirDialogo() {
    this.dialog.open(ModalPokemonInfoComponent, {
      data: {...this.detalhesPokemon, name: this.name} ,
      height: '600px',
      width: '800px'
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
