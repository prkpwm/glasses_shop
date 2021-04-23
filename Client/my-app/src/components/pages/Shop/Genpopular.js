import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Button, Card } from "antd";
const { Meta } = Card;
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right", float: "right", fontSize: "12px" };
const fontLeft = { textAlign: "left", float: "left", color: "grey", fontSize: "12px" };
const blue = {
    textAlign: "right",
    backgroundColor: "#f2f4f4",
    color: "#000000",
};

function Genpopular() {
    const [datas, setdatas] = useState([[]]);
    useEffect(() => {
        axios.get("/getpopulate")
            .then(res => {
                const datas = res.data;
                setdatas(datas)
            })
    }, [])


    return (
        <div>
            <Card title="Populate" extra={<a href="#">More</a>}>
                {
                    datas.map(data =>
                        <Card type="inner"
                            hoverable
                            cover={<img alt="glasses!!" src={data[7]} width="95%" height="150" />
                            }>
                            <Meta title={data[5]} description={"Group : " + data[11]} /><br />
                            <p><h7 style={fontLeft}>{data[9]} </h7> <h7 style={fontRight}>{data[6]} ฿</h7></p>
                            <br />
                            <Button type="button" style={blue}>
                                Add to cart
                          </Button>
                        </Card>
                    )
                }
            </Card>
        </div>
    )
}
export default Genpopular