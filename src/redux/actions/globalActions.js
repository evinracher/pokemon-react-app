import { getOnePokemon, getPokemonImageUrl } from '../../Utils';
export const INIT = 'INIT';
export const SHOW = 'SHOW';
export const STOP_SHOW = 'STOP_SHOW';
export const COMPARE = 'COMPARE';
export const STOP_COMPARE = 'STOP_COMPARE';
export const UPDATE_POKEMONS = 'UPDATE_POKEMONS';
export const LOADING = 'LOADING';
export const SEARCH = 'SEARCH';
export const STOP_SEARCH = 'STOP_SEARCH';

export const initList = () => {
  return {
    type: INIT
  }
}

export const show = (toShow, toCompare) => async (dispatch) => {
  let pokemonToShow = toShow
    ? await getOnePokemon(toShow.url)
    : null;
  let pokemonToCompare = toCompare
    ? await getOnePokemon(toCompare.url)
    : null;

  dispatch({
    type: SHOW,
    payload: {
      pokemonToShow,
      pokemonToCompare
    }
  });
}

export const stopShow = () => {
  return {
    type: STOP_SHOW
  }
}

export const compare = () => {
  return {
    type: COMPARE
  }
}

export const stopCompare = () => {
  return {
    type: STOP_COMPARE
  }
}

export const load = () => {
  return {
    type: LOADING
  }
}

export const updatePokemons = (URL) => async (dispatch) => {
  try {
    let data = await fetch(URL).then(res => res.json());
    const pokemons = await Promise.all(
      data.results.map(async (result) => {
        return {
          url: result.url,
          name: result.name,
          imageUrl: await getPokemonImageUrl(result.url)
        };
      })
    )

    dispatch({
      type: UPDATE_POKEMONS,
      payload: {
        isLoading: false,
        nextURL: data.next,
        pokemons
      }
    })
  } catch (error) {
    console.error('There was a problem in loading pokemons');
    console.error(error);
  }
}

export const search = (name, pokemons) => {
  const pokemonsFiltered = pokemons.filter((pokemon) => pokemon.name.includes(name))
  return {
    type: SEARCH,
    payload: {
      pokemonsFiltered
    }
  }
}

export const stopSearch = () => {
  return {
    type: STOP_SEARCH
  }
}