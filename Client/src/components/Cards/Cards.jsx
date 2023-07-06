import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Paginate from "../Paginate/Paginate";

//import "./css/Cards.css"

export default function Cards({ onClose }) {
  const { characters, numPage } = useSelector((state) => state);

  const cantCharPerPage = 14;

  let desde = (numPage - 1) * cantCharPerPage;
  let hasta = numPage * cantCharPerPage;

  let cantPage = Math.floor(characters.length / cantCharPerPage);

  const viewCharacters = characters?.slice(desde, hasta);

  return (
    <div>
      <div className={style.cards}>
        {/* <h2>Estamos en el home y podemos mostrar y/o ver nuestras cards</h2> */}
        {viewCharacters?.map((char, index) => {
          return (<div key={index + 2000}>
             <Card
               name={char.name}
               species={char.species}
               id={char.id}
               gender={char.gender}
               image={char.image}
               onClose={onClose}
             />
          </div>
          );
        })}
      </div>
      <Paginate numPage={numPage} cantPage={cantPage} />
    </div>
  );
}

/* class Cards extends React.Component{
   constructor(props) {
      super(props)
   }

componentDidMount() {
   this.props.getCard(this.props.id)
   console.log(this.props.id)
}

render() {
      return <div className="cardContainer">
      {this.props.cards?.map(cardDetails => {
         return <>
            <Card
            id={cardDetails.id}
            name={cardDetails.name}
            status={cardDetails.status}
            species={cardDetails.species}
            gender={cardDetails.gender}
            origin={cardDetails.origin.name}
            image={cardDetails.image}
            onClose={onClose}
            />
         </>
      })}
   </div>;
   }
}
const mapStateToProps = (state) => { // recibe al state global gracias a connect()
   return {
      cards: state.cards
      //nombre: state.nombre <-- (ej) van todas las props que yo quiera y con el nombre que quiera, no hace falta machear el initialState importado de reducer
   } 
}

const mapDispatchToProps = (dispatch) => {
   return {
      getCard: (id) => {dispatch(getCard(id))} //la funcion obtenerNombre se ejecuta para obtener el obj que retorna 
   }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Cards) */
//mapStateToProps permite acceder al estado global
//mapDispatchToProps permite despachar acciones al reducer
