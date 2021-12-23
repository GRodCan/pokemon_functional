import React, { useContext } from 'react'
import { listContext } from '../../context/listContext'
import "./Footer.css"

function Footer() {
  const {pokemons} = useContext(listContext)
  return (
    <footer>
    {pokemons.length>0?<><p>Lista actual:</p>
    <ol>
    {pokemons.map((pokemon,i)=><li key={i}>{pokemon.name}</li>)}
    </ol></>
    :<p>Lista vacía</p>}
    </footer>
  )
}

export default Footer

