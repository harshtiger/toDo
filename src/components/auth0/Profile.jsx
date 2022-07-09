import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export default function Profile(){

    const {isAuthenticated, isLoading, user} =useAuth0()
   console.log(user)
   if(isLoading){
    return(<div>loading...</div>)
   }

   return (isAuthenticated && (
    <div>
        
        <img src={user.picture} alt={user.name} height="50px" width="50px"  />
        <p>{user.name}</p>
        
    </div>
   ))
}