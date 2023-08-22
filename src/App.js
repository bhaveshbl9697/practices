import React, {  useState } from 'react';
import './App.css';

export default function App() {
 const [tasks, setTasks] = useState([
   { id: 5271, name: "record lecture", completed: false },
   { id: 5272, name: "record react lecture", completed: true },
   { id: 5273, name: "record javascript lecture", completed: false },
 ]);
  console.log(setTasks)
  function handleDelete(id) {
    setTasks(tasks.filter(task => id !== task.id));
  }
  return (
    <>
      <div className="App">
        <h1> TASK LIST</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.id} - {task.name}</span>
              <button onClick={()=>handleDelete(task.id)} className='delete'>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}






// echo "# practices" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/bhaveshbl9697/practices.git
// git push -u origin main

// git remote add origin https://github.com/bhaveshbl9697/practices.git
// git branch -M main
// git push -u origin main