import { Button, Form, Modal, notification } from "antd";
import { useState } from "react";
import UserForm from "./UserForm";
import { User } from "../types/User";

const CreateButton = ({ onCreate }: { onCreate: (user: User) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm<{ name: string; age: number }>();

  const onClick = () => {
    setIsOpen(true);
  };

  const onOk = () => {
    form.validateFields().then((values) => {
      try {
        onCreate({
          key: String(+new Date()),
          ...values,
        });
        form.resetFields();
        notification.success({
          message: "Success",
          description: "User was added successfully",
        });
      } catch {
        notification.error({
          message: "Error!",
          description: "Failed to create user",
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
      <Button onClick={onClick} type="primary" size="large">
        Create user
      </Button>
      <Modal title="Create user" onCancel={onCancel} onOk={onOk} open={isOpen}>
        <UserForm form={form} />
      </Modal>
    </>
  );
};

export default CreateButton;
