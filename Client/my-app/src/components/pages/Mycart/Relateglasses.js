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
const blueright = {
    backgroundColor: "#f2f4f4",
    color: "#000000",
    float: 'right',
};

function Relateglasses() {
    const [datapopulate, setdatapopulate] = useState([[]]);
    const [datapopup, setdatapopup] = useState([[]]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        axios.get("/getpopulate")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                setdatapopulate(datas)
            })
    }, [])

    async function getitem(id) {
        console.log(id)
        await axios.get("/getinfobyid/iteminfo/GID/" + id + "")
            .then(res => {
                // const datas = res.data[0];
                const datas = res.data;
                console.log(datas)
                setdatapopup(datas)
            })

        let body = {
            iid: id,
            uid: localStorage.getItem('uid'),
        };
        let message = ""
        axios.get('/insert_statistics/', { params: { body } })
            .then(response => {
                message = response.data
                console.log("response: ", response)

            })
            .catch(err => console.log(err));
        if (message == "Success") {

        }
        else {
            // return notification["error"]({
            //   message: 'something wrong',
            // });
        }
        setVisible(true)
    }
    const onClickHandler = (data) => {

    }

    return (
        <div>
            <div style={{ fontSize: 30 }}>แว่นที่มักจะซื้อด้วยกัน</div>
            <Row gutter={[32, 32]} style={{ width: "60%", marginLeft: "20%", marginTop: 20 }}>
                {
                    datapopulate.map(data =>
                        <Col xs={24} lg={8} xl={8}>
                            {console.log(data)}
                            <Card type="inner"
                                hoverable
                                cover={<img alt="glasses!!" onClick={() => getitem(data[2])} src={data[7]} width="95%" height="150" />}
                            >
                                <div onClick={() => getitem(data[2])}>
                                    <Meta title={data[5]} description={"Category : " + data[8]} /><br />
                                    <p><h7 style={fontLeft}>{data[9]} </h7> <h7 style={fontRight}>{data[6]} ฿</h7></p>
                                    <br />
                                </div>
                                <Button type="button" onClick={() => onClickHandler(data[2])} style={blue} >
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
                width="50%"
                footer={null}
            >
                {datapopup.map(data => (
                    < div style={{ padding: '20px 20px' }} >
                        <div id='img' style={{textAlign:"center"}}>
                            <img alt="glasses!!" src={data[3]} width="50%" height="150" />
                        </div>
                        <div>
                            <h3 >{data[1]} </h3>
                            <p style={{ float: 'right' }}>Category : {data[4]} </p>
                            <p >{data[5]}</p>
                            <p> Glasses are glasses .
                  The type of glasses is {data[4]} .
                  Just wear it on your head.
                  The whole world will be beautiful immediately </p>
                            <h4 style={{ textAlign: 'right' }}>{data[2]} ฿</h4>
                            <p style={{ textAlign: 'right' }}> AVAILABILITY: <b>IN STOCK </b></p>
                            <Button type="button" onClick={() => onClickHandler(data[0])} style={blueright}>
                                Add to cart
                   </Button>
                        </div>
                    </div>
                ))}
            </Modal>
        </div>
    )
}

export default Relateglasses
