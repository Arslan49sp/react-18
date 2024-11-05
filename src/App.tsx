import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addUser = () => {
    const origionalUser = [...users];
    const newUser = { id: 0, name: "Arslan Majeed" };
    setUsers([newUser, ...users]);
    apiClient
      .post("/users", newUser)
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
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(origionalUser);
    });
  };

  const deleteUser = (user: User) => {
    const origionalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete("users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(origionalUser);
    });
  };
  useEffect(() => {
    const controler = new AbortController();
    setIsLoading(true);
    apiClient
      .get<User[]>("/users", {
        signal: controler.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controler.abort();
  }, []);
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
