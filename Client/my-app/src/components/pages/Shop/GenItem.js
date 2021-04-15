import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "antd";
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right" };
const blue = {
  textAlign: "right",
  backgroundColor: "#330033",
  color: "#FFFFFF",
};

var testcard =<Col className="gutter-row" span={6}>
<div style={style} >
  <img
    src="http://localhost:3000/img/dumpGlasses.png"
    alt="glasses!!"
    width="95%"
    height="150"
  />
  <br />
  <a href="#">Glasses</a>
  <p style={fontRight}>1,000 ฿</p>
  <button type="button" style={blue}>
    Add to cart
  </button>
</div>
</Col>
function GenItem() {
  const [allcard, setallcard] = useState([testcard]);
  const addcard = () => {
    let card = [...allcard];
    card.push(testcard);
    setallcard(card);
    console.log(allcard);
  };
  useEffect(() => {
    let card = allcard;
    setallcard(card);
 }, [allcard])
  return (
    <div>
      <Button type="primary" onClick={() => {addcard();}}>
        Add 1 card
      </Button>
      <Row gutter={[16, 24]}>
          {allcard}
          </Row>
    </div>
  );
}

export default GenItem;
