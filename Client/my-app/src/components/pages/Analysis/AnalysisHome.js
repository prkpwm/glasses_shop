import React, { useState } from "react";
import { Row, Col, Card, Avatar, Divider, Button, Modal } from "antd";
import PieCharted from './PieCharted.js';
import BarCharted from "./BarCharted.js";
function Analysis() {

    return (
        <div>
            {localStorage.getItem('role') != 1 ? window.location.replace("Login") : ""}
            <div>
                <Row>
                    <Col span={8}><PieCharted /></Col>
                    <Col span={8}><PieCharted /></Col>
                    <Col span={8}><PieCharted /></Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}><PieCharted /></Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        </div>
    )
}

export default Analysis
