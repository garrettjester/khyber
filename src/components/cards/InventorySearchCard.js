import {
  Input,
  Form,
  Col,
  Select,
  Row
} from "antd";

const { Option } = Select;



const RenderColorSelector = (colorobject) => {
  return (
    <Select
      showSearch
      placeholder="Interior color"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value="1">Florett Silver</Option>
      <Option value="2">Sepang Blue</Option>
      <Option value="3">Navarro Blue</Option>
      <Option value="4">Monsoon Gray</Option>
      <Option value="5">Resolved</Option>
      <Option value="6">Cancelled</Option>
    </Select>
  );
};



const InventorySearchCard = () => {
  return (
    <div className="search-card-wrapper">
      <Form>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <Form.Item
              name="keyword"
              label="Keyword(s)"
            >
              <Input placeholder="Search by Model, VIN, etc." />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Form.Item name="exterior" label="Exterior">
              {RenderColorSelector()}
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <Form.Item name="interior" label="Interior">
              {RenderColorSelector()}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default InventorySearchCard;
