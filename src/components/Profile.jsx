import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import "./Profile.css"


export default function Profile(){

    const {user} = useAuth0()

    console.log(user)

    return (
        <><div className='prof'>
            Welcome {user.name}! Your email is {user.email}
            
        </div>
        
        
        
               
        

        </>
    )
}