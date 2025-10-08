import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradient, setGradient] = useState([]);

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    const int = Math.floor(random);
    const hex = int.toString(16);
    let colorHexCode = "#" + "000000".substring(0, 6 - hex.length) + hex;
    return colorHexCode;
  };

  const generateGradient = () => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`;
      
      if (type === "linear") {
        colors.push({
        gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`,
        css: `background: 'linear-gradient(${degreeString}, ${color1}, ${color2});'`,
      })
      } else if (type === "radial") {
        colors.push({
        gradient: `radial-gradient(circle, ${color1}, ${color2})`,
        css: `background: 'radial-gradient(circle, ${color1}, ${color2});'`,
      })
      } else {
        colors.push({
        gradient: `conic-gradient(${degreeString}, ${color1}, ${color2})`,
        css: `background: 'conic-gradient(${degreeString}, ${color1}, ${color2});'`,
      })
      }
      setGradient(colors);
    }
  };

  const onCopy = (css) => {
    navigator.clipboard.writeText(css);
    toast.success("CSS Copied Successfully!", {position: "top-center"});
  }

  useEffect(() => {
    generateGradient();
  }, [num, type]);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="w-9/12 mx-auto space-y-8">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold">🎨 Gradient Generatior</h1>
          <div className="flex gap-4">
            <input
              value={num}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              placeholder="12"
              onChange={(e) => setNum(Number(e.target.value))}
            />
            <select
              value={type}
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2 cursor-pointer"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
              <option value="conic">Conic</option>
            </select>

            <button className="px-16 py-2 bg-rose-500 text-white rountded font-medium cursor-pointer" onClick={() => {generateGradient()}}>Generate</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {gradient.map((item, index) => (
            <div
              key={index}
              className="h-[180px] rounded-xl relative"
              style={{ background: item.gradient }}
            >
              <button onClick={() => onCopy(item.css)} className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 text-xs py-1 px-2 ">
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
