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
                        <li href="#" className='cursor-pointer'>Menu</li>
                        <li href="#" className='cursor-pointer'>Location</li>
                        <li href="#" className='cursor-pointer'>About</li>
                        <li href="#" className='cursor-pointer'>Contact</li>
                    </ul>

                <button className="p-2 px-6 bg-red-600 text-xl font-semibold rounded text-white">Login</button>
            </nav>
        </div>
    );
}

export default Navigation;