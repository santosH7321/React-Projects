import logo from '../assets/brand_logo.png';

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center p-3 bg-slate-300'> 
        <div className='ml-10'>
            <img src={logo} alt="" />
        </div>
        <ul className='flex justify-center items-center gap-20 mr-10 text-xl font-semibold'>
            <li className='cursor-pointer hover:text-gray-700'>Home</li>
            <li className='cursor-pointer hover:text-gray-700'>About</li>
            <li className='cursor-pointer hover:text-gray-700'>Contact</li>
        </ul>
    </nav>
  );
}

export default Navigation
