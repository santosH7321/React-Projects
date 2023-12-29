import React from 'react'
import Nav from './Controllers/Nav'
import About from './Components/About'
import Fotter from './Components/Fotter'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Home from './Components/Home'
const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Service />
      <Contact />
      <Fotter />
    </div>
  )
}

export default App