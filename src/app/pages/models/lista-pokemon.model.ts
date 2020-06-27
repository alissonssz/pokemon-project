/**
 * @export ListaPokemon
 * @interface ListaPokemon Interface responsável por manter uma lista de pokemons
 * @template T Template ao ser utilizado na lista de dados
 */
export interface ListaPokemon<T> {
    /**
     * Número total de registros
     */
    count: number; 
    /**
     * Próximo índice da listagem
     */
    next: string;
    /**
     * Índice anterior da listagem
     */
    previous: string;
    /**
     * Template da lista com os registros a serem recuperados
     */
    results: T[];
}