import { useState } from "react";

const TopMenuBar = () => {
    const [count, setCount ] = useState(0);
  return (
    <div>
        <div className="discription"></div>
        <div className="button flex gap-10">
            <button onClick={()=> {
                setCount(count - 1);
                console.log(count);
            }}>Prev</button>
            <button onClick={()=> {
                setCount(count + 1);
                console.log(count);
            }}>Next</button>
        </div>
        <div className="apiData"></div>
    </div>
  );
};

export default TopMenuBar;
