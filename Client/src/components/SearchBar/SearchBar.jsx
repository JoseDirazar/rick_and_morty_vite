
import { useState } from "react";

export default function SearchBar({onSearch}) {
    //console.log(characterID)
    let [id, setID] = useState("")

    function handleOnChange(event) {
      setID(event.target.value)
     
    }
    function handleOnClick() {
      onSearch(id);
      setID(""); // Limpiar el contenido del input

     
   }

   const randomChar = () => {
      const numRan = Math.floor(Math.random() * 825) + 1
      onSearch(numRan)  
   }
    
   
    return (
       <div>
          <input type='search' value={id} onChange={handleOnChange}/>
          <button onClick={handleOnClick}>Agregar</button>
          <button onClick={randomChar}>Random</button>
       </div>
    );
 }



 /* const mapStateToProps = (state) => { // recibe al state global gracias a connect()
   return {
      cards: state.cards
      //nombre: state.nombre <-- (ej) van todas las props que yo quiera y con el nombre que quiera, no hace falta machear el initialState importado de reducer
   } 
}
 const mapDispatchToProps = (dispatch) => {
   return {
      cards: (id) => {dispatch(getCard(id))} //la funcion obtenerNombre se ejecuta para obtener el obj que retorna 
   }
}


 export default connect(mapStateToProps, mapDispatchToProps)(SearchBar); */