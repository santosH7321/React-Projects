import Astronaut from '../assets/astronaut.png';

const Hero = () => {
  return (
    <div className='m-[120px]'>
        <div className='flex justify-around items-center '>
            <div className='w-[100%] animate-bounce'>
                <img src={Astronaut} alt="" />
            </div>

            <div className='text-white ml-20 p-3 border-4 border-white pl-10 rounded-2xl shadow-2xl '>
                <h1 className='text-4xl font-bold py-2'>SPACEX</h1>
                <p className='tracking-widest pr-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum explicabo illum ducimus ipsam nostrum nesciunt nobis! Molestiae, molestias aliquam. Hic?</p>
                <button className='font-bold text-xl p-2 px-10 bg-white text-black rounded-lg my-3'>Join Us</button>
            </div>
        </div>
    </div>
  )
}

export default Hero