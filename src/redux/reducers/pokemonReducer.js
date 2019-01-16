import { FETCH_POKEMONS_REQUESTED, FETCH_POKEMON_DATA_SUCCESS } from './../types';

const initialState = {
    isFetching: false,
    pokemonList: [],
    pokemonListToShow: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS_REQUESTED:
            return { ...state, isFetching: true }
        case FETCH_POKEMON_DATA_SUCCESS:
            return { ...state, isFetching: false, pokemonListToShow: [...state.pokemonListToShow, action.payload] }
        default:
            return state
    }
}