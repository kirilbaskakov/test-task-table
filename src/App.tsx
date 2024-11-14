import { useState } from "react";
import CreateButton from "./components/CreateButton";
import UserTable from "./components/UsersTable";
import type { User } from "./types/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onCreate = (user: User) => {
    setUsers([...users, user]);
  };

  const onEdit = (newUser: User) => {
    setUsers(users.map((user) => (user.key === newUser.key ? newUser : user)));
  };

  const onDelete = (key: string) => {
    setUsers(users.filter((user) => user.key !== key));
  };

  return (
    <>
      <CreateButton onCreate={onCreate} />
      <UserTable users={users} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
}

export default App;
