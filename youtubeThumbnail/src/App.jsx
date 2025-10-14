import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import getYouTubeID from 'get-youtube-id'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const urlModel = [
    {
      width: 120,
      height: 90,
      url: 'https://img.youtube.com/vi/',
      filename: 'default.jpg'
    },
    {
      width: 320,
      height: 180,
      url: 'https://img.youtube.com/vi/',
      filename: 'mqdefault.jpg'
    },
    {
      width: 480,
      height: 360,
      url: 'https://img.youtube.com/vi/',
      filename: 'hqdefault.jpg'
    },
    {
      width: 640,
      height: 480,
      url: 'https://img.youtube.com/vi/',
      filename: 'sddefault.jpg'
    },
    {
      width: 1280,
      height: 720,
      url: 'https://img.youtube.com/vi/',
      filename: 'maxresdefault.jpg'
    },
  ]
  const [url, setUrl] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  const fetchThumbnail = (e) => {
    e.preventDefault();
    const videoId = getYouTubeID(url);
    if(videoId) {
      const model = urlModel.map((item) => {
        return {
          ...item,
          url: `${item.url}${videoId}/${item.filename}`
        }
      })
      setThumbnails(model);
      toast.success("Thumbnail fetched successfully")
    } else {
      toast.error("Please enter a valid youtube video url")
    }
  }
  return (
    <div className='min-h-screen bg-gray-200 py-8'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Youtube Thumbnail Download</h1>

        <form className='space-x-4 mt-8' onSubmit={fetchThumbnail}>
          <input 
            type='url'
            className='bg-white p-3 rounded-lg w-[450px]'
            required
            placeholder='Enter youtube video url'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className='p-3 rounded-lg bg-indigo-600 text-white font-medium'>
            <i className='ri-search-line mr-1'></i>
            Search
          </button>
        </form>
      </div>

      <div className='mt-12 grid grid-cols-3 gap-12 w-10/12 mx-auto'>
        {
          thumbnails.map ((item, index) => (
             <div className='bg-white rounded-lg' key={index}>
              <img src={item.url} className='w-full h-[250px] object-cover rounded-t-xl' alt="" />
              <div className='p-3 bg-white rounded-b-xl'>
                <h1 className='text-xl font-medium'>{item.width}x{item.height}</h1>
                <a href={item.url} target='_blank'>
                  <button className='mt-3 py-2 px-4 rounded-lg bg-green-600 text-white font-medium'>
                  <i className='ri-download-line mr-1'></i>
                  Download
                  </button>
                </a>
                
              </div>
             </div>
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default App