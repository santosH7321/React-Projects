import React from "react";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-salte-900 via-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div className="flex flex-col items-center w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10 gap-6">
        <img
          src="https://images.pexels.com/photos/17771457/pexels-photo-17771457.jpeg"
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">Avatar Generator</h1>
          <p className="text-slate-300">
            Generate unlimited Avatar for your website
          </p>
        </div>

        <div className="w-full space-y-4">
          <select className="bg-slate-900/60 w-full p-3 rounded-xl" name="">
            <option value="male">Male</option>
          </select>

          <div className="bg-slate-900/60 w-full p-3 rounded-xl mt-4 text-center text-slate-400">
            https://avatars.dicebear.com/api/
          </div>
        </div>

        <div className="flex w-full gap-4">
          <button className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rouunded-lg py-2 hover:scale-105 transition-transform rounded-lg">
            <i className="ri-arrow-right-up-line mr-1"></i>
            Change
          </button>
          <button className="flex-1 bg-gradient-to-r from-green-500 to-cyan-600 font-medium rouunded-lg py-2 hover:scale-105 transition-transform rounded-lg">
            <i className="ri-download-line mr-1"></i>
            Download
          </button>
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 font-medium rouunded-lg py-2 hover:scale-105 transition-transform rounded-lg">
            <i className="ri-file-copy-line mr-1"></i>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
