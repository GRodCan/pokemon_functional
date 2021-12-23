import React from 'react'

function Details(info) {
  const {abilities,name,id,sprites,stats,types,moves}= info.pokemon
  const img= sprites.other["official-artwork"].front_default


  const printMoves=(moves)=>{
    return moves.map((move)=>{
      let moveLearn=move.version_group_details[0]
      return <li><h5>{move.move.name}:</h5> <p>Nivel necesario: {moveLearn.level_learned_at}</p> <p>Metodo de aprendizaje: {moveLearn.move_learn_method.name}</p></li>
  })}

  return (
    <div>
      <img src={img} alt="" />
      <h3>Nombre: {name}</h3>
      <p>Nº Pokedex: {id}</p>
      <p>{types.length<2?<>Tipo: </>:<>Tipos: </>}</p>
      <ul>{types.map((type)=><li>{type.type.name} </li>)}</ul>
      <p>Habilidades:</p>
      <ul>{abilities.map((ability)=><li>{ability.ability.name} </li>)}</ul>
      <p>Estadisticas:</p>
      <ul>{stats.map((stat)=><li>{stat.stat.name}: {stat.base_stat}</li>)}</ul>
      {moves?<><p>Ataques disponibles:</p><ol>{printMoves(moves)}</ol></>:null}
    </div>
  )
}

export default Details
