import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
 function App() {
  return (
    <>
      <div className="App">
        <Header />
        <TaskList />
      </div>
    </>
  );
}
export default App;

// echo "# practices" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/bhaveshbl9697/practices.git
// git push -u origin main

// git remote add origin https://github.com/bhaveshbl9697/practices.git
// git branch -M main
// git push -u origin main

// git clone https://github.com/bhaveshbl9697/practices.git