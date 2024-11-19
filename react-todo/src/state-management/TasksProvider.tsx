import React, { ReactNode, useReducer } from "react";
import TaskContext from "./context/tasksContext";
import taskReducer from "./reducers/taskReducer";

interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;