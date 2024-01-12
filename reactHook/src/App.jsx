import { useState } from 'react'
import './App.css'

function App() {
 
  let [count, setCount] = useState(10)

  function addCountervalue(){
      setCount(count + 1);
  }
  function removeCounterValue(){
    setCount(count - 1);
  }

  return (
    <div>
     <h1>Counter Value: {count}</h1>
     <button onClick={addCountervalue} >Add Value</button>
     <button onClick={removeCounterValue}>Remove Value</button>

    </div>
  )
}

export default App
