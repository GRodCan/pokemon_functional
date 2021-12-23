import React, { useContext } from 'react'
import Pokemon from './Pokemon/Pokemon'
import { listContext } from '../../context/listContext'
import { Link } from 'react-router-dom'
import "./PokemonList.css"

function PokemonList() {
  const {pokemons} = useContext(listContext)
  const paintPokemons = () => pokemons.map((pokemon,i)=><Link to={`/pokemon/${pokemon.id}?id=${pokemon.id}`} ><Pokemon info={pokemon} key={i}/></Link>)
  return (
    <div id='pokemons'>
      <h2>Lista de Pokemons:</h2>
      {paintPokemons()}
    </div>
  )
}

export default PokemonList
