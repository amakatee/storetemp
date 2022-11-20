import React, {useState , useContext} from 'react'

import AuthLayout from '../../components/AuthLayout'
import axios from '../api/axios'
const LOGIN_URL = '/auth/login'
// import Users from '../users'
import {useRouter} from 'next/router'
// import useAuth from '../../hooks/useAuth'

const login = () => {
  // const { setAuth, auth} = useContext(AuthContext)
   const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const foundUser = {
      username,
      password
    }
    try {
      const res = await axios.post(LOGIN_URL,
        JSON.stringify(foundUser),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials:true
        })

        console.log(JSON.stringify(res?.data))
        const accessToken = res?.data?.accessToken
        setAuth({ username, accessToken})
       
       

    } catch(err) {
      console.log(err)

    }

  }




  return (
    <AuthLayout>
      <form className='auth-form' onSubmit={handleLogin}>
        <label>Username
          <input 
          type="text"
          onChange={e => setUsername(e.target.value)}
          value={username}

            />
        </label>
        <label>Password
          <input 
          type="text"
          onChange={e => setPassword(e.target.value)}
          value={password}
          
            />
        </label>
        <button className='auth-btn' type='submit'>Submit</button>
        
      </form>
      {/* <Users /> */}
 
    </AuthLayout>
  )
}

export default login