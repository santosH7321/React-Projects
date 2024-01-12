import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
// let myObj = {
//   userName: "Santosh",
//   age: 21,

// }

  return (
    <>
      <div>
        <Card  userName = "Santosh"/>
        <Card  userName = "Santosh Kumar"/>
      </div>
    </>
  )
}

export default App
