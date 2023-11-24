export type FilterValuesType = "All" | "Active" | "Completed";

export type TodoListPropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  addTask: (task: string) => void;
};

export type TaskType = {
  title: string;
  isDone: boolean;
  id: string;
};

export type TaskPropsType = {
  task: TaskType;
  handleClick: (id: string) => void;
};

export type TasksListType = {
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
};
