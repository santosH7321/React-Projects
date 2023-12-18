
import { useState } from "react"

const Counter = () => {
    const [x, setX] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center mt-10">
        <div className="p-5 bg-gray-900 px-[100px] py-[100px] rounded-md border-y-8 border-indigo-700">
        <div className="text-6xl font-bold text-white ">
        Count:  {x}
        </div>
       
       <div className="flex gap-10  py-10 text-xl font-semibold text-white select-none">
       <button className="p-2 px-10 bg-red-600 rounded " onClick={() => setX(x+1)}>Inc</button>
        <button className="p-2 px-10 bg-red-600 rounded " onClick={() => setX(x-1)}>Dec</button>
       </div>
        </div>
      
        
    </div>
  )
}

export default Counter
