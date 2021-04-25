import React, { useEffect, useState } from 'react';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Row, Col, Card, Checkbox, Divider, notification, message } from "antd";
import axios from 'axios';
import { Link } from "react-router-dom";

var Crypto = require('crypto-js')

function Login() {


    const onFinish = async (values) => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams.get('uid'));
        if (values.Password == values.RetypePassword) {

            let body = {
                pwd: Crypto.SHA256(values.Password).toString(),
                uid: urlParams.get('uid')
            };
            let message = ""
            await axios.get('/updatepassword', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response: ", response)
                })
                .catch(err => console.log(err));
            if (message == "Success"){
                window.location.replace("Login")
            }   
        }
        else {
            return notification["error"]({
                message: 'Password ไม่ตรงกับ Retype Password',
            });
        }
    };
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <Col span={8}>
          <Card
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              borderRadius: 25,
            }}
          >
            <div style={{ fontSize: 25, color: "orange", textAlign: "center" }}>
              เปลียนรหัสผ่าน
            </div>
            <br />
            <Form
              name="normal_login"
              className="login-form"
              action="/verify" enctype="multipart/form-data" method="POST"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                hasFeedback
                name="Password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}

              >
                <Input
                  style={{ padding: 10, borderRadius: 25 }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  pattern="^[A-Za-z0-9]{8,}$"
                  title="Eight or more characters"
                />
              </Form.Item>

              <Form.Item
                        name="RetypePassword"
                        label={<span style={{ fontSize: 14 }}>Retype Password</span>}
                        rules={[
                            { required: true, message: "Please input your Password!" },
                        ]}
                    >
                        <Input
                            style={{ padding: 10, borderRadius: 25 }}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
              <Form.Item>
                <button className="myButton" htmlType="submit">
                  summit
                </button>
                {/* Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
