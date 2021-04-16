import React, { useState} from "react";
import { Row, Col, Card, Avatar, Divider, Form, Input, Button } from "antd";

function Profile() {
    const [editform, seteditform] = useState(true);
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Card style={{ backgroundColor: "#DCDCDC", borderRadius: 20, fontSize: 25 }}>
                <Row>
                    <Col span={4} style={{ textAlign: "center" }}>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={100} />
                        <br /><br />
                        <Button shape="round" type="primary">Upload</Button>
                    </Col>
                    <Col span={1}>
                        <Divider type="vertical" style={{ backgroundColor: "black", height: "100%" }} />
                    </Col>
                    <Col span={18}>
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
                                    {editform?<Button type="dashed" onClick={() =>{seteditform(!editform)}}>
                                        Edit
                                     </Button>:
                                     <Button type="danger" onClick={() =>{seteditform(!editform)}}>
                                        Cancel
                                     </Button>
                                     }
                                    
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Profile
