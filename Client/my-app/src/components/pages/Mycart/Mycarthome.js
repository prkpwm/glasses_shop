import React, { useEffect, useState } from 'react';
import { List, Avatar, Space, Button, Card, Row, Col, Modal, Spin } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from 'axios'
import Relateglasses from './Relateglasses'
const { Meta } = Card;



var id = ""
if (localStorage.getItem('isLogin') == "true") {
    id = localStorage.getItem('uid')
}
else {
    id = sessionStorage.getItem('uid')
}
function Mycarthome() {
    const [datainlist, setdatainlist] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        let body = {
            uid: id,
            status: 'in-basket',
        };
        let message = ""
        const getdata = async () => {
            await axios.get('/getbasketitem/', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response: ", response)
                })
                .catch(err => console.log(err));
            if (message != "fail") {
                var data = []
                for (var i = 0; i < message.length; i++) {
                    data.push({
                        title: message[i][3],
                        price: message[i][4] ,
                        number: message[i][2],
                        path:message[i][5],
                        id: i+1,
                    })
                }
                setdatainlist(data)
                setloading(false)
            }
        }
        getdata()
    }, [])
    const deletelist = async (x) => {
        console.log(x)
        var data = [...datainlist]
        for (var i = 0; i < data.length; i++) {
            if (x == data[i].id) {
                data.splice(i, 1)
                break
            }
        }
        setdatainlist(data)
    }

    const changenumberlist = async (x, count) => {
        console.log(x)
        var data = [...datainlist]
        for (var i = 0; i < data.length; i++) {
            if (x == data[i].id) {
                if (count == "+") {
                    data[i].number++
                }
                else if (count == "-") {
                    data[i].number--
                }
                break
            }
        }
        setdatainlist(data)
    }



    return (
        <Row >
        <Col xs={0} md={2} lg={3} xl={4}/>
            <Col xs={24} md={20} lg={18} xl={16} >
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 30 }}>ตะกร้า</div>
            <List loading={loading}
                style={{ textAlign: "left" }}
                itemLayout="horizontal"
                dataSource={datainlist}
                renderItem={item => (
                    <List.Item
                        actions={[<Space style={{ fontSize: 15 }}>
                            {item.number>1?<a><Avatar onClick={() => { changenumberlist(item.id, "-") }}>-</Avatar></a>
                            :<Avatar>-</Avatar>}
                            
                            <Avatar style={{ backgroundColor: "white", color: "black" }}>{item.number}</Avatar>
                            <a><Avatar onClick={() => { changenumberlist(item.id, "+") }}>+</Avatar></a>
                        </Space>
                            , <Button type="danger" shape="round" onClick={() => { deletelist(item.id) }}>
                            <Space style={{ fontSize: 15 }}>
                                <DeleteOutlined />ลบ
                            </Space>
                        </Button>]}>
                        <List.Item.Meta
                            avatar={<img style={{width:60,height:"auto",paddingTop:"25%"}} src={item.path}/>}
                            title={<span>{item.title}</span>}
                            description={
                                <div>
                                <span >ราคา {new Intl.NumberFormat('en').format(item.price)} ฿</span><br/>
                            <span style={{ color: "green" }}>รวม : {new Intl.NumberFormat('en').format(item.price*item.number)} ฿</span>
                            </div>
                        }
                        />
                    </List.Item>
                )}
            />
            <br />
            <Link to="/GlassesShop/Shopping" style={{ fontSize: 20, color: "green" }}>เลือกซื้อแว่นต่อ</Link>
            <br /><br />

            <Card style={{ backgroundColor: "#DCDCDC", fontSize: 30}}>
                ยอดชำระ {new Intl.NumberFormat('en').format(datainlist.map(item=>item.price*item.number).reduce((a, b) => a + b, 0))} ฿
                <br />
                <Button> <Link to="/GlassesShop/Pay">ไปหน้าชำระเงิน</Link></Button>
            </Card>
            <br />
            <Relateglasses />
        </div>
        </Col>
        </Row>
    )
}

export default Mycarthome
