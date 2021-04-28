import React, { useEffect, useState } from 'react';
import { List, Avatar, Space, Button, Card,Row,Col,Modal,Spin } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from 'axios'
import Relateglasses from './Relateglasses'
const { Meta } = Card;



function Mycarthome() {
    const [datainlist, setdatainlist] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        var data = data = [
            {
                title: 'Glass 1',
                price: '100 ฿',
                number: 1,
                id: 1,
            },
            {
                title: 'Glass 2',
                price: '200 ฿',
                number: 3,
                id: 2,
            },
            {
                title: 'Glass 3',
                price: '300 ฿',
                number: 2,
                id: 3,
            },
            {
                title: 'Glass 4',
                price: '400 ฿',
                number: 1,
                id: 4,
            },
        ]
        setdatainlist(data)
        setloading(false)
    }, [])
    const deletelist = async (x) => {
        console.log(x)
        var data = [...datainlist]
        for(var i=0;i<data.length;i++){
            if(x==data[i].id){
                data.splice(i, 1)
                break
            }
        }
        setdatainlist(data)
    }

    const changenumberlist = async (x,count) => {
        console.log(x)
        var data = [...datainlist]
        for(var i=0;i<data.length;i++){
            if(x==data[i].id){
                if(count=="+"){
                    data[i].number++
                }
                else if(count=="-"){
                    data[i].number--
                }
                break
            }
        }
        setdatainlist(data)
    }

    

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 30 }}>ตะกร้า</div>
            <List loading={loading}
                style={{ width: "60%", marginLeft: "20%", textAlign: "left" }}
                itemLayout="horizontal"
                dataSource={datainlist}
                renderItem={item => (
                    <List.Item
                        actions={[<Space style={{ fontSize: 15 }}>
                            <a><Avatar onClick={()=>{changenumberlist(item.id,"-")}}>-</Avatar></a>
                            <Avatar>{item.number}</Avatar>
                            <a><Avatar onClick={()=>{changenumberlist(item.id,"+")}}>+</Avatar></a>
                            </Space>
                        ,<Button type="danger" shape="round" onClick={()=>{deletelist(item.id)}}>
                        <Space style={{ fontSize: 15 }}>
                            <DeleteOutlined />ลบ
                            </Space>
                    </Button>]}>
                        <List.Item.Meta
                            avatar={<Avatar shape="square" src="/img/dumpGlasses.png" />}
                            title={<span>{item.title}</span>}
                            description={<span style={{ color: "green" }}>{item.price}</span>}
                        />
                    </List.Item>
                )}
            />
            <br />
            <Link to="/GlassesShop/Shopping" style={{ fontSize: 20, color: "green" }}>เลือกซื้อแว่นต่อ</Link>
            <br /><br />

            <Card style={{ backgroundColor: "#DCDCDC", fontSize: 30, width: "60%", marginLeft: "20%" }}>
                ยอดชำระ ฿1000<br />
                <Button> <Link to="/GlassesShop/Pay">ไปหน้าชำระเงิน</Link></Button>
            </Card>
            <br />
            <Relateglasses/>
        </div>
    )
}

export default Mycarthome
