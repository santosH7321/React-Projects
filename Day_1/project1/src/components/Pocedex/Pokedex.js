import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";


function Pokedex() {
    return (
        <div className="flex flex-col items-center text-2xl m-5 track">
        <h1 className="tracking-widest font-semibold ">Pokedex</h1>
        <Search />
        <PokemonList />
        
        </div>
    );
}

export default Pokedex;