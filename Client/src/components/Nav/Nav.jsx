import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav({ onSearch, logOut }) {
  const {pathname} = useLocation()
  return (
    <nav className="navContainer">
      <div className="navButtons">
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
        <NavLink to={"/create"}>
          <div>Create</div>
        </NavLink>
      </div>
      <button onClick={logOut}>LogOut</button>
      {pathname === "/home" && <SearchBar onSearch={onSearch} />}
    </nav>
  );
}
