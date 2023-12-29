"use client"
import React from "react";
import { useState } from "react";

const page = () => {
  const [username, setusername] = useState("")
  return (
    <>
    {/* To way binding in rea */}
      <h1 className="text-2xl font-bold py-3 ">Enter your name: </h1>
      <from>
        <input
          type="text"
          className="border-2 border-zinc-800 px-4 py-2 text-black text-xl" value={username}
          onChange={(e) => {
            setusername(e.target.value)
            console.log(username)
          }}
        />
      </from>
    </>
  );
};

export default page;
