
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  

  return (
    <div className='w-full h-screen flex flex-col background items-center'>
      <h1 className=' bg-white rounded-md w-11/12 text-center text-3xl mt-10 p-3 font-bold'>RANDOM GIFS</h1>
      <div >
          <Random />
          <Tag />
      </div>
    </div>
  )
}

export default App
