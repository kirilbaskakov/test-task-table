import { Form, FormInstance, Input, InputNumber } from "antd";
import { User } from "../types/User";

const UserForm = ({
  form,
  defaultData,
}: {
  form: FormInstance<Omit<User, "key">>;
  defaultData?: Omit<User, "key">;
}) => {
  return (
    <Form layout="vertical" form={form} initialValues={defaultData}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter username" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          { required: true, message: "Please enter age" },
          {
            type: "number",
            min: 1,
            max: 130,
            message: "Age must be between 1 and 130",
          },
        ]}
      >
        <InputNumber min={1} max={130} />
      </Form.Item>
    </Form>
  );
};

export default UserForm;
