import { Ability } from './ability.model';
import { Form } from './form.model';

export interface DetalhesPokemon {
    abilities: Ability[];
    forms: Form[];
}