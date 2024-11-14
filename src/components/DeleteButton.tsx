import { Button, Popconfirm, notification } from "antd";
import useTableContext from "../hooks/useTableContext";

const DeleteButton = ({ userKey }: { userKey: string }) => {
  const { onDelete } = useTableContext();

  const onConfirm = () => {
    try {
      onDelete(userKey);
      notification.success({
        message: "Success",
        description: "The user was successfully deleted",
      });
    } catch {
      notification.error({
        message: "Error!",
        description: "Failed to delete user",
      });
    }
  };

  return (
    <Popconfirm
      title="Are you sure you want delete this user?"
      onConfirm={onConfirm}
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  );
};

export default DeleteButton;
