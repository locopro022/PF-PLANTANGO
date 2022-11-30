import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import "./profile.css"
import Avatar from '@mui/material/Avatar';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()
  console.log(user);
  return (
    isAuthenticated ? (
      <div className='containerPerfil'>
        <h4 style={{ color: '#57652a' }}><strong>Perfil de Usuario</strong></h4>
        <div className='containerContenido'>
          <div className='containerImgTitle'>
            <h4 style={{ color: '#b4be9f' }}>{user.name}</h4>
            <img className='imgProfile' src={user.picture? user.picture : <Avatar src="/broken-image.jpg" /> } alt={<Avatar src="/broken-image.jpg" />} />
          </div>
          <div className='containerEmailNick'>
            <h5 style={{ color: '#b4be9f' }}>Email: {user.email}</h5>
            <h5 style={{ color: '#b4be9f' }}>Nombre de usuario: {user.nickname}</h5>
            <h5 style={{ color: '#b4be9f' }}>Email verificado: {user.email_verified ? "Si" : "No"}</h5>
          </div>
        </div>
      </div>
    ) : undefined
  )
}

export default Profile