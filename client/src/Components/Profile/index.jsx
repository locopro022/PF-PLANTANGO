import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import "./profile.css"

const Profile = () => {
    const {user, isAuthenticated} = useAuth0()
    console.log(user);
  return (
    isAuthenticated ? (
        <div class="container">
    <div>
    <h4 class="text-center"><strong>Perfil de Usuario</strong></h4>
    <div class="profile-card-2"><img src={user.picture} alt={user.name} class="img img-responsive"/>
        <div class="profile-name">{user.name}</div>
        <div class="profile-username">{user.email}</div>
    </div>
    </div>
    </div>
    ) : undefined
  )
}

export default Profile