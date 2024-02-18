"use client"
import axios from 'axios'
import { Container } from 'postcss'
import { useState } from 'react'
import React from 'react'

const page = () => {

  const [Images, setImages] = useState([]);

  const getImages = async () => {
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images);
      
    } catch (error){
        console.log("Error Fetching Images");
    }
  }

  return (
    <div>
      <div>
      <button onClick={getImages} className='px-5 py-2 font-bold text-xl text-white bg-green-500 rounded m-20 '>Get Images</button>
      </div>
      

      <div className='p-10'>
          {Images.map((elem,i) => {
            return <img 
            key={i}
            src={elem.download_url}
            width={300}
            height={300}
            className='m-10 rounded inline-block'
            
            />
          })}
      </div>
    </div>
  )
}

export default page
