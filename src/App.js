import React, { useState } from "react";
import "./App.css";
import ToDoForm from "./ToDoForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.includes(taskText)) {
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <ToDoForm addTask={addTask} />

        <div style={{ marginTop: "20px" }}>
          {tasks.map((task, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: "#282c34",
                borderRadius: "4px",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              {task}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
