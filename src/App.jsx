import "./App.css"
import Cards from './components/Cards/Cards';
import { useState, useEffect } from 'react';
import Nav from "./components/Nav/Nav"
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error404 from './components/Error404/Error404';
import Favorites from './components/Favorites/Favorites';


function App() {

   const EMAIL = 'jo@gmail.com';
   const PASSWORD = '123123';

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

   

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         return navigate('/home');
      }
      return alert("No es el usuario")
   } 

   
   function logOut() {
      setAccess(false);
      navigate("/");
   }

   const [characters, setCharacters] = useState([])
   //console.log(characters)
   
   function onSearch(id) {
      //console.log(id)
        
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {  
      if (data.name) {
         const char = characters.find((ch) => ch.id === Number(id))
         if(char) return alert("El personaje ya existe")
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      
   }).catch(error => {
      if (error.response && error.response.status === 404) {
         window.alert('No hay personajes con ese ID!');
      } else {
         console.error('Error en la solicitud:', error);
      }
   });
   }

   useEffect(() => {
      !access  && navigate('/') ;
      
   }, [access]);


   function onClose(id) {
      const idBuscado = Number(id)
      //console.log(idBuscado)
      const notID = characters.filter(e => e.id !== idBuscado)
      setCharacters(notID)
   }

   const location = useLocation()
   
   return (
      <div className='App' >
         {/* {location.pathname !== "/" && location.pathname !== "/home" && location.pathname !== "/about" && location.pathname !== `/detail/${id}` ? <Error404 /> : null} */}
         
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAcces={setAccess} logOut={logOut}/>}
         <Routes>
            <Route path="/" element={<Form  login={login}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="*" element={<Error404/>} />
            <Route path="/favorites" element={<Favorites/>} />
         </Routes>
         
         
      </div>
   );
}

export default App;
