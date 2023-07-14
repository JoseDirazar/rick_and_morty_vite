import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav({ onSearch, logOut }) {
  const { pathname } = useLocation();
  return (
    <nav className={style.nav}>
      <div className={style.buttons}>
        <NavLink className={style.link} to="/home">
          Home
        </NavLink>
        <NavLink className={style.link} to="/favorites">
          Favorites
        </NavLink>
        <NavLink className={style.link} to="/about">
          About
        </NavLink>
        <NavLink className={style.link}  to={"/create"}>
          Create
        </NavLink>
      </div>
      <button onClick={logOut}>LogOut</button>
      {pathname === "/home" && <SearchBar onSearch={onSearch} />}
    </nav>
  );
}
