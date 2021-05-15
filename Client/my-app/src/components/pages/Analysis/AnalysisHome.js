import React, { useState } from "react";
import { Row, Col, Card, Avatar, Divider, Button, Modal } from "antd";
import PieCharted from './PieCharted.js';
import BarCharted from "./BarCharted.js";
const textname = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
};

function Analysis() {

    return (
        <div>
            
            <div>
                <Row>
                    <Col span={8} xs={24} md={24}  xl={8} style={textname}>จำนวนยอดขายของแว่นแต่ละประเภท<PieCharted /></Col>
                    <Col span={8} xs={24} md={24}  xl={8} style={textname}>จำนวนยอดคนสนใจของแว่นแต่ละประเภท<PieCharted /></Col>
                    <Col span={8} xs={24} md={24}  xl={8} style={textname}>ช่วงเวลาที่คนเข้าชมสินคัา<PieCharted /></Col>
                </Row>
            </div>
            <br></br>
            <div>
                <Row>
                    <Col span={8} xl={4}></Col>
                    <Col span={8} xs={24} md={24}  xl={8} style={textname}>ช่วงอายุสนใจของแว่นแต่ละประเภท<PieCharted /></Col>
                    <Col span={8} xs={24} md={24}  xl={8} style={textname}>เพศสนใจของแว่นแต่ละประเภท<PieCharted /></Col>
                    <Col span={8} xl={4}></Col>
                </Row>
            </div>
        </div>
    )
}

export default Analysis
