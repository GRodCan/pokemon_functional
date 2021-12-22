import React from 'react'
import Pokemon from './Pokemon/Pokemon'

function PokemonList({list}) {
  const paintPokemons = () => list.map((pokemon,i)=><Pokemon info={pokemon} key={i}/>)
  return (
    <div>
      {paintPokemons()}
    </div>
  )
}

export default PokemonList
