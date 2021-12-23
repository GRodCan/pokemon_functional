import { listContext } from "../context/listContext";
import { useContext } from "react";

export default function usePokemonID(queryID) {
  const {pokemons} = useContext(listContext)
  if(queryID){
  const filterList= pokemons.filter((pokemon)=>{
        const  {id}=pokemon
        if(queryID==id){
          return pokemon
        }
        })
  return filterList[0];}
}