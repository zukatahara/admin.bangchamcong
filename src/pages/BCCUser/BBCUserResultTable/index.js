import { Popconfirm, Space, Spin, Table, Select } from "antd";
import DetailBBCUser from "../DetailBBCUser";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";

const BBCUserResultTable = ({ data }) => {
  const { Option } = Select;
  const { Column } = Table;

  //
  const columns = [
    {
      title: "STT",
      dataIndex: "email",
      key: "email",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Tên nhân viên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "MSNV",
      dataIndex: "employeeNumber",
      key: "employeeNumber",
    },
    {
      title: "Phòng ban",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Hành động",
      dataIndex: "id",
      key: "id",
      render: (_, record, index) => {
        return (
          <>
            <Space size="large">
              <DetailBBCUser record={record} />
              <Link to={`/user/add/${_}`}>
                <BsPencil style={{ cursor: "pointer" }} size="18" />
              </Link>
              <Popconfirm
                title="Bạn muốn xóa nhân viên này"
                okText="Xóa"
                cancelText="Hủy bỏ"
              >
                <AiOutlineDelete style={{ cursor: "pointer" }} size="20" />
              </Popconfirm>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default BBCUserResultTable;
