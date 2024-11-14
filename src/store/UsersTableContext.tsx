import { ReactNode, createContext } from "react";
import { User } from "../types/User";

type UserTableContext = {
  onEdit: (user: User) => void;
  onDelete: (key: string) => void;
};

export const usersTableContext = createContext<UserTableContext>({
  onEdit: () => {},
  onDelete: () => {},
});

export const UsersTableProvider = ({
  onEdit,
  onDelete,
  children,
}: {
  onEdit: (user: User) => void;
  onDelete: (key: string) => void;
  children: ReactNode;
}) => {
  return (
    <usersTableContext.Provider value={{ onEdit, onDelete }}>
      {children}
    </usersTableContext.Provider>
  );
};
