import React from 'react'
import { useState } from 'react'


export default function AddTask({AddNewTask}) {
const [userInput, setUserInput] = useState("")
  

const handleOnChange = (e)=>{
    setUserInput(e.currentTarget.value)
}

const handleSubmit = (e) =>{
    e.preventDefault();
    if(userInput.trim() !== ""){

        AddNewTask(userInput);
        setUserInput("")

    }

}


  return (
    <div style={{margin: "3px"}}>
        
        <form onSubmit={handleSubmit}>
            <input className='input' type="text" value={userInput} onChange={handleOnChange} />
            <button className='butt'>Add task</button>
        </form>
        
        </div>
  )
}
