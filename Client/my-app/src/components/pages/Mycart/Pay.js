import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Radio, Modal, Divider } from "antd";
import axios from 'axios'




var id = ""
if (localStorage.getItem('isLogin') == "true") {
    id = localStorage.getItem('uid')
}
else {
    id = sessionStorage.getItem('uid')
}

function Pay() {
    const [value, setValue] = useState(1);
    const [loading, setloading] = useState(true);
    const [showorder, setshoworder] = useState({
        number: null,
        order: []
    });

    useEffect(() => {
        // let body = {
        //     uid: id,
        //     status: 'in-basket',
        // };
        // let message = ""
        const getdata = async () => {
            var dataincart = JSON.parse(localStorage.getItem('mycart'));
            var data = {
                number: dataincart.length,
                order: dataincart
            }
            setshoworder(data)
            setloading(false)
        }
        getdata()
    }, [])

    async function success() {
        var dataincart = JSON.parse(localStorage.getItem('mycart'));
        let body = {
            //  iid: data[0],
            uid: localStorage.getItem('uid'),
            //   itemprice: data[2],
            status: 'payed',
            //   quanlity: 1,
            orderid: null,
        };
        let message = ""

        // create orderid before insert in orderid
        await axios.get('/insert_history2/', { params: { body } })
            .then(response => {
                console.log("response insert history : ", response)
            })
            .catch(err => console.log(err));

        // get id from his
        await axios.get('/check_oderidinhis2/', { params: { body } })
            .then(response => {
                message = response.data
                console.log("response check oderid in his: ", response)
            })
            .catch(err => console.log(err));
            console.log(message)
        var count = 0;
        for (var i = 0; i < message.length; i++) {
            if (message[i][0] > count) {
                count = message[i][0]
            }
        }
        body.orderid = JSON.parse(count);

        for (var i = 0; i < dataincart.length; i++) {

            body.iid = dataincart[i].iid
            body.itemprice = dataincart[i].itemprice
            body.quanlity = dataincart[i].quanlity
            //insert into orderinfo
            await axios.get('/insert_orderinfo2/', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response insert orderinfo2: ", response)
                })
                .catch(err => console.log(err));

        }

        Modal.success({
            content: (
                <div>
                    <p>ทำรายการสำเร็จ</p>
                </div>
            ),
            onOk() { localStorage.removeItem("mycart"); window.location.replace("/") },
        });

    }


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div >
            <div style={{ fontSize: 30, textAlign: "center" }}>ชำระเงิน</div><br /><br />
            <Row>
                <Col span={5} />
                <Col span={7}>
                    เลือกช่องทางการชำระเงิน<br /><br />
                    <Radio.Group onChange={onChange} value={value}>
                        <Card style={{ borderRadius: 20 }}>
                            <Radio value={1}>ชำระเงินปลายทาง</Radio >
                        </Card>
                        <Card style={{ borderRadius: 20, marginTop: 20 }}>
                            <Radio value={2}>True Wallet</Radio >
                        </Card>
                        <Card style={{ borderRadius: 20, marginTop: 20 }}>
                            <Radio value={3}>บัตรเครดิต/บัตรเดบิต</Radio >
                        </Card>
                        <Card style={{ borderRadius: 20, marginTop: 20 }}>
                            <Radio value={4}>โอนเงินเข้าบัญชีพร้อมเพย์/ธนาคาร</Radio >
                        </Card>
                        <Card style={{ borderRadius: 20, marginTop: 20 }}>
                            <Radio value={5}>แสกน QR พร้อมเพย์</Radio >
                        </Card>
                        <Card style={{ borderRadius: 20, marginTop: 20 }}>
                            <Radio value={6}>PayPal</Radio >
                        </Card>
                    </Radio.Group>
                </Col>
                <Col span={1} />
                <Col span={7}>
                    <br /><br />
                    <Card style={{ borderRadius: 20, backgroundColor: "#DCDCDC" }}>
                        <div>สรุปรายการสั่งซื้อ {showorder.number} รายการ</div>
                        <Divider style={{ backgroundColor: "black" }} />
                        {showorder.order.map(item =>
                            <Row>
                                <Col span={8}>
                                    {item.code}
                                </Col>
                                <Col span={6}>
                                    จำนวน {item.quanlity}
                                </Col>
                                <Col>
                                    ราคา {new Intl.NumberFormat('en').format(item.itemprice * item.quanlity)} ฿
                    </Col>
                            </Row>
                        )}
                    </Card><br />
                    <Card style={{ borderRadius: 20, textAlign: "center", backgroundColor: "#DCDCDC" }}>
                        <span style={{ color: "red", fontSize: 20 }}>ยอดชำระ {new Intl.NumberFormat('en').format(showorder.order.map(item => item.itemprice * item.quanlity).reduce((a, b) => a + b, 0))} ฿</span><br /><br />
                        <button className="myButton" onClick={success}>ชำระเงิน</button>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Pay
