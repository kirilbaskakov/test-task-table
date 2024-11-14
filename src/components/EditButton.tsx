import { Button, Form, Modal, notification } from "antd";
import { useState } from "react";
import UserForm from "./UserForm";
import { User } from "../types/User";
import useTableContext from "../hooks/useTableContext";

const EditButton = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<Omit<User, "key">>();
  const { onEdit } = useTableContext();

  const onClick = () => {
    setIsOpen(true);
  };

  const onOk = () => {
    form.validateFields().then((values) => {
      try {
        if (user.name != values.name || user.age != values.age) {
          onEdit({
            key: user.key,
            ...values,
          });
          notification.success({
            message: "Success",
            description: "User data has been successfully changed",
          });
        }
      } catch {
        notification.error({
          message: "Error!",
          description: "Failed to change user data",
        });
      } finally {
        setIsOpen(false);
      }
    });
  };

  const onCancel = () => {
    setIsOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button onClick={onClick}>Edit</Button>
      <Modal title="Edit user" open={isOpen} onOk={onOk} onCancel={onCancel}>
        <UserForm form={form} defaultData={user} />
      </Modal>
    </>
  );
};

export default EditButton;
