import React, { useEffect, useState, useForm } from 'react';
import { Row, Col, Form, Input, Button, Select, DatePicker } from "antd";
import axios from 'axios';
var dayjs = require('dayjs')
const { Option } = Select;
const { TextArea } = Input;

var id = ""
function Profileinfo() {
    const [editform, seteditform] = useState(true);
    const [datas, setdatas] = useState([[]]);
    const [datainitform, setdatainitform] = useState();
    const [form] = Form.useForm()

    useEffect( () => {
        if (localStorage.getItem('isLogin') == "true") {
            id = localStorage.getItem('uid')
        }
        else {
            id = sessionStorage.getItem('uid')
        }
        axios.get("/getinfobyid/userinfo/id/" + id)
            .then(res => {
                const data = res.data[0];
                console.log(data)
                setdatas(data)
                const datainit = {
                    Name: data[3],
                    Surname: data[4],
                    Email: data[5],
                    Phone: data[6],
                    Address: data[7],
                    Gender: data[8],
                    Birthday: dayjs(data[9]),
                }
                setdatainitform(datainit)
            })
    }, [])
    useEffect(() => {
        form.setFieldsValue(datainitform)
    }, [form, datainitform])

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.get("/updateuserinfo/userinfo/" + values + "/" +id)
            .then(res => {
                const data = res.data;
                console.log(data)
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                form={form}
                name="basic"
                initialValues={datainitform
                    // Name: datas[3], Surname: datas[4], Birthday: dayjs('2020-06-09'), Gender: "Male"
                    // , Email: "test@gmail.com", Phone: "0869574599", Address: "xxxxxxxxxxxxxxxxxxxxxxxxxxx"
                }
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col xs={24} md={11} xl={7}>
                        <Form.Item
                            label="ชื่อ"
                            name="Name"
                            rules={[
                                { required: true, message: "Please input your Firstname!" },
                            ]}
                        >
                            <Input disabled={editform}
                                pattern="^[A-Za-zก-๏]{3,}$" />
                        </Form.Item>
                    </Col>
                    <Col xs={0} md={1} xl={1} />
                    <Col xs={24} md={12} xl={8}>
                        <Form.Item
                            label="นามสกุล"
                            name="Surname"
                            rules={[
                                { required: true, message: "Please input your Lastname!" },
                            ]}
                        >
                            <Input disabled={editform}
                                pattern="^[A-Za-zก-๏]{3,}$" />
                        </Form.Item>
                    </Col>
                    <Col xs={0} md={0} xl={1} />
                    <Col xs={24} md={12} xl={7}>
                        <Form.Item
                            label="โทรศัพท์"
                            name="Phone"
                            rules={[
                                { required: true, message: "Please input your Phone" },
                            ]}
                        >
                            <Input disabled={editform} pattern="^[0-9]{10}$" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>

                    <Col xs={12} md={12} xl={6}>
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
                    <Col xs={1} md={0} xl={1} />
                    <Col xs={10} md={8} xl={4}>
                        <Form.Item
                            label="เพศ"
                            name="Gender"
                            rules={[
                                { required: true },
                            ]}
                        >
                            <Select style={{ width: "100%" }} disabled={editform} >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={0} md={0} xl={1} />
                    
                    <Col xs={24} md={12} xl={8}>
                        <Form.Item
                            label="E-mail"
                            name="Email"
                            rules={[
                                { required: true, message: "Please input your E-mail!" },
                            ]}
                        >
                            <Input disabled={editform}
                                pattern="^[a-zA-Z0-9\.]{1,}@[a-zA-Z\.]{1,}.[a-zA-Z0-9]{1,4}$"
                            />
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
                    {editform ? null
                        : <Button type="primary" htmlType="submit">
                            Submit
                                </Button>}
                </Form.Item>
            </Form>
        </div>
    )
}

export default Profileinfo
