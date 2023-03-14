import React, { useEffect } from "react";
import { Col, Container, Input, InputGroup, Row, Button } from "reactstrap";
import BreadCrumb from "./../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import {
  Badge,
  message,
  Space,
  Table,
  Modal,
  Select,
  Popconfirm,
  Pagination,
} from "antd";
import { getListBBCUser } from "../../helpers/helper";

const { Option } = Select;
const { Column } = Table;
const BCCUser = () => {
  const users = [];
  const getUserData = async () => {
    const result = await getListBBCUser();
    console.log("result:", result);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Thành Viên" pageTitle="Quản lý thành viên" />
          <Row className="mb-3">
            <Col lg="5">
              <div>
                <InputGroup>
                  <Input
                    // value={searchInput}
                    // onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Tìm kiếm thành viên..."
                  />
                  <Button
                  //    onClick={() => onSearchUser()}
                  >
                    <i className="ri-search-line"></i>
                  </Button>
                </InputGroup>
              </div>
            </Col>

            <Col lg="7">
              <div className="text-right">
                <Link to="/user/add/new">
                  <Button>Thêm mới</Button>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Table pagination={false} dataSource={users}>
                <Column
                  title="#"
                  render={(val, rec, index) => {
                    return index + 1;
                  }}
                />
                <Column
                  title="Tên"
                  dataIndex="lastName"
                  key="lastName"
                  sorter={(a, b) => a?.lastName.localeCompare(b?.lastName)}
                />
                <Column
                  title="Tên đăng nhập"
                  dataIndex="username"
                  key="username"
                  sorter={(a, b) => a?.username.localeCompare(b?.username)}
                />
                <Column
                  title="Phân quyền"
                  dataIndex="role"
                  key="role"
                  sorter={(a, b) => a?.role.localeCompare(b?.role)}
                />
                <Column
                  title="Tình trạng"
                  dataIndex="status"
                  key="status"
                  render={(_, record) => {
                    if (record?.status === 1) {
                      return (
                        <span>
                          <Badge status="success" />
                          Hoạt động
                        </span>
                      );
                    } else {
                      return (
                        <span>
                          <Badge status="error" />
                          không hoạt động
                        </span>
                      );
                    }
                  }}
                  sorter={(a, b) => a?.status - b?.status}
                />
                <Column
                  title="Hoạt động"
                  key="action"
                  render={(val, record) => (
                    <Space size="middle">
                      {/* <Link to={{ pathname: "/users/" + val.id }}>View</Link> */}
                      {/* <Link to={{ pathname: "/users/" + val.id }}>
                        <i className="ri-eye-line action-icon"></i>
                      </Link> */}
                      <Link to={{ pathname: "/user/add/" + val.id }}>
                        <i className="ri-pencil-line action-icon"></i>
                      </Link>

                      {/* <Link to={{ pathname: "/user/add/" + val.id }}>Edit</Link> */}
                      {/* <a>Add</a>
                      <a>Edit</a> */}
                      <Popconfirm
                        title="Are you sure to delete this user?"
                        // onConfirm={() => confirm(val)}
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <i className="ri-delete-bin-line action-icon"></i>
                      </Popconfirm>
                    </Space>
                  )}
                />
              </Table>
              <Pagination
                style={{ float: "right", marginTop: "10px" }}
                // total={total}
                showTotal={(total) => `Total ${total} items`}
                showSizeChanger
                // defaultPageSize={pageSize}
                // current={pageIndex}
                onChange={(page, pageSize) => {
                  //   setPageIndex(page);
                  //   setPageSize(pageSize);
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default BCCUser;
