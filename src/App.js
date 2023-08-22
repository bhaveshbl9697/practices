import React, {  useState } from 'react';
import './App.css';

export default function App() {
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



