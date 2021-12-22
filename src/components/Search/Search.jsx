import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Pokemon from './Pokemon/Pokemon'




function Search() {
  const [input, setInput] = useState("")
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    setInput("")
  }, [pokemons])
  
  const handleChange = event => setInput(event.target.value)
  
  const searchPokemon= async (input)=>{
    if(input){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    let newList= pokemons.concat(response.data) 
    setPokemons(newList)}
    else{window.alert("Introduce parámetro de búsqueda")}
  }

  const paintPokemons = () => pokemons.map((pokemon,i)=><Pokemon info={pokemon} key={i}/>)   

  return (
    <div><br/>
    <input type="text" name="input" id="input" onChange={handleChange} value={input}/>
    <button onClick={()=>searchPokemon(input)}>Search</button>
    <br/><br/>
    {paintPokemons()}
    </div>
  )
}

export default Search

