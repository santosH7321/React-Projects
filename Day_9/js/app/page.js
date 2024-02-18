
"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
  const [marks, setmarks] = useState(80)
  const [gretting, setgretting] = useState("Hello Namaste jee");
  return (
    <>
      <h1 className='text-2xl font-bold text-sky-600 '>My marks is {marks}</h1>
      <button onClick={() => {
        setmarks(50)
      }} className='px-5 py-2 bg-black rounded text-white font-bold m-5 '>Update</button>


      <h1 className='text-2xl font-bold text-sky-600 '>{gretting}</h1>
      <button onClick={() => {
        setgretting("Kaise hai aap")
      }} className='px-5 py-2 bg-black rounded text-white font-bold m-5 '>Update</button>

      <Headers />
    </>
  );
}

export default page
