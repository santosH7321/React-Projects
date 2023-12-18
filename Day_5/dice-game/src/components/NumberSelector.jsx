import { useState } from "react";


const NumberSelector = () => {
    const arrNumber = [1,2,3,4,5,6];

    const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div>
      {arrNumber.map((value, i) => {
        <div>
          isSelected = {value === selectedNumber}
          key = {i}
          onClick={() => setSelectedNumber(value)}
          {value}
        </div>
      })}
        <div className="flex py-10">
        
        </div>
    </div>
  );
}

export default NumberSelector