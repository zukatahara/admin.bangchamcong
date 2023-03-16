import {
  Popconfirm,
  Space,
  Spin,
  Table,
  Select,
  Pagination,
  message,
} from "antd";
import DetailBBCUser from "../DetailBBCUser";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { deleteBCCUser } from "../../../helpers/helper";

const BBCUserResultTable = ({ data, getUserData }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { Option } = Select;
  const { Column } = Table;

  //
  const onDeleteUser = async (id) => {
    const result = await deleteBCCUser(id);
    console.log("result:", result);
    if (result?.status === 1) {
      message.success("Xóa thành công.");
      getUserData();
    }
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "email",
      key: "email",
      render: (_, record, index) => pageSize * (pageIndex - 1) + index + 1,
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
      dataIndex: "department",
      key: "department",
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
                onConfirm={() => onDeleteUser(_)}
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
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: pageIndex,
          total: data?.length,
          defaultCurrent: pageIndex,
          pageSize: pageSize,
          pageSizeOptions: [5, 10, 15, 20],
          showSizeChanger: true,
          onChange: (page, pageSize) => {
            setPageIndex(page);
            setPageSize(pageSize);
          },
        }}
      />
    </>
  );
};
export default BBCUserResultTable;
