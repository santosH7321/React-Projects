import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';


const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-around items-center '>
      <Link to="/">
        <img src={Logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
          {/* Login signup logout Dashboard */}
      <div className='flex gap-7'>
        { !isLoggedIn &&
          <Link to='/login'>
              <button>Login</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to='/signup'>
              <button>Sign Up</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/'>
              <button onClick={()=> {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}>Log Out</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/dashboard'>
              <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar