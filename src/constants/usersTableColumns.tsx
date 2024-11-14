import { User } from "../types/User";
import TableActions from "../components/TableActions";
import { ColumnsType } from "antd/es/table";
import NameFilters from "../components/NameFilters";

const usersTableColumns: ColumnsType<User> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "70%",
    sorter: (a: User, b: User) => a.name.localeCompare(b.name),
    filterDropdown: NameFilters,
    onFilter: (value, record) =>
      record.name
        .toLocaleLowerCase()
        .includes(String(value).toLocaleLowerCase()),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "10%",
    sorter: (a: User, b: User) => a.age - b.age,
  },
  {
    title: "Actions",
    key: "actions",
    width: "20%",
    render: (_: string, user: User) => <TableActions user={user} />,
  },
];

export default usersTableColumns;
