import React from "react";
import { Row, Col, Card } from "antd";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Card
            style={{
              marginRight: 10,
              borderColor: "#888888",
              borderWidth: 2,
              boxShadow: "2px 2px 1px 1px #888888",
              textAlign: "center",
              fontSize: 20,
              borderRadius: 20,
            }}
          >
            Glass Shop
          </Card>
        </Col>
      </Row>

      <br />

      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
          <Card
            style={{
              marginRight: 10,
              borderColor: "#888888",
              borderWidth: 2,
              boxShadow: "2px 2px 1px 1px #888888",
              textAlign: "center",
              fontSize: 20,
              borderRadius: 20,
            }}
          >
            ตัวอย่างหน้าช่วยเลือกแว่น
          </Card>
        </Col>

        <Col xs={24} xl={12}>
          <Card
            style={{
              marginRight: 10,
              borderColor: "#888888",
              borderWidth: 2,
              boxShadow: "2px 2px 1px 1px #888888",
              textAlign: "center",
              fontSize: 20,
              borderRadius: 20,
            }}
          >
            Promotion แว่น
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
