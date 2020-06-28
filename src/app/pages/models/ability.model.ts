import { PokemonSimples } from './pokemon-simples.model';

export interface Ability {
    ability: PokemonSimples;
    is_hidden: boolean;
    slot: number;
}