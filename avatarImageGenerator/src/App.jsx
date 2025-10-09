import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import { ToastContainer, toast } from 'react-toastify';

const data = [
  {
    label: "Illustration",
    value: "illustration",
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed=",
  },
  {
    label: "Cartoon",
    value: "cartoon",
    url: "https://api.dicebear.com/7.x/adventurer/svg?seed=",
  },
  {
    label: "Sketchy",
    value: "sketchy",
    url: "https://api.dicebear.com/7.x/croodles/svg?seed=",
  },
  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/7.x/bottts/svg?seed=",
  },
  {
    label: "Art",
    value: "art",
    url: "https://api.dicebear/com/7.x/pixel-art/svg?seed=",
  },
  {
    label: "Male",
    value: "male",
    url: "https://randomuser.me/api/portraits/men",
  },
  {
    label: "Female",
    value: "female",
    url: "https://randomuser.me/api/portraits/women",
  },
];

const App = () => {
  const [src, setSrc] = useState(null);
  const [options, setOptions] = useState("male");

  const generate = () => {
    const obj = data.find((item) => item.value === options);
    const url = obj.url;
    if (options === "male" || options === "female") {
      const imageUrl = `${url}/${Math.floor(Math.random() * 99)+1}.jpg`;
      setSrc(imageUrl);
    } else {
      const uniqeValue = Date.now();
      const imageUrl = `${url}${uniqeValue}.svg`;
      setSrc(imageUrl);
    }
  };

  const onOptionChange = (e) => {
    const value = e.target.value;
    setOptions(value);
  };

  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const copy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("Image URL copied to clipboard!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    generate();
  }, [options]);

  return (
    <div className="animate__animated animate__fadeIn overflow-hidden min-h-screen bg-gradient-to-br from-salte-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div className="animate__animated animate__bounceIn animate-faster flex flex-col items-center w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10 gap-6">
        <img
          src={src || "https://api.dicebear.com/7.x/avataaars/svg?seed=example"}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">Avatar Generator</h1>
          <p className="text-slate-300">
            Generate unlimited Avatar for your website
          </p>
        </div>

        <div className="w-full space-y-4">
          <select
            className="bg-slate-900/60 w-full p-3 rounded-xl"
            value={options}
            onChange={onOptionChange}
          >
            {data.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <div className="bg-slate-900/60 w-full p-3 rounded-xl mt-4 text-center text-slate-400">
            {src}
          </div>
        </div>

        <div className="flex w-full gap-4">
          <button onClick={generate} className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rouunded-lg py-2 hover:scale-105 transition-transform rounded-lg cursor-pointer">
            <i className="ri-arrow-right-up-line mr-1"></i>
            Change
          </button>
          <button onClick={()=>download(src)} className="flex-1 bg-gradient-to-r from-green-500 to-cyan-600 font-medium rouunded-lg py-2 hover:scale-105 transition-transform rounded-lg">
            <i className="ri-download-line mr-1"></i>
            Download
          </button>
          <button onClick={() => copy(src)} className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 font-medium rouunded-lg py-2 hover:scale-105 transition-transform rounded-lg">
            <i className="ri-file-copy-line mr-1"></i>
            Copy
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
