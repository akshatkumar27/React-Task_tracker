import Header from './components/Header'
import Task from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'



const App = () => {



  const[tasks,setTasks] = useState([{

    id:1,
    text: 'Coaching',
    day: 'Jan 5th at 2:30pm',
    reminder: true,
},
{

    id:2,
    text: 'School',
    day: 'Jan 6th at 2:30pm',
    reminder: true,
  },
  {
    
    id:3,
    text: 'home',
    day: 'Jan 7th at 2:30pm',
    reminder: false,
  }
])

//add task 

const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1
  console.log(id)
  const newTask={id,...task}
  setTasks([...tasks,newTask])

}


//delete 
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id !==id))
}

//Toggle reminder

const toggleReminder= (id)=> {
  setTasks(
    tasks.map((task)=>
    task.id===id?{...task,reminder:
      !task.reminder}:task
    )
   )
}
 


  return (
    <div className='container'>

    <Header  />
<AddTask onAdd={addTask} />

    {tasks.length>0 ?<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    
    : 'No Task to show '}

    </div>
  );
}



export default App;
