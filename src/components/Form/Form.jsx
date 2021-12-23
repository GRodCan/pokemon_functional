import React, {useContext} from 'react'
import { listContext } from '../../context/listContext';
import { useForm } from "react-hook-form";


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {pokemons, setPokemons} = useContext(listContext)
  const onSubmit = data =>{ 
    let newList= pokemons.concat(data)
    setPokemons(newList)
    ;
}
  
  // const {abilities,name,id,sprites,stats,types,moves}= info.pokemon
  // const img= sprites.other["official-artwork"].front_default
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre: <input type="text" name="name" id="name" required minLength={3} {...register("name")}/></label>
      <label htmlFor="id">Nº Pokedex: <input type="number" name="id" id="id" required min={899} placeholder='Min. 899' {...register("id")}/></label>
      <label htmlFor="avatar_url">Url Avatar: <input type="url" name="avatar_url" id="avatar_url" required {...register("sprites.front_default")}/></label>
      <label htmlFor="pokemon_url">Url imagen real: <input type="url" name="pokemon_url" id="pokemon_url" required {...register('sprites.other.official-artwork.front_default')}/></label>
      <label htmlFor="type1"> 1º Tipo
        <select name="type1" required {...register("types[0].type.name")}>
        <option value="Acero">Acero</option> 
        <option value="Agua">Agua</option> 
        <option value="Bicho">Bicho</option>
        <option value="Dragón">Dragón</option> 
        <option value="Fantasma">Fantasma</option> 
        <option value="Eléctrico">Eléctrico</option>
        <option value="Fuego">Fuego</option> 
        <option value="Hada">Hada</option> 
        <option value="Hielo">Hielo</option>
        <option value="Lucha">Lucha</option> 
        <option value="Normal">Normal</option> 
        <option value="Planta">Planta</option>
        <option value="Psíquico">Psíquico</option> 
        <option value="Roca">Roca</option> 
        <option value="Siniestro">Siniestro</option>
        <option value="Tierra">Tierra</option> 
        <option value="Veneno">Veneno</option> 
        <option value="Volador">Volador</option>
        <option value="Programador">Programador</option>
        </select>
      </label>
      <label htmlFor="type2"> 2º Tipo:
      <select name="type2" {...register("types[1].type.name")}>
        <option value=""></option>  
        <option value="Acero">Acero</option> 
        <option value="Agua">Agua</option> 
        <option value="Bicho">Bicho</option>
        <option value="Dragón">Dragón</option> 
        <option value="Fantasma">Fantasma</option> 
        <option value="Eléctrico">Eléctrico</option>
        <option value="Fuego">Fuego</option> 
        <option value="Hada">Hada</option> 
        <option value="Hielo">Hielo</option>
        <option value="Lucha">Lucha</option> 
        <option value="Normal">Normal</option> 
        <option value="Planta">Planta</option>
        <option value="Psíquico">Psíquico</option> 
        <option value="Roca">Roca</option> 
        <option value="Siniestro">Siniestro</option>
        <option value="Tierra">Tierra</option> 
        <option value="Veneno">Veneno</option> 
        <option value="Volador">Volador</option>
        <option value="Programador">Programador</option>
      </select>
      </label>

      <label htmlFor="ability1">Habilidad 1: <input type="text" name="ability1" id="ability1" minLength={3} {...register("abilities[0].ability.name")}/></label>
      <label htmlFor="ability2">Habilidad 2: <input type="text" name="ability2" id="ability2" minLength={3} {...register("abilities[1].ability.name")}/></label>

      <p>Estadísticas:</p>
      <label value="hp" {...register("stats[0].stat.name")}>Hp:<input type="hidden" value="hp"/></label>
      <input type="range" name="hp" id="hp" min={0} max={100} {...register("stats[0].base_stat")}/>

      <label htmlFor="attack"{...register("stats[1].stat.name")}>Ataque:<input type="hidden" value="attack" /></label>
      <input type="range" name="attack" id="attack" min={0} max={100} {...register("stats[1].base_stat")}/>

      <label htmlFor="defense" {...register("stats[2].stat.name")}>Defensa:<input type="hidden" value="defense"/></label>
      <input type="range" name="defense" id="defense" min={0} max={100} {...register("stats[2].base_stat")}/>

      <label htmlFor="special-attack" {...register("stats[3].stat.name")}>Ataque especial:<input type="hidden" value="special-attack"/></label>
      <input type="range" name="special-attack" id="special-attack" min={0} max={100} {...register("stats[3].base_stat")}/>

      <label htmlFor="special-defense"{...register("stats[4].stat.name")}>Defensa especial:<input type="hidden" value="special-defense"/></label>
      <input type="range" name="special-defense" id="special-defense" min={0} max={100}{...register("stats[4].base_stat")}/>

      <label htmlFor="speed"{...register("stats[5].stat.name")}>Velocidad: <input type="hidden" value="speed"/></label>
      <input type="range" name="speed" id="speed" min={0} max={100} {...register("stats[5].base_stat")}/>
      
      <input type="submit"/>
    </form>
  )
}
