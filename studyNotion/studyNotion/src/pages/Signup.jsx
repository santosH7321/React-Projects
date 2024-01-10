import Template from "../components/Template"
import signupImg from "../assets/signup.png"
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Joins the milions learning to code with StudyNotion for free"
    desc1="Bulding skills for today, tommorrow, and beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}

    
    
    />
  )
}

export default Signup
