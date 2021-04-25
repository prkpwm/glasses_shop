import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Card, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from 'axios';
import { Link } from "react-router-dom";

var Crypto = require('crypto-js')

function Login() {
  const [isLoginFail, setisLoginFail] = useState({ status: "", word: "" });
  const onFinish = async (values) => {
    console.log(values)
    let body = { email: values.Email};
    let message = ""
    await axios.get("/changepassword", { params: { body } })
      .then(response => {
        message = response.data
        console.log(message)
      })
      if (message == "404") {
        setisLoginFail({ status: "error", word: "invalid email." });
      }
  };

  //   const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  //   };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <Col span={16}>
          <Card
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              borderRadius: 25,
            }}
          >
            <div style={{ fontSize: 25, color: "orange", textAlign: "center" }}>
              กรอก Email
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
                name="Email"
                label={<span style={{ fontSize: 14 }}>E-mail</span>}
                rules={[
                  { required: true, message: "Please input your E-mail!" },
                ]}
              >
                <Input
                  style={{ padding: 10, borderRadius: 25 }}
                  pattern="^[a-zA-Z0-9\.]{1,}@[a-zA-Z\.]{1,}.[a-zA-Z0-9]{1,4}$"
                  placeholder="E-mail"
                />
              </Form.Item>
              <Form.Item>
                <button className="myButton" htmlType="submit">
                send
                </button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
