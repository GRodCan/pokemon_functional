import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';


import {listContext} from "./context/listContext"
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [pokemons, setPokemons] = useState([])

  return (<div className="App">
    <BrowserRouter>
    <listContext.Provider value={{pokemons, setPokemons}}>
    <Header/>
    <Main/>
    <Footer/>
    </listContext.Provider>
    </BrowserRouter>
    </div> 
  );
}

export default App;
