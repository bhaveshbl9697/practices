import React, { useRef, useState } from "react";
import "./AddTask.css";
export const AddTask = ({ tasks, setTasks }) => {
  //   const [taskValue, setTaskValue] = useState("");
  const taskRef = useRef("");
  const [progrss, setProgrss] = useState(false);
  const handleChange = (event) => {
    // setTaskValue(event.target.value);
    console.log(taskRef.current.value);
  };
  const handleReset = () => {
    // setTaskValue("");
    taskRef.current.value = "";
    setProgrss(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      //  name: taskValue,
      name: taskRef.current.value,
      completed: Boolean(progrss),
    };
    setTasks([...tasks, task]);
    handleReset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          id="task"
          name="task"
          placeholder="Task Name"
          autoComplete="off"
          ref={taskRef}
        />
        <select
          onChange={(event) => setProgrss(event.target.value)}
          value={progrss}
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>

        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <p>{taskRef.current.value}</p>
      </form>
    </section>
  );
};
