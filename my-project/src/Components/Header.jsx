
import React from 'react'

const Header = (props) => {
  return (
 <div>
    <div className='flex justify-around items-center px-6 py-3 bg-sky-600 '>
        <div className='flex justify-center items-center text-3xl font-bold text-white'>
            <h1>{props.Logo}</h1>
        </div>

        <div className=''>
            <ul className='flex justify-center gap-10 text-white font-bold  '>
                <li className='hover:text-green-400 cursor-pointer'>{props.Home}</li>
                <li className='hover:text-green-400 cursor-pointer'>{props.About}</li>
                <li className='hover:text-green-400 cursor-pointer'>{props.Blog}</li>
                <li className='hover:text-green-400 cursor-pointer'>{props.Contact}</li>
            </ul>
        </div>
    </div>
 </div>
  );
  
  
}

export default Header
