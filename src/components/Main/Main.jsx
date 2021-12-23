import React from 'react'
import { Route,Routes } from 'react-router-dom';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import Form from "../Form/Form"
import Details from '../Details/Details';
import useQuery from '../../hooks/useQuery';
import usePokemonID from '../../hooks/usePokemonID';
import "./Main.css"

function Main() {
  let query= useQuery();
  // console.log(usePokemonID(3))
  return (
    <main>
     <Routes>
                  <Route path="/" element={<PokemonList/>} exact />
                  <Route path="/new" element={<Form/>} />
                  <Route path="/search" element={<Search/>} />
                  <Route path="/pokemon" element={<Details pokemon={usePokemonID(query.get("id"))}/>} />
      </Routes>
    </main>
  )
}

export default Main;
