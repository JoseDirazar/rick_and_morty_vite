import "./App.css";
import Cards from "./components/Cards/Cards";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error404 from "./components/Error404/Error404";
import Favorites from "./components/Favorites/Favorites";
import { useSelector, useDispatch } from "react-redux";
import { addChar, removeChar, removeFav, addFav } from "./redux/actions";
import CreateCharacter from "./components/CreateCaracter/CreateCaracter";

function App() {
  // const EMAIL = "jo@gmail.com";
  // const PASSWORD = "123qweDSA";

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();

  /* function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       //setAccess(access)
       access && navigate('/home');
    });
 } */
 async function login(inputs) {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/rickandmorty/login?password=${inputs.password}&email=${inputs.email}`
    );
    if (data.access) {
      
      setAccess(true);
      navigate("/home");
      return alert("bienvenidos!!!");
    } else {
      return alert("no es el usuario");
    }
  } catch (error) {
    console.log(error);
  }
}

  async function logOut() {
    try {
      const {data}= await axios.get(
        "http://localhost:3001/rickandmorty/logout"
      );
      setAccess(false);
      
      return alert("Hasta luego!");     
      
    } catch (error) {
      console.log(error);
    }
    // setAccess(false);
    // navigate("/");
  }

  //const [characters, setCharacters] = useState([])
  //console.log(characters)

  const { characters } = useSelector((store) => store);

  function onSearch(id) {
    //console.log(id)

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const char = characters.find((ch) => ch.id === Number(id));
          if (char) return alert("El personaje ya existe");
          dispatch(addChar(data));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("No hay personajes con ese ID!");
        } else {
          console.error("Error en la solicitud:", error);
        }
      });
  }

  
  useEffect(() => {
    async function inEffect() {
      try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/login`
      );
      if (data.access) {
        setAccess(true);
        console.log("Response del Back: ",data.access)
        navigate("/home");
        return
      } else {
        console.log("Response del Back: ", data.access)
      }
    } catch (error) {
      console.log(error);
    }
    }
    inEffect()
    !access && navigate("/");
    //if(!access) navigate("/")
  }, [access]);

  function onClose(id) {
    dispatch(removeChar(Number(id)));
    //dispatch(removeFav(Number(id)));     //commented dont remove of Fav onClose
  }

  useEffect(() => { // recarga los fav guardados en el Back
    async function inEffect() {
      try {
        const {data} = await axios.get(`http://localhost:3001/rickandmorty/fav`)
        data.forEach(character => dispatch(addFav(character)))
      } catch (error) {
        console.log(error)
      }
    }
    inEffect()
   // dispatch(addFav({ id: "RELOAD" }));
  }, []);

  useEffect(() => {
    const requests = [];
    for (let num = 48; num < 55; num++) {
      requests.push(
        axios.get(`http://localhost:3001/rickandmorty/page/${num}`)
      );
    }
    Promise.all(requests)
      .then((results) => {
        let newCharacters = [];
        results.map(
          (chars) => (newCharacters = [...newCharacters, ...chars.data])
        );
        dispatch(addChar([...newCharacters]));
      })
      .catch((error) => {});
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/create" element={<CreateCharacter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
