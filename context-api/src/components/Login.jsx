import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='text-3xl font-bold text-sky-700 '>Login</h2>
        <div>
            <input type="text"
            value={username}
            onClick={(e) => setUsername(e.target.value)}
            className='bg-black p-3 rounded text-white border-2 border-sky-500'
            placeholder='username'/>
        </div>

        <div>
                <input type="text"
                value={password}
                onClick={(e) => setPassword(e.target.value)}
                className='bg-black p-3 rounded text-white border-2 border-sky-500'
                placeholder='Password'/>
        </div>
            
        <div>
            <button
            onClick={handleSubmit}
            className='bg-red-600 px-8 py-2.5 font-medium rounded text-white border-2 border-gray-500'>
                Submit
            </button>
        </div>
        
    </div>
  )
}

export default Login