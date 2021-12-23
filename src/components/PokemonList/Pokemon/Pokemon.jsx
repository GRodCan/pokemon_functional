import React from 'react'
import "./Pokemon.css"

const Pokemon=({info})=>{
  const {abilities,name,id,sprites,stats,types}= info
  const img= sprites.front_default

  return (
    <div className='cardPokemon'>
      <img src={img} alt="avatar pokemon" className='avatar_img' />
      <div className='infoPokemon'>
        <div><h3>{name}</h3>
        <h4>Nº Pokedex: <br/> {id}</h4></div>
        <div><h4>{types.length<2?<>Tipo:</>:<>Tipos:</>}</h4>
        <ul>{types.map((type,i)=><li key={i}>{type.type.name} </li>)}</ul></div>
        <div><h4>Habilidades:</h4>
        <ul>{abilities.map((ability,i)=><li key={i}>{ability.ability.name}</li>)}</ul></div>
        <div><h4>Estadisticas:</h4>
        <ul>{stats.map((stat,i)=><li key={i}><b>{stat.stat.name}:</b> {stat.base_stat}</li>)}</ul></div>
      </div>
      </div>
  )
}

export default Pokemon

