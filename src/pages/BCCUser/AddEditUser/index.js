import React, { useEffect } from "react";
import BreadCrumb from "./../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Input,
  message,
  Select,
  Table,
  Form,
  Button,
  Row,
  Col,
  InputNumber,
} from "antd";
import { ListBanks } from "../../../common/listBank";
import { Routes, Route, useParams } from "react-router-dom";
import { async } from "q";
import { createNewBCCUser } from "../../../helpers/helper";
import { toast } from "react-toastify";
const AddEditUser = () => {
  let { id } = useParams();
  console.log("id:", id);
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    const result = await createNewBCCUser(value);
    console.log("resultádasd:", result);
    if(result?.status === 1){
      toast.success("Thêm thành công!")
    }
  };

  useEffect(() => {
    if (id === "new") {
      form.setFieldsValue({
        department: "seo",
        bankName: "VietinBank",
        isAdmin: "False",
      });
    }
  }, [id]);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title={id === "new" ? "Thên mới" : "Cập nhật"}
            pageTitle="Quản lý thành viên"
            slug="users"
          />

          <Row className="mb-3" style={{ display: "block" }}>
            <div className="mb-3">
              <Link to="/user/list">
                <div
                  className="d-flex align-items-center"
                  style={{ display: "block" }}
                >
                  <i className="ri-arrow-left-line"></i>
                  <div style={{ marginLeft: "6px" }}>Quay lại</div>
                </div>
              </Link>
            </div>
            <div>
              <div>
                <Form layout="vertical" onFinish={onFinish} form={form}>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Form.Item
                        label="Họ và tên"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập họ tên!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Mã số nhân viên"
                        name="employeeNumber"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập mã số nhân viên!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Ngân hàng"
                        name="bankName"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn tên ngân hàng!",
                          },
                        ]}
                      >
                        <Select>
                          {ListBanks?.map((item) => (
                            <option key={item?.bin} value={item?.short_name}>
                              {item?.short_name} - {item?.name}
                            </option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Số điện thoại"
                        name="phonenumber"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số điện thoại!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={6}>
                      <Form.Item
                        label="Phòng ban"
                        name="department"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn phòng ban!",
                          },
                        ]}
                      >
                        <Select>
                          <Select.Option value="seo">SEO</Select.Option>
                          <Select.Option value="it">IT</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Số tài khoản"
                        name="userBankNumber"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số tài khoản!",
                          },
                        ]}
                      >
                        <Input style={{ width: "100%" }} controls={false} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập email!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        label="Lương (đ)"
                        name="salary"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tiền lương!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item label="Chức vụ" name="isAdmin">
                        <Select>
                          <Select.Option value="False">Nhân viên</Select.Option>
                          <Select.Option value="True">Admin</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          {id === "new" ? "Tạo mới" : "Cập nhật"}
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default AddEditUser;
