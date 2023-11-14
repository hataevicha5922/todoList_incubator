import React from "react";
import "./App.css";

import { TodoList } from "./TodoList";

function App() {
  //   const [num, setNum] = useState(1);
  //   setNum(num + 1);
  //   console.log(num);

  const todoListTitle_1 = "What to learn";
  const todoListTitle_2 = "What to buy";

  const task_1 = [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "React", isDone: false },
  ];

  const task_2 = [
    { id: 4, title: "Milk", isDone: true },
    { id: 5, title: "Appel", isDone: false },
    { id: 6, title: "Cheese", isDone: false },
    { id: 7, title: "React", isDone: false },
    { id: 8, title: "React", isDone: false },
  ];

  return (
    <div className="App">
      <TodoList title={todoListTitle_1} tasks={task_1} />
      <TodoList title={todoListTitle_2} tasks={task_2} />
    </div>
  );
}

export default App;
