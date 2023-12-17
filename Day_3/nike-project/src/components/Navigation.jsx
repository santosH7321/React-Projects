// import React from "react";
import brandImage from '../assets/brand_logo.png';
function Navigation(){

    
    return(
        <div className="p-3  bg-gray-100">
            <nav className="flex justify-evenly items-center ">
                <div>
                    <img src={brandImage} alt="logo" />
                </div>

            
                    <ul className="flex justify-between gap-x-8 text-xl font-semibold ">
                        <li href="#" className='cursor-pointer hover:text-blue-500'
                        >Home</li>
                        <li href="/Manu" className='cursor-pointer hover:text-blue-500'>Menu</li>
                        <li href="/Location" className='cursor-pointer hover:text-blue-500'>Location</li>
                        <li href="/About" className='cursor-pointer hover:text-blue-500'>About</li>
                        <li href="/Contact" className='cursor-pointer hover:text-blue-500' >Contact</li>
                    </ul>

                <button className="p-2 px-6 bg-red-600 text-xl font-semibold rounded text-white drop-shadow-2xl hover:bg-red-800 ">Login</button>
            </nav>
        </div>
    );
}

export default Navigation;