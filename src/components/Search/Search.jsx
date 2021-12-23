import React, {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import PokemonList from '../PokemonList/PokemonList'
import useDebounce from '../../hooks/useDebounce'
import "./Search.css"

import { listContext } from '../../context/listContext'



function Search() {
  const [input, setInput] = useState("")
  const {pokemons, setPokemons} = useContext(listContext)

  useEffect(() => {
    setInput("")
  }, [pokemons])

  const debouncedSearchTerm = useDebounce(input, 1000);
  
  const searchPokemon= async (input)=>{
    const filterList= pokemons.filter((pokemon)=>{
    const  {name,id}=pokemon
    if(input==name||input==id){
      return pokemon
    }
    })
    if(filterList.length==0){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    let newList= pokemons.concat(response.data) 
    setPokemons(newList)}
    else{
      window.alert(`${filterList[0].name} ya en la lista`)}
  }
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchPokemon(debouncedSearchTerm)
      }
    },[debouncedSearchTerm]);

  const handleChange = event => setInput(event.target.value)
  
   

  return (
    <div id='search'>
      <h2>Introduce el pokemon (o el número de este en la pokedex) para añadir a tu lista:</h2>
    <input type="text" name="input" id="input" onChange={handleChange} value={input} placeholder='Ej. "bulbasaur" o "1"'/>
    </div>
  )
}

export default Search

