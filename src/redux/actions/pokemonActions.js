import axios from 'axios';
import CONFIG from './../../config';
import {
    map,
    take
} from 'lodash';

import {
    FETCH_POKEMONS_REQUESTED,
    FETCH_POKEMON_DATA_SUCCESS,
    FETCH_POKEMON_DATA_FAILURE,
    FETCH_POKEMONS_FAILURE
} from './../types';

export const fetchPokemons = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_POKEMONS_REQUESTED, payload: true });
        axios.get(`${CONFIG.API_URL}/pokemon/?limit=25&offset=0`)
            .then(response => {
                map(take(response.data.results, 20), (pokemon) => {
                    axios.get(pokemon.url)
                        .then(response => {
                            dispatch({
                                type: FETCH_POKEMON_DATA_SUCCESS,
                                payload: response.data
                            });
                        })
                        .catch(error => {
                            dispatch({
                                type: FETCH_POKEMON_DATA_FAILURE,
                                payload: error
                            });
                        })
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_POKEMONS_FAILURE,
                    payload: error
                });
            })
    }
};