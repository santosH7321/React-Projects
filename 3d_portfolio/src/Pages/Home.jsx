import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"
const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */}

    <Canvas className="w-full h-screen relative"
    camera={{near: 0.1, far: 1000}}>

      <Suspense fallback={<Loader />}>
        <directionalLightShadow />
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight />
      </Suspense>
    </Canvas>

      
      
    </section>
  )
}

export default Home
