import React from 'react';
import axios from 'axios';
import { Row, Col, Button, Card } from "antd";
const { Meta } = Card;
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right" };
const blue = {
  textAlign: "right",
  backgroundColor: "#330033",
  color: "#FFFFFF",
};

export default class PersonList extends React.Component {
  state = {
    datas: [[]]
  }

  // componentDidMount() {
  //   axios.get("/getinfo/iteminfo")
  //     .then(res => {
  //       const datas = res.data;
  //       console.log(datas)
  //       this.setState({ datas });
  //     })
  // }
  
  //Default sortby price min-max
  componentDidMount() {
    axios.get("/sortitem/iteminfo/price/asc")
      .then(res => {
        const datas = res.data;
        console.log(datas)
        this.setState({ datas });
      })
  }

  render() {
    const onChangeHandler = (event) => {
      var sortby = document.getElementById("sortby").value;
      console.log(sortby)
    }
    return (
      <div>
        <div style={{ textAlign: "right", paddingBottom: "20px" }}>
          <select id="sortby" name="sortby" onChange={onChangeHandler}>
            <option id="0">Sort by price (min-max)</option>
            <option id="1">Sort by price (max-min)</option>
            <option id="2">Sort by Name</option>
            <option id="3">Sort by Group</option>
          </select>
        </div>
        <Row gutter={[16, 24]}>
          {
            this.state.datas.map(data =>
              <Col className="gutter-row" xs={24} md={12} xl={6}>
                <Card
                  hoverable
                  cover={<img alt="glasses!!" src={data[3]} width="95%" height="150" />}>
                  <Meta title={data[1]} description="www.instagram.com" />
                  <p style={fontRight}>{data[2]} ฿</p>
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
}