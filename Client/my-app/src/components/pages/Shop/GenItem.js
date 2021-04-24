import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Button, Card, Select, Modal } from "antd";
const { Meta } = Card;
const { Option } = Select;
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right", float: "right", fontSize: "12px" };
const fontLeft = { textAlign: "left", float: "left", color: "grey", fontSize: "12px" };
const blue = {
  textAlign: "right",
  backgroundColor: "#f2f4f4",
  color: "#000000",
};


function GenItem() {
  const [datas, setdatas] = useState([[]]);
  const [datapopup, setdatapopup] = useState([[]]);

  useEffect(() => {
    axios.get("/sortitem/iteminfo/price/asc")
      .then(res => {
        const datas = res.data;
        setdatas(datas)
      })
  }, [])

  const [visible, setVisible] = useState(false);

  const onChangeHandler = (event) => {
    var column;
    var order;
    switch (Number(event)) {
      case 0:
        column = "price"
        order = "asc"
        break;
      case 1:
        column = "price"
        order = "desc"
        break;
      case 2:
        column = "name"
        order = "asc"
        break;
      case 3:
        column = "typeid"
        order = "asc"
      default:
    }
    axios.get("/sortitem/iteminfo/" + column + "/" + order)
      .then(res => {
        const datas = res.data;
        setdatas(datas)
      })
  }

  const onClickHandler = (data) =>{

  }

  function getitem(id) {
    console.log(id)
    axios.get("/getinfobyid/iteminfo/GID/"+id+"")
        .then(res => {
            const datas = res.data[0];
            console.log(datas)
            setdatapopup(datas)
        })
        setVisible(true)
  }
  return (
    <div>
      <div style={{ textAlign: "right", paddingBottom: "20px" }} >
        <Select id="sortby" name="sortby" style={{ width: "250px" }} defaultValue="0" onChange={onChangeHandler}>
          <Option value="0">Sort by price (min-max)</Option>
          <Option value="1">Sort by price (max-min)</Option>
          <Option value="2">Sort by Name</Option>
          <Option value="3">Sort by Group</Option>
        </Select>
      </div>
      <Row gutter={[16, 24]}>
        {
          datas.map(data =>
            <Col className="gutter-row" xs={24} md={12} xl={6}>
              <Card
                hoverable
                cover={<img alt="glasses!!" src={data[3]} onClick={() => getitem(data[0])} width="95%" height="150" />}
              >
                <div onClick={() => getitem(data[0])}>
                  <Meta title={data[1]} description={"Category : " + data[4]} /><br />
                  <p><h7 style={fontLeft}>{data[5]} </h7> <h7 style={fontRight}>{data[2]} ฿</h7></p>
                  <br />
                </div>

                <Button type="button" onClick={() => onClickHandler(data[0])} style={blue}>
                  Add to cart
                  </Button>
              </Card>
            </Col>
          )
        }
      </Row>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        {datapopup.map(data => (
          <p>{data}</p>
        ))}
            
      </Modal>
    </div>
  )
}

export default GenItem
