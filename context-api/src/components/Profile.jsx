import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
const {user} = useContext(UserContext)
  if(!user) return <div className='text-xl font-semibold text-red-700'>please login</div>
  return <div className='text-xl font-semibold text-green-800 '>Welcome {user.username}</div>
}

export default Profile


