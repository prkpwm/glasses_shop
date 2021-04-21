// import React from 'react'
// import { Row, Col, Card } from "antd";

// function ContactusHome() {
//     return (
//         <div style={{ padding: 10 }}>
//             <h1> รายชื่อผู้จัดทำ</h1>
//             <Row gutter={[32, 32]}>
//                 <Col className="gutter-row" xs={20} md={15} xl={6} span={10}>
//                     <Card
//                         style={{
//                             marginRight: 10,
//                             borderColor: "#888888",
//                             borderWidth: 2,
//                             boxShadow: "4px 4px 1px 1px #888888",
//                             textAlign: "center",
//                             fontSize: 20,
//                             borderRadius: 20,
//                         }}
//                     >
//                         <img src="http://localhost:3000/img/7.jpg" width="300"></img><br />
//                         ภาสินี เพชรสม 6004062610093 S.1 <br />
//                     ความรับชอบ :
//                     </Card>
//                 </Col>
//                 <Col className="gutter-row" xs={20} md={15} xl={6} span={10}>
//                     <Card
//                         style={{
//                             marginRight: 10,
//                             borderColor: "#888888",
//                             borderWidth: 2,
//                             boxShadow: "4px 4px 1px 1px #888888",
//                             textAlign: "center",
//                             fontSize: 20,
//                             borderRadius: 20,
//                         }}
//                     >
//                         <img src="http://localhost:3000/img/6.jpg" width="300"></img><br />
//                         นพกร อรพรตระกูล 6004062620030 S.1 <br />
//                     ความรับชอบ :
//                     </Card>
//                 </Col>
//                 <Col className="gutter-row" xs={20} md={15} xl={6} span={10}>
//                     <Card
//                         style={{
//                             marginRight: 10,
//                             borderColor: "#888888",
//                             borderWidth: 2,
//                             boxShadow: "4px 4px 1px 1px #888888",
//                             textAlign: "center",
//                             fontSize: 20,
//                             borderRadius: 20,
//                         }}
//                     >
//                         <img src="http://localhost:3000/img/8.jpg" width="300"></img><br />
//                     ภาคภูมิ ศรีเสน 6004062620048 S.1 <br />
//                     ความรับชอบ :  การติดต่อฐานข้อมูลและการจัดการข้อมูล , ปัญญาประดิษฐ์ในการแนะนำเว่นตา , Regular Expression
//                     </Card>
//                 </Col>
//                 <Col className="gutter-row" xs={20} md={15} xl={6} span={10}>
//                     <Card
//                         style={{
//                             marginRight: 10,
//                             borderColor: "#888888",
//                             borderWidth: 2,
//                             boxShadow: "4px 4px 1px 1px #888888",
//                             textAlign: "center",
//                             fontSize: 20,
//                             borderRadius: 20,
//                         }}
//                     >
//                         <img src="http://localhost:3000/img/5.jpg" width="300"></img><br />
//                         ประวีณา ดวงจันทร์ 6004062616334 S.2 <br />
//                     ความรับชอบ :

//                     </Card>
//                 </Col>
//             </Row>

import './ContactUs.css'
import { Row, Col } from 'antd';
import photo1 from '../Contactus/iconFemale.png';
import photo2 from '../Contactus/iconMen.png';

function ContactusHome() {
    return (

        <div class="Con-container">
            <h1 class="Con-text-head">Contact Us</h1>
            <br></br>
            <div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6} xs={24} md={12} xl={6}>
                        <div class="Con-styleimg-miow" >
                            <div><img src={photo1} width="180px" height="180px"></img></div>
                        </div>
                        <br></br>
                        <div class="Con-styletext">
                            <p>นางสาว ภาสินี เพชรสม</p>
                            <p>6004062610093</p>
                            <p>sec.1</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6} xs={24} md={12} xl={6}>
                        <div class="Con-styleimg-not" >
                                <div><img src={photo2} width="180px" height="180px"></img></div>
                        </div>
                        <br></br>
                        <div class="Con-styletext">
                            <p>นาย นพกร อรพรตระกูล</p>
                            <p>6004062620030</p>
                            <p>sec.1</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6} xs={24} md={12} xl={6}>
                        <div class="Con-styleimg-master" >
                            <div><img src={photo2} width="180px" height="180px"></img></div>
                        </div>
                        <br></br>
                        <div class="Con-styletext">
                            <p>นาย ภาคภูมิ ศรีเสน</p>
                            <p> 6004062620048</p>
                            <p>sec.1</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6} xs={24} md={12} xl={6}>
                        <div class="Con-styleimg-aum" >
                            <div><img src={photo1} width="180px" height="180px"></img></div>
                        </div>
                        <br></br>
                        <div class="Con-styletext">
                            <p>นางสาว ประวีณา ดวงจันทร์</p>
                            <p>6004062616334</p>
                            <p>sec.2</p>
                        </div>
                    </Col>
                </Row>
                
            </div>
           
        </div>
    )
}

export default ContactusHome
