import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const {user, isAuthenticated} = useAuth0
    console.log(user);
  return (
    isAuthenticated ? (<div>
        <div><img src={user.picture} alt={user.name}/></div>
        <div><h2>{user.name}</h2></div>
        <div><p>{user.email}</p></div>
        <div>{JSON.stringify(user)}</div>
        <div></div>   
    </div>) : undefined
    
  )
}

export default Profile