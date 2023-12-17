
import { useState } from 'react'
import './App.css'
import DiceStart from './components/DiceStart'
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted ((prev) => !prev);
  };
  return (
   <div>
    {
      isGameStarted ? <GamePlay /> : <DiceStart 
      toggle={toggleGamePlay} />
    }
    
   </div>
  )
}

export default App
