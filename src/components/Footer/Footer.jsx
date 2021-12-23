import React, { useContext } from 'react'
import { listContext } from '../../context/listContext'
import "./Footer.css"

function Footer() {
  const {pokemons} = useContext(listContext)
  return (
    <footer>
    {pokemons.length>0?<><p>Lista actual:</p><p>{pokemons.map((pokemon,i)=><> {i+1}. {pokemon.name}{(i+1)==pokemons.length?<>.</>:<>,</>} </>)}</p></>:<p>Lista vacía</p>}
    </footer>
  )
}

export default Footer

