import React, { useContext } from 'react'
import Pokemon from './Pokemon/Pokemon'
import { listContext } from '../../context/listContext'
import { Link } from 'react-router-dom'
import pokedex from "../../assets/images/pokedex.png"
import "./PokemonList.css"

function PokemonList() {
  const {pokemons} = useContext(listContext)
  const paintPokemons = () => pokemons.map((pokemon,i)=><Link to={`/pokemon?id=${pokemon.id}`} key={i} ><Pokemon info={pokemon} key={i}/></Link>)
  return (
    <div id='pokemons'>
      {pokemons.length>0?<>
      <h2>Lista de Pokemons:</h2><div id='list'>
      {paintPokemons()}</div></>:<>
      <h2>Tu lista está vacía</h2>
      <img src={pokedex} alt="Pokedex vacia" id='pokedex' />
      </>
      }
    </div>
  )
}

export default PokemonList
