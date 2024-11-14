import { Button, Input } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";

const NameFilters = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
}: FilterDropdownProps) => (
  <div style={{ padding: 8 }}>
    <Input
      placeholder="Search by name"
      style={{ marginBottom: 8, display: "block" }}
      value={selectedKeys[0]}
      onChange={(e) => {
        setSelectedKeys([e.target.value]);
      }}
    />
    <Button type="primary" style={{ width: "100%" }} onClick={() => confirm()}>
      Search
    </Button>
    <Button
      style={{ width: "100%", marginTop: 8 }}
      onClick={() => {
        setSelectedKeys([]);
        confirm();
      }}
    >
      Reset
    </Button>
  </div>
);

export default NameFilters;
