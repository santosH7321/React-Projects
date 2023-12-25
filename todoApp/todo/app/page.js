"use client"

import React, { useState } from "react"
const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
      <h1 className='flex justify-center items-center text-5xl bg-sky-500 px-5 py-3 text-white font-bold '>Santosh Todo list</h1>

      <form>
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 ' placeholder='Enter Title here' 
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}/>
      
        <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 ' placeholder='Enter Description here' 
         value={desc}
         onChange={(e) => {
           setdesc(e.target.value)
         }}/>

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '>Add Task</button>

      </form>
    </>
  )
}

export default page
