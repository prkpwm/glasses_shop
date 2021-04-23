import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Button, Card, Select } from "antd";
const { Meta } = Card;
const { Option } = Select;
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right" ,float: "right",fontSize: "12px"};
const fontLeft = { textAlign: "left",float: "left" ,color:"grey",fontSize: "12px"};
const blue = {
  textAlign: "right",
  backgroundColor: "#330033",
  color: "#FFFFFF",
};


function GenItem() {
  const [datas, setdatas] = useState([[]]);

  useEffect(() => {
    axios.get("/sortitem2/iteminfo/price/asc")
      .then(res => {
        const datas = res.data;
        console.log(datas)
        setdatas(datas)
      })
  }, [])


  const onChangeHandler = (event) => {
    console.log(event);
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
    axios.get("/sortitem2/iteminfo/" + column + "/" + order)
      .then(res => {
        const datas = res.data;
        console.log(datas)
        setdatas(datas)
      })
  }
  return (
    <div>
      <div style={{ textAlign: "right", paddingBottom: "20px" }}>
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
                cover={<img alt="glasses!!" src={data[3]} width="95%" height="150" />}>
                <Meta title={data[1]} description={"Group : " + data[7]} /><br/>
                    <p><h7 style={fontLeft}>{data[5]} </h7> <h7 style={fontRight}>{data[2]} ฿</h7></p>
                    <br/>
                <Button type="button" style={blue}>
                  Add to cart
                  </Button>
              </Card>
            </Col>
          )
        }
      </Row>
    </div>
  )
}

export default GenItem
