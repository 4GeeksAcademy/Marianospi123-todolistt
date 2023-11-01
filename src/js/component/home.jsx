import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1> TODOS</h1>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={taskText}
          onChange={handleTaskTextChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddTask();
            }
          }}
        />
      </div>
      {tasks.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                onClick={() => handleTaskToggle(index)}
              >
                {task.text}
              </span>
              {task.completed && (
                <button onClick={() => handleTaskDelete(index)}>X</button>
              )}
            </li>
          ))}
        </ul>
      )}
      <p className="total-tasks">Tareas por hacer: {tasks.length}</p> {/* Contador de tareas */}
    </div>
  );
};

export default TodoList;
