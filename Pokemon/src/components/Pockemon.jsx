import React, { useEffect, useState } from 'react'
import "../index.css"
import PockemonCards from "./PockemonCards"

const Pockemon = () => { 

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null)

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
            setLoading(false);
        } catch (error) {
            console.log("Some problem in api", error);
            setLoading(false)
            setError(error)
        }
    }
    useEffect(() => {
        fetchPockemon();
    }, []);

    // Shimer ui
    if(loading){
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        );
    }
    // error handeling
    if(error){
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }
  return (
    <section className="container">
        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>
        <div>
            <ul className='cards'>
                {
                    pokemon.map((curPokemon) => {
                        return <PockemonCards key={curPokemon.id} pokemonData={curPokemon} />
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Pockemon