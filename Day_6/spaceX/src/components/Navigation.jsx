


const Navigation = () => {
  return (
    <div>
        <div className="flex justify-around items-center p-4 bg-gray-800 opacity-90 text-white font-bold">
            <div className='flex text-2xl font-bold '>
                <h1>SpaceX</h1>
            </div>

            <div>
                <ul className="flex gap-20 font-bold ">
                    <li className='tracking-widest cursor-pointer hover:text-sky-600 max-md:hidden '>Home</li>
                    <li className='tracking-widest cursor-pointer hover:text-sky-600 max-md:hidden '>Missions</li>
                    <li className='tracking-widest cursor-pointer hover:text-sky-600 max-md:hidden '>About</li>
                    <li className='tracking-widest cursor-pointer hover:text-sky-600 max-md:hidden '>Contact Us</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navigation