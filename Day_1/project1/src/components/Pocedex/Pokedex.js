import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";


function Pokedex() {
    return (
        <div className="flex flex-col items-center text-2xl m-5 track">
        <h1 className="tracking-widest font-semibold bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 p-3 px-10 rounded-lg hover:from-pink-500 hover:to-yellow-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
        cursor-pointer animate-bounce ">
            POKEDEX
            
        </h1>
        <Search />
        <PokemonList />
        
        </div>
    );
}

export default Pokedex;