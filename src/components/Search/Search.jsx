import React, {useState,useEffect} from 'react'
import axios from 'axios'
import PokemonList from '../PokemonList/PokemonList'
import useDebounce from '../../hooks/useDebounce'




function Search() {
  const [input, setInput] = useState("")
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    setInput("")
  }, [pokemons])

  const debouncedSearchTerm = useDebounce(input, 2500);
  
  const searchPokemon= async (input)=>{
    const filterList= pokemons.filter((pokemon)=>{
    const  {name,id}=pokemon
    if(input==name||input==id){
      return pokemon
    }
    })
    console.log(filterList)
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
    <div><br/>
    <input type="text" name="input" id="input" onChange={handleChange} value={input}/>
    <br/><br/>
    <PokemonList list={pokemons}/>
    </div>
  )
}

export default Search

