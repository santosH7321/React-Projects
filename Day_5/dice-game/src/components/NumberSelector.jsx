import { useState } from "react";


const NumberSelector = () => {

    const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div>
        <div className="flex py-10">
            <p className="h-[72px] w-[72px] border-4 border-black text-5xl font-bold flex justify-center ">1</p>
            <p className="h-[72px] w-[72px] border-4 border-black text-5xl font-bold flex justify-center ">2</p>
            <p className="h-[72px] w-[72px] border-4 border-black text-5xl font-bold flex justify-center ">3</p>
            <p className="h-[72px] w-[72px] border-4 border-black text-5xl font-bold flex justify-center ">4</p>
            <p className="h-[72px] w-[72px] border-4 border-black text-5xl font-bold flex justify-center ">5</p>
            <p className="h-[72px] w-[72px] border-4 border-black text-5xl font-bold flex justify-center ">6</p>
        </div>
    </div>
  );
}

export default NumberSelector