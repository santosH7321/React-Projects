import { useEffect, useState } from "react";

function PokemonList(){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log("Effect called")
    }, []);

   

    return (
        <>
            <div>
                X: {x} <button onClick={() => setX(x+1)}>Inc</button>
                
            </div>

            <div>
                Y: {y} <button onClick={() => setY(y+1)}>Inc</button>

            </div>
        
        
        </>
    )
}

export default PokemonList;