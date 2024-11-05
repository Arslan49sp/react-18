import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";
function App() {
  const { users, error, isLoading, setUsers, setError, setIsLoading } =
    useUsers();
  const addUser = () => {
    const origionalUser = [...users];
    const newUser = { id: 0, name: "Arslan Majeed" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: addedUser }) => setUsers([addedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(origionalUser);
      });
  };

  const updateUser = (user: User) => {
    const origionalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(origionalUser);
    });
  };

  const deleteUser = (user: User) => {
    const origionalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(origionalUser);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
