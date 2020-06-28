import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPokemonInfoComponent } from '../modal-pokemon-info/modal-pokemon-info.component';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input()
  nome: string;
  @Input()
  url: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(ModalPokemonInfoComponent, {
      data: {
        nome: this.nome,
        url: this.url
      }
    });
  }

}
