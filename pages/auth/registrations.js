import React, {useState} from 'react'
import AuthLayout from '../../compontents/AuthLayout'
const registration = () => {
    const [success, setSuccess] = useState()
    const [err, stErr] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
  return (
      <AuthLayout>
          <form>
        <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
         />
        <input 
        type="text"
        value={password}
        onChange={(e => setPassword(e.target.value))}
        />
        <button type='submit'>Regisster</button>
    </form>
      </AuthLayout>
  )
}

export default registration