import Card from '../Card/Card';
import style from "./Cards.module.css"


//import "./css/Cards.css"

export default function Cards({ characters, onClose }) {
   //console.log(characters)
   return <div className={style.cardsContainer}>
      {characters.map(e => {
         return <>
            <Card
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            gender={e.gender}
            origin={e.origin.name}
            image={e.image}
            onClose={onClose}
            />
         </>
      })}
   </div>;
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


