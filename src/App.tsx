import React, { useState } from "react";
import "./App.css";

import { TodoList } from "./TodoList";
import { TaskType } from "./common/types";
import { v1 } from "uuid";

function App() {
  const todoListTitle_1 = "What to learn";
  // const todoListTitle_2 = "What to buy";

  const task_1 = [
    { id: v1(), title: "HTML", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "React", isDone: true },
  ];

  // const task_2 = [
  //   { id: v1(), title: "Milk", isDone: true },
  //   { id: v1(), title: "Appel", isDone: false },
  //   { id: v1(), title: "Cheese", isDone: false },
  //   { id: v1(), title: "React", isDone: false },
  //   { id: v1(), title: "React", isDone: false },
  // ];

  const [tasks, setTasks] = useState<Array<TaskType>>(task_1);
  // const [newTask, setNewTask] = useState("");

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const addTask = (title: string) => {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <TodoList
        title={todoListTitle_1}
        tasks={tasks}
        removeTask={removeTask}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
