import React, { useEffect, useState } from 'react';
import { List, Avatar, Space, Button, Card, Row, Col, Modal } from 'antd';
import axios from 'axios'
const { Meta } = Card;

const fontRight = { textAlign: "right", float: "right", fontSize: "12px" };
const fontLeft = { textAlign: "left", float: "left", color: "grey", fontSize: "12px" };
const blue = {
    textAlign: "right",
    backgroundColor: "#f2f4f4",
    color: "#000000",
};

function Relateglasses() {
    const [datapopulate, setdatapopulate] = useState([[]]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        axios.get("/getpopulate")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                setdatapopulate(datas)
            })
    }, [])

    function getitem(id) {
        // axios.get("/getinfobyid/iteminfo/GID/"+id+"")
        //     .then(res => {
        //         const datas = res.data;
        //         console.log(datas)
        //         setdatas(datas)
        //     })
        setVisible(true)
    }

    return (
        <div>
            <div style={{ fontSize: 30 }}>แว่นที่มักจะซื้อด้วยกัน</div>
            <Row gutter={[32, 32]} style={{ width: "60%", marginLeft: "20%", marginTop: 20 }}>
                {
                    datapopulate.map(data =>
                        <Col xs={24} lg={8} xl={8}>
                            <Card type="inner"
                                hoverable
                                cover={<img alt="glasses!!" onClick={() => setVisible(true)} src={data[7]} width="95%" height="150" />}
                            >
                                <div onClick={() => getitem(data[0])}>
                                    <Meta title={data[5]} description={"Category : " + data[12]} /><br />
                                    <p><h7 style={fontLeft}>{data[10]} </h7> <h7 style={fontRight}>{data[6]} ฿</h7></p>
                                    <br />
                                </div>
                                <Button type="button" onClick={() => console.log('Button')} style={blue} >
                                    Add to cart
                                </Button>

                            </Card>
                        </Col>
                    )
                }

            </Row>


            <Modal
                title="Modal 1000px width"
                style={{ top: 50 }}
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width="60%"
                footer={null}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </div>
    )
}

export default Relateglasses
