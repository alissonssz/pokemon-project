import { PokemonSimples } from './pokemon-simples.model';
import { Sprites } from './sprites.model';
import { VersionGroup } from './version-group.model';

export interface FormDetalhe {
    form_name: string,
    form_names: string[],
    form_order: number,
    id: number,
    is_battle_only: boolean,
    is_default: boolean,
    is_mega: boolean,
    name: string,
    names: string[],
    order: number,
    pokemon: PokemonSimples,
    sprites: Sprites,
    version_group: VersionGroup  
}