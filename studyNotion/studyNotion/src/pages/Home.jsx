import { LuSendHorizonal } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
const Home = ({isLoggedIn}) => {
  return (
    <div className=' text-white py-20'>
      <div className="flex justify-evenly items-center">
        <div>
          <ul className="flex flex-col gap-5 text-2xl text-sky-600 list-none">
            <li><a href="#"><FaLinkedinIn /></a></li>
            <li><a href="#"><FiGithub /></a></li>
            <li><a href="#"><FaXTwitter/></a></li>
            <li><a href="#"><IoLogoInstagram/></a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-5xl font-bold">Hey, I'm <span className="text-blue-600 font-serif">Santosh</span></h1>
          <p className="text-xl text-gray-400 font-semibold ">I am a <span></span>Developer</p>
          <p className="text-xl font-serif ">Building Software to solve real life <br /> problems</p>
          <button className="flex justify-center px-6 py-3 w-fit bg-[#5A43CB] font-medium rounded-md hover:bg-purple-500">
            Contact Me <LuSendHorizonal className="m-1"/></button>
        </div>
        <div>
          <img className="h-[300px] w-[310px]" src="https://images.pexels.com/photos/17771509/pexels-photo-17771509/free-photo-of-santosh7321.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Home
