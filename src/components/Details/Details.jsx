import React from 'react'
import "./Details.css"

function Details(info) {
  const {abilities,name,id,sprites,stats,types,moves}= info.pokemon
  const img= sprites.other["official-artwork"].front_default


  const printMoves=(moves)=>{
    return moves.map((move,i)=>{
      let moveLearn=move.version_group_details[0]
      return <li key={i}><div className='move'><h4>{move.move.name}:</h4> <div><p>Nivel necesario: {moveLearn.level_learned_at}</p> <p>Metodo de aprendizaje: {moveLearn.move_learn_method.name}</p></div></div></li>
  })}

  return (
    <div id='details'>
      <img src={img} alt="Pokemon imagen" />
      <div id='details_general'>
      <h2>{name}</h2>
      <h3>Nº Pokedex: {id}</h3>
      <h3>{types.length<2?<>Tipo: </>:<>Tipos: </>}</h3>
      <ul>{types.map((type,i)=><li key={i}>{type.type.name} </li>)}</ul>
      </div>
      <div id="details_stats">
      <h3>Habilidades:</h3>
      <ul>{abilities.map((ability,i)=><li key={i}>{ability.ability.name} </li>)}</ul>
      <h3>Estadisticas:</h3>
      <ul>{stats.map((stat,i)=><li key={i}><b>{stat.stat.name}:</b> {stat.base_stat}</li>)}</ul>
      </div>
      <div id='details_moves'>{moves?<><h3>Ataques disponibles:</h3><ol id='details_moves_ol'>{printMoves(moves)}</ol></>:null}
    </div>
    </div>
  )
}

export default Details
