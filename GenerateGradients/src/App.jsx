import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("liner");

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    const int = Math.floor(random);
    const hex = int.toString(16);
    let colorHexCode = "#" + "000000".substring(0, 6 - hex.length) + hex;
    return colorHexCode;
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="w-9/12 mx-auto space-y-8">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold">Gradient Generatior</h1>
          <div className="flex gap-4">
            <input
              value={num}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              placeholder="12"
              onChange={(e) => setNum(Number(e.target.value))}
            />
            <select
              value={type}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="liner">Liner</option>
              <option value="radial">Radial</option>
              <option value="conic">Conic</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div
            className="h-[180px] rounded-xl relative"
            style={{ background: getHexColorCode() }}
          >
            <button className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 text-xs py-1 px-2 ">
              Copy
            </button>
          </div>
        </div>
       


      </div>
    </div>
  );
};

export default App;
