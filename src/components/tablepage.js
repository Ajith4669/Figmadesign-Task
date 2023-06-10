import { Button, Table, Avatar, Space } from "antd";
import { MoreOutlined, ControlOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { NavLink } from "react-router-dom";

const columns = [
  {
    title: "SI.No",
    dataIndex: "sno",
    sorter: (a, b) => a.sno - b.sno,
  },
  {
    title: "ID",
    dataIndex: "id",
  },

  {
    title: "Image",
    dataIndex: "image",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Floor",
    dataIndex: "floor",
  },
  {
    title: "Joined on",
    dataIndex: "joinedon",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data = [
  {
    key: "1",
    sno: "01",
    id: "#M8001K",
    image: <Avatar></Avatar>,
    name: "Karthikeyan E",
    floor: "04",
    joinedon: "May 12,2023 3.30PM",

    status: (
      <Button style={{ backgroundColor: "#34c38f", color: "white" }}>
        Working
      </Button>
    ),
  },
  {
    key: "2",
    sno: "02",
    id: "#M8001K",
    image: <Avatar></Avatar>,
    floor: "05",
    name: "Karthikeyan E",
    joinedon: "May 12,2023 3.30PM",

    status: (
      <Button style={{ backgroundColor: "#f4bd6a", color: "white" }}>
        Leave
      </Button>
    ),
  },
  {
    key: "3",
    sno: "03",
    id: "#M8001K",
    image: <Avatar></Avatar>,
    floor: "03",
    name: "Karthikeyan E",
    joinedon: "May 12,2023 3.30PM",

    status: (
      <Link to="/preview">
        <Button style={{ backgroundColor: "#34c38f", color: "white" }}>
          Working
        </Button>
      </Link>
    ),
  },

  {
    key: "4",
    sno: "04",
    id: "#M8001K",
    image: <Avatar></Avatar>,
    floor: "06",
    name: "Karthikeyan E",
    joinedon: "May 12,2023 3.30PM",

    status: (
      <Link to="/preview">
        <Button style={{ backgroundColor: "#34c38f", color: "white" }}>
          Working
        </Button>
      </Link>
    ),
  },
  {
    key: "5",
    sno: "05",
    id: "#M8001K",
    image: <Avatar></Avatar>,
    floor: "01",
    name: "Karthikeyan E",
    joinedon: "May 12,2023 3.30PM",

    status: (
      <Link to="/preview">
        <Button style={{ backgroundColor: "#34c38f", color: "white" }}>
          Working
        </Button>
      </Link>
    ),
  },
];
const TablePage = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <h1>Employee Info</h1>
        <NavLink exact to="/preview">
          <Button
            style={{
              backgroundColor: "#556ee6",
              color: "white",
              marginLeft: "2%",
            }}
          >
            View Employee
          </Button>
        </NavLink>
        <div>
          <Button
            style={{
              backgroundColor: "#556ee6",
              color: "white",
              marginLeft: "80%",
            }}
          >
            Add Employee
          </Button>
        </div>
        <Space style={{ marginLeft: "90%" }}>
          <Button style={{ backgroundColor: "#f4f4f8" }}>
            <ControlOutlined style={{ fontSize: "20px" }} />
          </Button>
          <MoreOutlined />
        </Space>
      </div>
      <Table
        pagination={{
          showSizeChanger: true,

          showQuickJumper: true,

          size: "default",
        }}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};
export default TablePage;
