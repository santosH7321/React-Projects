"use client"

import React, { useState } from "react"
import { render } from "react-dom"
const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  }

  let renderTask = <h2>No Task Available</h2>

if(mainTask.length > 0){
  renderTask = mainTask.map((t,i) => {
    return( 
      <li>
        <div className="flex justify-between mb-5">
        <h5 className="text-2xl font-semibold ">{t.title}</h5>
        <h6 className="text-xl font-semibold ">{t.desc}</h6>
        </div>
      </li>
    )
});
}
  return (
    <>
      <h1 className='flex justify-center items-center text-5xl bg-sky-500 px-5 py-3 text-white font-bold '>Santosh Todo list</h1>

      <form onSubmit={submitHandler}>
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

      <hr />

      <div className="p-8 bg-slate-200">
         <ul>
          {renderTask}
         </ul>
      </div>
    </>
  )
}

export default page
