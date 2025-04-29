import React from "react";

const PockemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{pokemonData.types.map((curType) => curType.type.name).join(", ")}</p>
      </div>
    </li>
  );
};

export default PockemonCards;
