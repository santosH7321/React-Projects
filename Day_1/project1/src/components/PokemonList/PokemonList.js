import { useEffect, useState } from "react";
import axios from 'axios';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoadings, setIsLoading] = useState(true);



    async function downloadPokemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        
        const  pokemonResults = response.data.results;

       const pokemonResultsPromise =  pokemonResults.map((pokemon) => axios.get(pokemon.url));

    //    const pokemonData = await axios.all();

       console.log(pokemonResultsPromise);
        setIsLoading(false);
    }

    useEffect(() => {
            downloadPokemons();
    }, []);

   

    return (
            <div>
                <div>Pokemon List</div>
                {{isLoadings} ? ' Loading....' : 'Data downloading'}
            </div>
        
        
    )
}

export default PokemonList;