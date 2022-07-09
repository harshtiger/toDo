import React from 'react'
import Task from './task'



export default function Tasks({tasks, onComplete, onDelete}) {


  return (
    <div>

    {
        tasks.map((tasks, index)=>(

            <Task key={`task-${index}`} task={tasks}  onComplete={onComplete} onDelete={onDelete}  />
        ))
    }

    </div>
  )
}
