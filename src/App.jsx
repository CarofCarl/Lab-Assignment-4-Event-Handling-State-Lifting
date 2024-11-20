// App.jsx
import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.includes(taskText)) {
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>ToDo List</h1>
      <ToDoForm addTask={addTask} />

      <div style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
            }}
          >
            {task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
