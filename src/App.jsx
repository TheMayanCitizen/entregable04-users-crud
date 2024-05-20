import { useEffect, useState } from "react";
import "./App.css";
import { useCrud } from "./hooks/useCrud";
import { FormUser } from "./components/FormUser";
import { UserCard } from "./components/UserCard";

function App() {
  const [users, getUsers, createUser, deleteUser, updateUser] =
    useCrud("/users/");

  const [userSelected, setUserSelected] = useState();
  const [formIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <header className="user__header">
        <h1>User CRUD</h1>
        <button onClick={() => setFormIsOpen(true)} className="new__user__btn">
          New User +
        </button>
      </header>
      <hr className="app__hr" />
      <FormUser
        createUser={createUser}
        userSelected={userSelected}
        updateUser={updateUser}
        setUserSelected={setUserSelected}
        formIsOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
      />

      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserSelected={setUserSelected}
            setFormIsOpen={setFormIsOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
