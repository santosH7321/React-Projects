"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const page = () => {
const [users, setusers] = useState([])
const  getUsers = async() => {
    const {data} =  await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
  } 

  return (
    <div>
      <button className='text-2xl px-6 py-3 bg-green-700 text-white m-10 rounded font-bold' onClick={getUsers}>Get Data</button>

      <div className='p-8 bg-gray-900 mt-5 '>
        <ul>
        {users.map((e) => {
          return <li>{e.username} --- <Link
          href={""}>
            Explore
          </Link></li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default page
