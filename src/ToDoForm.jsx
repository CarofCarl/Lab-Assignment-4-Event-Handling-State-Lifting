import React, { useState } from "react";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{
          flexGrow: 1,
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;
