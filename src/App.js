import React, {  useState } from 'react';
import './App.css';

export default function App() {
<<<<<<< HEAD
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
=======
  const [count, setCount] = useState(0);
  // let count = 0;
  function handleAdd() {
    // count += 1;
    // console.log(count);
    setCount(count+1);
  }
  function handleSub() {
      setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  
  return (
    <>
      <div className="App">
        <div className="box">
          <p>{count}</p>
          <button className="add" onClick={handleAdd}>
            ADD
          </button>
          <button className="sub" onClick={handleSub}>
            SUB
          </button>
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
        </div>
>>>>>>> 8d8fb34e9d4bd3c6f6f13bfb2bb754e2633e674e
      </div>
    </>
  );
}


<<<<<<< HEAD




// echo "# practices" >> README.md
// git init
// git add .
=======
// echo "# practices" >> README.md
// git init
// git add README.md
>>>>>>> 8d8fb34e9d4bd3c6f6f13bfb2bb754e2633e674e
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/bhaveshbl9697/practices.git
// git push -u origin main

// git remote add origin https://github.com/bhaveshbl9697/practices.git
// git branch -M main
<<<<<<< HEAD
// git push -u origin main
=======
// git push -u origin main



>>>>>>> 8d8fb34e9d4bd3c6f6f13bfb2bb754e2633e674e
