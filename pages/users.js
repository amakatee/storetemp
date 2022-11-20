import React, { useEffect, useState } from 'react'

import axios from 'axios'



const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {

        const getUsers =  async () => {
            const res = await axios.get('/api/users')
           setUsers(res.data)

        }
        getUsers()

    }, [])
    console.log(users)
  return (
    <div>
        {users.map(user => <div>{user.username}</div>)}
    </div>
  )
}

export default Users

