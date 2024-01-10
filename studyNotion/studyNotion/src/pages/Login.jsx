import Template from "../components/Template"
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
      <Template 
      title="Welcome Back"
      desc1="Bulding skills for today, tommorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="Login"
      setIsLoggedIn={setIsLoggedIn}

      
      
      />
  )
}

export default Login
