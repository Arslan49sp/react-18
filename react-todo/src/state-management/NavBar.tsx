import { useContext } from "react";
import LoginStatus from "../state-management/auth/LoginStatus";
import TaskContext from "./tasks/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
