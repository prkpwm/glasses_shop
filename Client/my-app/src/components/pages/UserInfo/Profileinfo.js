import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Select,DatePicker } from "antd";
var dayjs = require('dayjs')
const { Option } = Select;
const { TextArea } = Input;

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
                initialValues={{ Name: "สมชาย", Surname: "อยู่ดี",Birthday:dayjs('2020-06-09'),Gender:"Male"
            ,Email:"test@gmail.com",Phone:"0869574599",Address:"xxxxxxxxxxxxxxxxxxxxxxxxxxx" }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={7}>
                        <Form.Item
                            label="ชื่อ"
                            name="Name"
                            rules={[
                                { required: true, message: "Please input your Firstname!" },
                            ]}
                        >
                            <Input disabled={editform} 
                            pattern="^[A-Za-zก-๏]{3,}$"/>
                        </Form.Item>
                    </Col>
                    <Col span={1} />
                    <Col span={7}>
                        <Form.Item
                            label="นามสกุล"
                            name="Surname"
                            rules={[
                                { required: true, message: "Please input your Lastname!" },
                            ]}
                        >
                            <Input disabled={editform} 
                            pattern="^[A-Za-zก-๏]{3,}$"/>
                        </Form.Item>
                    </Col>
                    <Col span={1} />
                    <Col span={7}>
                        <Form.Item
                            label="โทรศัพท์"
                            name="Phone"
                            rules={[
                                { required: true, message: "Please input your Phone" },
                            ]}
                        >
                            <Input disabled={editform} pattern="^[0-9]{10}$"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    
                <Col span={10}>
                        <Form.Item
                            label="E-mail"
                            name="Email"
                            rules={[
                                { required: true, message: "Please input your E-mail!" },
                            ]}
                        >
                        <Input  disabled={editform}
                            pattern="^[a-zA-Z0-9\.]{1,}@[a-zA-Z\.]{1,}.[a-zA-Z0-9]{1,4}$"
                        />
                        </Form.Item>
                    </Col>
                    <Col span={1} />
                    <Col span={6}>
                        <Form.Item
                            label="วันเกิด"
                            name="Birthday"
                            rules={[
                                { required: true, message: "Please select your Birthday" },
                            ]}
                        >
                            <DatePicker disabled={true} format={'DD/MM/YYYY'} />
                        </Form.Item>
                    </Col>
                    <Col span={1} />
                    <Col span={5}>
                        <Form.Item
                            label="เพศ"
                            name="Gender"
                            rules={[
                                { required: true },
                            ]}
                        >
                            <Select style={{ width: 120 }} disabled={editform} >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>

                    <Form.Item
                        name="Address"
                        label="ที่อยู่"
                        rules={[
                            { required: true, message: "Please input your Address" },
                        ]}
                    >
                        <TextArea rows={4} disabled={editform}
                            pattern="^.{1,}$"
                        />
                    </Form.Item>

                    </Col>
                    </Row>

                <Form.Item >
                    <Button type={editform ? "dashed" : "danger"} onClick={() => { seteditform(!editform) }}>
                        {editform ? "Edit" : "Cancel"}
                    </Button>
                    {editform ?null
                    :<Button type="primary" htmlType="submit">
                    Submit
                                </Button>}
                </Form.Item>
            </Form>
        </div>
    )
}

export default Profileinfo
