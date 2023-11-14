import React, { FC, useState } from "react";

import { Button } from "./components/Button";
import { Task } from "./components/Task";

export type TaskType = {
  title: string;
  isDone: boolean;
  id: number;
};

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskType>;
};

type StatusTaskType = "All" | "Active" | "Completed";

export const TodoList: FC<TodoListPropsType> = ({ title, tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const removeTask = (taskId: number) => {
    setTaskList(taskList.filter((t) => t.id !== taskId));
  };

  const fitterTask = (taskStatus: StatusTaskType) => {
    switch (taskStatus) {
      case "All": {
        setTaskList(tasks);
        break;
      }
      case "Active": {
        setTaskList(tasks.filter((task) => !task.isDone));
        break;
      }
      case "Completed": {
        setTaskList(tasks.filter((task) => task.isDone));
        break;
      }
      default:
        setTaskList(tasks);
    }
  };

  return (
    <div className="todoList">
      <h3>{title}</h3>
      <div>
        <input />
        <Button title={"+"} />
      </div>
      <ul>
        {taskList.map((task) => {
          return <Task task={task} handleClick={removeTask} />;
        })}
      </ul>
      <div>
        <Button title={"All"} onClickHandler={() => fitterTask("All")} />
        <Button title={"Active"} onClickHandler={() => fitterTask("Active")} />
        <Button
          title={"Completed"}
          onClickHandler={() => fitterTask("Completed")}
        />
      </div>
    </div>
  );
};
