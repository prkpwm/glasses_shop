import React from 'react'
import { Row, Col, Card, Radio  } from "antd";

function Pay() {
    return (
        <div >
        <div style={{ fontSize: 30,textAlign:"center" }}>ชำระเงิน</div><br/><br/>
        <Row>
            <Col span={6}/>
            <Col span={6}>
            เลือกช่องทางการชำระเงิน<br/><br/>
            <Card style={{borderRadius:20}}>
                <Radio>ชำระเงินปลายทาง</Radio >
            </Card><br/>
            <Card style={{borderRadius:20}}>
                <Radio>True Wallet</Radio >
            </Card>
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
