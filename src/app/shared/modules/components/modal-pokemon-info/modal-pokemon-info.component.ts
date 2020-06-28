import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PokemonApiService } from 'src/app/pages/services/pokemon-api.service';
import { DetalhesPokemon } from 'src/app/pages/models/detalhes-pokemon.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { Form } from 'src/app/pages/models/form.model';
import { FormDetalhe } from 'src/app/pages/models/form-detalhe.model';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-modal-pokemon-info',
  templateUrl: './modal-pokemon-info.component.html',
  styleUrls: ['./modal-pokemon-info.component.css']
})
export class ModalPokemonInfoComponent implements OnInit, OnDestroy  {

  destroy$: Subject<boolean> = new Subject<boolean>();
  formDetalhe: FormDetalhe;
  constructor(
    @Inject(MAT_DIALOG_DATA) public detalhesPokemon: DetalhesPokemon, 
    private pokemonApiService: PokemonApiService
  ) { }

  ngOnInit(): void {
    this.recuperarGrupo();
  }

  extrairLinkForm(forms: Form[]): string {
    if (forms.length) {
      const [{url}] = forms;
      return url;
    }
  }

  recuperarGrupo() {
    this.pokemonApiService.getPokemonForm(this.extrairLinkForm(this.detalhesPokemon.forms)).pipe(
      takeUntil(this.destroy$)
    ).subscribe((responseForm: FormDetalhe) => {
      this.formDetalhe = responseForm;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
