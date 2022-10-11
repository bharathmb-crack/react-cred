import "./App.css";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deletetask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="todotask">
        <div className="inputTask">
          <input onChange={handleChange} type="text" />
          <button onClick={addTask}>Add Task</button>
        </div>
        {todoList.map((task) => {
          return (
            <div className="showtask">
              <h2>{task.taskname}</h2>
              <button onClick={() => deletetask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
