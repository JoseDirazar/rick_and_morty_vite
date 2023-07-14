import style from "./Card.module.css"
import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
function Card({ addFav, removeFav, name, species, status, origin, id, gender, image, onClose, myFavorites }) {
  //consolelog()
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, status, origin, id, gender, image, onClose });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const {pathname} = useLocation()

  return (
    <div className={style.card}>

      <div className={style.close}>

        <button  onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

        {pathname !== "/favorites" && <button  onClick={() => onClose(id)}>X</button>}
        
      </div>

      <div className={style.info}>

        <img src={image} alt={name} />

        <NavLink className={style.link} to={`/detail/${id}`}>
          <h2>{name}</h2>
        </NavLink>
        
        <h2>{species}</h2>

      </div>

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
