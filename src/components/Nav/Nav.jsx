import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"

export default function Nav({onSearch, setAcces, logOut}) {
    /* const handleLogOut = () => {
        setAcces(false)
    } */
    return(
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
        </div>
         <button onClick={logOut /* handleLogOut */}>LogOut</button>
        <SearchBar onSearch={onSearch}/>
        </nav>
    )
}