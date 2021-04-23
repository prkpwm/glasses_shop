import './home.css'
import React from "react";
import { Row, Col, Card } from "antd";

function Home() {
  return (
    // <div style={{ padding: 24 }}>
    //   <Row gutter={[32, 32]}>
    //     <Col span={24}>
    //       <Card
    //         style={{
    //           marginRight: 10,
    //           borderColor: "#888888",
    //           borderWidth: 2,
    //           boxShadow: "2px 2px 1px 1px #888888",
    //           textAlign: "center",
    //           fontSize: 20,
    //           borderRadius: 20,
    //         }}
    //       >
    //         Glasses Shop
    //       </Card>
    //     </Col>
    //   </Row>

    //   <br />

    //   <Row gutter={[32, 32]}>
    //     <Col xs={24} xl={12}>
    //       <Card
    //         style={{
    //           marginRight: 10,
    //           borderColor: "#888888",
    //           borderWidth: 2,
    //           boxShadow: "2px 2px 1px 1px #888888",
    //           textAlign: "center",
    //           fontSize: 20,
    //           borderRadius: 20,
    //         }}
    //       >
    //         ตัวอย่างหน้าช่วยเลือกแว่น
    //       </Card>
    //     </Col>

    //     <Col xs={24} xl={12}>
    //       <Card
    //         style={{
    //           marginRight: 10,
    //           borderColor: "#888888",
    //           borderWidth: 2,
    //           boxShadow: "2px 2px 1px 1px #888888",
    //           textAlign: "center",
    //           fontSize: 20,
    //           borderRadius: 20,
    //         }}
    //       >
    //         Promotion แว่น
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>    

    <div class="Fcontainer">
      <div class='frame-nameshop'>
        <h1 class="style-nameshop">Glasses Shop</h1>
      </div>
      <br></br>
      <div class="frame-option">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row"  xs={24} md={24}  xl={12}>
            <div class="frame-chooseG">
              <h1 class="style-chooseG">ตัวอย่างหน้าช่วยเลือกแว่น</h1>
            </div>
          </Col>
          <br></br>
          <Col className="gutter-row" xs={24} md={24} xl={12}>
            <div class="frame-promotion">
              <h1 class="style-promotion">Promotion   แว่น</h1>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
