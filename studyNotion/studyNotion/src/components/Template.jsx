import frameImg from '../assets/frame.png'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype === "signup" ? 
            (<SignupForm/>) : 
            (<LoginForm />)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign Up with Google </p>
            </button>
        </div>
        
        <div>
            <img src={frameImg} alt='frameImg' width={558} height={504} loading='lazy' /> 
            <img src={image} alt='student' width={558} height={504} loading='lazy' /> 
        </div>
    </div>
  )
}

export default Template