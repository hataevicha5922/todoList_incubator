import React, { FC, useState, ChangeEvent, KeyboardEvent } from "react";

import { Button } from "./components/Button";
import { TodoListPropsType } from "./common/types";
import { TasksList } from "./components/TasksList";

export const TodoList: FC<TodoListPropsType> = ({
  title,
  tasks,
  removeTask,
  addTask,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  };

  const onClickHandler = () => {
    addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <div className="todoList">
      <h3>{title}</h3>
      <div>
        <input
          onChange={onChangeHandler}
          value={newTaskTitle}
          onKeyDown={onKeyDown}
        />
        <Button title={"+"} onClickHandler={onClickHandler} />
      </div>
      <TasksList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};
