import { Table } from "antd";
import type { User } from "../types/User";
import { UsersTableProvider } from "../store/UsersTableContext";
import usersTableColumns from "../constants/usersTableColumns";

const UsersTable = ({
  users,
  onEdit,
  onDelete,
}: {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (key: string) => void;
}) => {
  return (
    <UsersTableProvider onEdit={onEdit} onDelete={onDelete}>
      <Table dataSource={users} columns={usersTableColumns} />
    </UsersTableProvider>
  );
};

export default UsersTable;
