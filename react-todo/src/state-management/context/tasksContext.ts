import { Dispatch } from "react";
import { ActionType, Task } from "../reducers/taskReducer";
import React from "react";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<ActionType>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
