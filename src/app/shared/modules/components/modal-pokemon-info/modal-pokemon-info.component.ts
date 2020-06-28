import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pokemon-info',
  templateUrl: './modal-pokemon-info.component.html',
  styleUrls: ['./modal-pokemon-info.component.css']
})
export class ModalPokemonInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }

}
