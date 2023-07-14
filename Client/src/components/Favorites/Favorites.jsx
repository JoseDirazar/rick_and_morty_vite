import React, { useEffect } from "react"
import Card from "../Card/Card"
import { useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { orderCards, filterCards } from "../../redux/actions"
import style from "../Cards/Cards.module.css"

const Favorites = ({myFavorites}) => {
    
    const store = useSelector(state => state.myFavorites)
    
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    function handleOrder(event) {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }
    function handleFilter(event) {
        dispatch(filterCards(event.target.value))

    }
    return (
        <div className={style.cards}>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
        </select> 
        {store?.map(fav => {  
            return (<div key={fav?.id + 826}>
                <Card 
                id={fav?.id} 
                name={fav?.name}
                species={fav?.species}
                gender={fav?.gender}
                image={fav?.image}
                onClose={fav?.onClose}
                />
            </div>

            )
        })}
        </div>
    )
}  
export default Favorites
