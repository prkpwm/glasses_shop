import React from 'react'
import { List, Avatar, Space, Button, Card,Row,Col } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Meta } = Card;

const data = [
    {
        title: 'Glass 1',
        price: '100 ฿',
    },
    {
        title: 'Glass 2',
        price: '200 ฿',
    },
    {
        title: 'Glass 3',
        price: '300 ฿',
    },
    {
        title: 'Glass 4',
        price: '400 ฿',
    },
];


function Mycarthome() {
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 30 }}>ตะกร้า</div>
            <List
                style={{ width: "60%", marginLeft: "20%", textAlign: "left" }}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[<Button type="danger" shape="round">
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
            <Link to="/GlassShop/Shopping" style={{ fontSize: 20, color: "green" }}>เลือกซื้อแว่นต่อ</Link>
            <br /><br />

            <Card style={{ backgroundColor: "#DCDCDC", fontSize: 30, width: "60%", marginLeft: "20%" }}>
                ยอดชำระ ฿1000<br />
                <Button>ไปหน้าชำระเงิน</Button>
            </Card>
            <br />
            <div style={{ fontSize: 30 }}>แว่นที่มักจะซื้อด้วยกัน</div>
            <Row gutter={[32, 32]} style={{ width: "60%", marginLeft: "20%",marginTop:20}}>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Mycarthome
