import { Button, Col, Form, Input, Row, Select } from "antd";
import { Link } from "react-router-dom";

const BCCSearch = ({ search }) => {
  const onFinish = (value) => {
    search(value);
  };
  return (
    <>
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col span="8">
            <Form.Item label="Tên nhân viên" name="name">
              <Input />
            </Form.Item>
          </Col>
          <Col span="8">
            <Form.Item label="Phòng ban" name="department">
              <Select>
                <Select.Option value="all">Tất cả</Select.Option>
                <Select.Option value="seo">SEO</Select.Option>
                <Select.Option value="it">IT</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Form.Item>
              <Link to="/user/add/new">
                <Button type="primary">Thêm nhân viên</Button>
              </Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default BCCSearch;
