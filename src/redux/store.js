import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import  ThunkMiddleware  from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //conectar con la extension del navegador para ver estados de redux

export const store = createStore(reducer, composeEnhancer(applyMiddleware(ThunkMiddleware)))


// el segundo arg de store permite hacer peticiones a Api/servidor

