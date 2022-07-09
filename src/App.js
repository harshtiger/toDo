import Tasks from './components/tasks';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';
import './App.css';
import { useState } from 'react';
import data from "./data.json"
import Footer from './components/Footer';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

 const [tasks, setTasks] = useState(data)


 const {isAuthenticated} = useAuth0()
 const onComplete = (id) =>{
 

 setTasks( tasks.map((tasks)=>
  {return tasks.id === Number(id) ? {...tasks, completed: !tasks.completed} : {...tasks};

}))}


const onDelete =(id) => {
  
 setTasks([...tasks].filter(tasks => tasks.id !== id))
 
}

const AddNewTask = (userInput)=> {
 


 

  let newTask = {
    id: +new Date(),
    task: userInput,
    completed: false
 
  };



  setTasks([...tasks, newTask])




}

  
  return (
    <><NavBar />

    {isAuthenticated ? ( 
    <Profile />
    ) : (<p></p>)}
    
    <div className='container'>

     

      <AddTask AddNewTask={AddNewTask} />
      
      <Tasks tasks={tasks} onComplete={onComplete} onDelete={onDelete} />

    </div>
    <Footer/>
    </>

  );
}

export default App;
