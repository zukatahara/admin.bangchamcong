import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { TbListDetails } from "react-icons/tb";

const DetailBBCUser = ({ record }) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    form.setFieldsValue(record);
  }, [record]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TbListDetails
        style={{ cursor: "pointer" }}
        size="18"
        onClick={showModal}
      />
      <Modal
        title="Thông tin cơ bản"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <Form
          layout="vertical"
          form={form}
          disabled
          style={{ paddingTop: "1rem" }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Row>
                <Col span={24}>
                  <Form.Item label="Mã số nhân viên" name="employeeNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Tên nhân viên" name="name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Phòng ban" name="bankName">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={24}>
                  <Form.Item label="Ngân hàng" name="bankName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Số tài khoản" name="userBankNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Thu nhập" name="salary">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={24}>
                  <Form.Item label="Email" name="email">
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item label="Số điện thoại" name="phonenumber">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default DetailBBCUser;
