import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Radio  } from "antd";

function Pay() {
    const [value, setValue] = useState(1);
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    return (
        <div >
        <div style={{ fontSize: 30,textAlign:"center" }}>ชำระเงิน</div><br/><br/>
        <Row>
            <Col span={6}/>
            <Col span={6}>
            เลือกช่องทางการชำระเงิน<br/><br/>
            <Radio.Group onChange={onChange} value={value}>
            <Card style={{borderRadius:20}}>
                <Radio value={1}>ชำระเงินปลายทาง</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={2}>True Wallet</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={3}>บัตรเครดิต/บัตรเดบิต</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={4}>โอนเงินเข้าบัญชีพร้อมเพย์/ธนาคาร</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={5}>แสกน QR พร้อมเพย์</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={6}>PayPal</Radio >
            </Card>
            </Radio.Group>
            </Col>
            <Col span={1}/>
            <Col span={6}>
            <br/><br/>
            <Card style={{borderRadius:20,backgroundColor: "#DCDCDC"}}>
                สรุปรายการสั่งซื้อ ... รายการ
            </Card><br/>
            <Card style={{borderRadius:20,textAlign:"center", backgroundColor: "#DCDCDC"}}>
                <span style={{color:"red",fontSize:20}}>ยอดชำระ ฿957</span><br/><br/>
                <button className="myButton">ชำระเงิน</button>
            </Card>
            </Col>
        </Row>
        
        </div>
    )
}

export default Pay
