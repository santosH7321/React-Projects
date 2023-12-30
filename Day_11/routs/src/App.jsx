
// import Nav from './Controllers/Nav'
import About from './Components/About'
import Fotter from './Components/Fotter'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/fotter' element={<Fotter />} />
      
      {/* <About/> */}
      {/* <Service /> */}
      {/* <Contact /> */}
      {/* <Fotter /> */}
    </Routes>
  
   
  )
}

export default App