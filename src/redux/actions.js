import { REMOVE_FAV, ADD_FAV, FILTER, ORDER} from "./accionTypes";


export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}
export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden
  }
}


export const addFav = (character) => {
  return {type:ADD_FAV, payload: character}
}

export const removeFav = (id) => {
return {
  type: REMOVE_FAV,
  payload: id
  };
};

/* export const getCard = (id) => {
    return async function(dispatch) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        dispatch({type: GET_CARD, payload: data});
      } catch (error) {
        // Handle the error here
        console.error('Error fetching card:', error);
        dispatch({type: ERROR_FETCHING_CARD, payload: error});
      }
    };
  }; */
 
  