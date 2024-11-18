import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskContext from "./state-management/context/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/context/authContext";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user: user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
