import React, { FC } from "react";

import { Button } from "./Button";
import { TaskPropsType } from "../common/types";

export const Task: FC<TaskPropsType> = ({ task, handleClick }) => {
  return (
    <li key={task.id}>
      <input type="checkbox" checked={task.isDone} />
      <span>{task.title}</span>
      <Button title={"x"} onClickHandler={() => handleClick(task.id)} />
    </li>
  );
};
