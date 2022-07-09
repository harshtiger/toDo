import React from 'react'
import Login from './auth0/Login'
import Logout from './auth0/Logout'

import { useAuth0 } from '@auth0/auth0-react'
import "./NavBar.css"


export default function NavBar(){

  const {isAuthenticated} = useAuth0()

    return(
        <>
        <div className='nav'>
            <div className='nav-text'><h1>To-do App</h1></div>
            
      
        <div className='log'>
        {isAuthenticated?
        

        <Logout />

                        
        :<Login />}
        </div>
        </div>
        </>
    )
}

