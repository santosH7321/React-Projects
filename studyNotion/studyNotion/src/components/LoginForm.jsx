import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email:"", 
        password:""
    })
    const [showPassword, setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ))
    }
  return (
    <form>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input 
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            name="email"
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input 
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<FaRegEye />) : (<FaRegEyeSlash />) }
            </span>
        </label>
        <label>
            <Link to='#'>
                <p>
                    Forget Password
                </p>
            </Link>
        </label>
        <label>
            <button>Sign In</button>
        </label>
    </form>
  )
}

export default LoginForm