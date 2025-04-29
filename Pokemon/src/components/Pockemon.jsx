import React, { useEffect, useState } from 'react'
import "../index.css"

const Pockemon = () => { 

    const [pokemon, setPokemon] = useState([]); 

    const API = "https://pokeapi.co/api/v2/pokemon?limit=150";

    const fetchPockemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);

            const detailedPokemonData = data.results.map( async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            })
        

            const detailedResponses = await Promise.all(detailedPokemonData);
            console.log(detailedResponses)
            setPokemon(detailedResponses);
        } catch (error) {
            console.log("Some problem in api", error)
        }
    }
    useEffect(() => {
        fetchPockemon();
    }, []);
  return (
    <div className='flex items-center text-5xl font-bold'>Pockemon</div>
  )
}

export default Pockemon