import logo from '../assets/brand_logo.png';

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center p-3 bg-slate-300'> 
        <div className='ml-10'>
            <img src={logo} alt="" />
        </div>
        <ul className='flex justify-center items-center gap-20 mr-10 text-xl font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
}

export default Navigation
