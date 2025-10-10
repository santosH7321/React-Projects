import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "remixicon/fonts/remixicon.css";
const API_KEY = import.meta.env.VITE_PEXEL_IMAGE_API_KEY;

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("people");

  const fetchImages = async () => {
    try {
      setLoading(true);
      const options = {
        headers: {
          Authorization: API_KEY,
        },
      };
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`,
        options
      );


      setPhotos((prev) => [...prev, ...response.data.photos]);
    } catch (error) {
      toast.error("Something went wrong while fetching images");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  }

  const search = (e) => {
    e.preventDefault();
    const q = e.target[0].value.trim();
    setPhotos([]);
    setQuery(q);
  }

  useEffect(() => {
    fetchImages();
  }, [page, query]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8 gap-12">
      <h1 className="text-4xl font-bold text-indigo-600">📷 Image Galery</h1>

      <form onSubmit={search} className="space-x-4 ">
        <input
          type="text"
          className=" p-3 bg-white rounded-l-lg w-[400px] focus:outline-indigo-600"
          placeholder="Search image here"
          required
        />
        <button className="bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-r-lg hover:scale-105 transition-transform cursor-pointer">
          Search
        </button>
      </form>

      <div className="grid lg:grid-cols-4 lg:gap-12 gap-8 w-9/12">
      {
        photos.length === 0 && (
          <h1 className="text-2xl flex justify-center font-semibold text-gray-600">No images found</h1>
        )      
      }
     
      
        {photos.map((item, index) => (
          <div key={index} className="bg-gray-300 rounded-xl">
            <img
              src={item.src.medium}
              alt={item.alt}
              className="rounded-t-lg h-[180px] object-cover w-full hover:scale-110 transition-transform duration-300"
            />

            <div className="p-3">
              <h1 className="text-lg text-gray-600 font-medium capitalize">{item.photographer}</h1>
              <a target="_blank" href={item.src.original} className="mt-2 block bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600 text-white font-bold text-center py-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                <i className="ri-download-line mr-1">Download</i>
              </a>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <i className="ri-loader-line text-6xl text-indigo-600 animate-spin"></i>
      )}

      {
        photos.length > 0 && (<button onClick={loadMore} className="bg-rose-500 py-3 px-16 rounded-lg font-medium text-white hover:scale-110 transition-transform duration-300">Load more</button>)
      }
      <ToastContainer />
    </div>
  );
};

export default App;
