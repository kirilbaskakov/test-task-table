import { Space } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { User } from "../types/User";

const TableActions = ({ user }: { user: User }) => {
  return (
    <Space size="middle">
      <EditButton user={user} />
      <DeleteButton userKey={user.key} />
    </Space>
  );
};

export default TableActions;
