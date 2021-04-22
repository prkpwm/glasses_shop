import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Select,DatePicker } from "antd";
var dayjs = require('dayjs')
const { Option } = Select;

function Profileinfo() {
    const [editform, seteditform] = useState(true);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                initialValues={{ Name: "สมชาย", Surname: "อยู่ดี",Birthday:daynpmjs(new Date()),Gender:"Male" }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={11}>
                        <Form.Item
                            label="ชื่อ"
                            name="Name"
                        >
                            <Input disabled={editform} />
                        </Form.Item>
                    </Col>
                    <Col span={1} />
                    <Col span={11}>
                        <Form.Item
                            label="นามสกุล"
                            name="Surname"
                        >
                            <Input disabled={editform} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={11}>
                        <Form.Item
                            label="วันเกิด"
                            name="Birthday"
                        >
                            <DatePicker disabled={editform} format={'DD/MM/YYYY'} />
                        </Form.Item>
                    </Col>
                    <Col span={1} />
                    <Col span={11}>
                        <Form.Item
                            label="เพศ"
                            name="Gender"
                        >
                            <Select style={{ width: 120 }} disabled={editform} >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item >
                    <Button type={editform ? "dashed" : "danger"} onClick={() => { seteditform(!editform) }}>
                        {editform ? "Edit" : "Cancel"}
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Profileinfo
