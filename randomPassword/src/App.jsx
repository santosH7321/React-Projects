import { useState, useCallback, useEffect } from "react";
import "./App.css";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
    ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="flex shadow rounded-lg overflow-hidden mb-6 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 ">
              <input type="range" 
              min={5}
              max={20}
              onChange={(e) => {setLength(e.target.value)}}
              value={length}
              className="cursor-pointer"
              />
              <label>Length: {length}</label>
          </div>
          {/* second input */}
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={() => {
              setNumberAllowed((prev) => !prev);
             }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* third cha */}
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox"
             defaultChecked={charAllowed}
             id="charInput"
             onChange={() => {
              setCharAllowed((prev) => !prev);
             }}
             />
             <label htmlFor="charInput">Char</label>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
