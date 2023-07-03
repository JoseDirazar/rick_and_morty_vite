import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, CREATE_CHAR, REMOVE_CHAR, NEXT, PREV, ADD_CHAR  } from "./accionTypes";

const initialState = {
  characters: [],
  myFavorites: [],
  allCharactersFav: [],
  numPage: 1
};
/* const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARD:
            return {
            ...state,
            cards: [...state.cards, action.payload]
      };
      case GET_CARD:
          return {...state, cards: [...state.cards, action.payload]};
          default:
              return {...state}
            }
        } */

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAR:
      if (Array.isArray(payload)) {
        return {
          ...state,
          characters: [...payload],
        };
      }

      return {
        ...state,
        characters: [payload, ...state.characters],
      };
    case REMOVE_CHAR:
      const newCharacters = state.characters.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        characters: newCharacters,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites:  payload,
        allCharactersFav:  payload
      };
      case REMOVE_FAV:
      return { ...state, myFavorites: payload};
    /* case REMOVE_FAV:
      const filtrados = state.myFavorites.filter((fav) => fav.id !== payload)
      return {
        ...state,
        myFavorites: filtrados,
        allCharactersFav: filtrados
      }; */
    case FILTER:
      const allCharactersFavFiltered = state.allCharactersFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFavFiltered,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav],
      };
    case PREV:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case NEXT:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    default:
      return state;
  }
};

export default reducer;
