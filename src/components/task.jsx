import React from 'react'








export default function Task({task, onComplete, onDelete}) {

const Style = () =>{
 return {
    textDecoration:  task.completed ? "line-through" : "none",
    margin:"10px",
    border:"1px solid black",
    backgroundColor:"black",
    borderRadius:"7px",
    fontSize: "larger",
    height:"auto",
    padding:"1%"



}}








  return (
    <div style={Style()}>
        <input className='check' style={Style()} type={"checkbox"} checked={task.completed} onChange = {() => onComplete(task.id)} />
        {task.task}
        <button className='add-btn' onClick={()=> onDelete(task.id)}>X</button>
        
        
        
        
        </div>
  )
  

}
