import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
function Card({
  addFav,
  removeFav,
  name,
  species,
  id,
  gender,
  image,
  onClose,
  myFavorites,
}) {
  //consolelog()
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, id, gender, image, onClose });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  });
  return (
    <div className={style.cardContainer}>
      {/* { isFav ? (
               <button onClick={handleFavorite}>3</button>
            ) : (
               <button onClick={handleFavorite}>e</button>
            ) } */}
        <button className={style.favoriteButton} onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
        <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
      <div classname={style.imageWrapper}>
        <img className={style.img} src={image} alt={name} />
      </div>
      <div className={style.infoWrapper}>
        <NavLink className={style.navLink} to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </NavLink>

        <h2 className={style.gender}>{gender}</h2>
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
