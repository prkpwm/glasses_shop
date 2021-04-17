import React, { useState} from "react";
import { Row, Col, Form, Input, Button } from "antd";

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
                            initialValues={{ Name: "สมชาย", Surname: "อยู่ดี" }}
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

                                <Form.Item >
                                    <Button type={editform?"dashed":"danger"} onClick={() =>{seteditform(!editform)}}>
                                    {editform?"Edit":"Cancel"}
                                     </Button>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Row>
                        </Form>
        </div>
    )
}

export default Profileinfo
