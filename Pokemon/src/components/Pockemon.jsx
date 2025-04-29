import React, { useEffect, useState } from "react";
import "../index.css";
import PockemonCards from "./PockemonCards";

const Pockemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=150";

  const fetchPockemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses)
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log("Some problem in api", error);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPockemon();
  }, []);

  // search functionality
  const searchData = pokemon.filter((curPokemon) => {
    return curPokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  // Shimer ui
  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  // error handeling
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((curPokemon) => {
            return (
              <PockemonCards key={curPokemon.id} pokemonData={curPokemon} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pockemon;
