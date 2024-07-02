import About from "./components/About"
import Eye from "./components/Eye"
import Feature from "./components/Feature"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Feature />
    </div>
  )
}

export default App
