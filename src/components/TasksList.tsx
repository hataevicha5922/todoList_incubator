import { FC, useState } from "react";

import { Task } from "./Task";
import { Button } from "./Button";
import { TasksListType } from "../common/types";

export const TasksList: FC<TasksListType> = ({ tasks, removeTask }) => {
  const [filter, setFilter] = useState("All");

  let filteredTasks = tasks;

  if (filter === "All") {
    filteredTasks = tasks;
  }
  if (filter === "Active") {
    filteredTasks = tasks.filter((task) => !task.isDone);
  }

  if (filter === "Completed") {
    filteredTasks = tasks.filter((task) => task.isDone);
  }

  const filterTasks = (status: string) => setFilter(status);

  const allTasks = () => filterTasks("All");
  const activeTasks = () => filterTasks("Active");
  const completedTasks = () => filterTasks("Completed");

  return (
    <>
      <ul>
        {filteredTasks.map((task) => {
          return <Task task={task} handleClick={removeTask} key={task.id} />;
        })}
      </ul>
      <div>
        <Button title={"All"} onClickHandler={allTasks} />
        <Button title={"Active"} onClickHandler={activeTasks} />
        <Button title={"Completed"} onClickHandler={completedTasks} />
      </div>
    </>
  );
};
