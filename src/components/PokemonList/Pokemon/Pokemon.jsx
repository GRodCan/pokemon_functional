import React from 'react'

const Pokemon=({info})=>{
  
  const {abilities,name,order,sprites,stats,types}= info
  const img= sprites.other["official-artwork"].front_default

  return (
    <div>
      <img src={img} alt="" />
      <h3>Nombre: {name}</h3>
      <p>Nº Pokedex: {order}</p>
      <p>{types.length<2?<>Tipo: </>:<>Tipos: </>}</p>
      <ul>{types.map((type)=><li>{type.type.name} </li>)}</ul>
      <p>Habilidades:</p>
      <ul>{abilities.map((ability)=><li>{ability.ability.name} </li>)}</ul>
      <p>Estadisticas:</p>
      <ul>{stats.map((stat)=><li>{stat.stat.name}: {stat.base_stat}</li>)}</ul>
    </div>
  )
}

export default Pokemon

