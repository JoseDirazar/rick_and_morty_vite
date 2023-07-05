import {
  REMOVE_FAV,
  ADD_FAV,
  FILTER,
  ORDER,
  PREV,
  NEXT,
  CREATE_CHAR,
  RESET,
  ADD_CHAR,
  REMOVE_CHAR,
} from "./accionTypes";

import axios from "axios"

export function addChar(char) {
  return {
    type: ADD_CHAR,
    payload: char,
  };
}

export function removeChar(id) {
  return {
    type: REMOVE_CHAR,
    payload: id,
  };
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const addFav = (character) => {
  //const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        character
      );
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  /* return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: 'ADD_FAV',
           payload: data,
        });
     });
  }; */
};

// export const addFav = (character) => {
//   return { type: ADD_FAV, payload: character };
// };

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: 'REMOVE_FAV',
           payload: data,
     });
     });
  };
};
/* export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}; */

export function reset() {
  return {
    type: RESET,
  };
}

export function prev() {
  return {
    type: PREV,
  };
}
export function next() {
  return {
    type: NEXT,
  };
}

export function createCharacter(character) {
  return {
    type: CREATE_CHAR,
    payload: character,
  };
}

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
