import React from 'react'
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
                    <Col className="gutter-row" span={6}>
                        <div class="Con-styleimg-miow" >
                            <div><img src={photo1} width="180px" height="180px"></img></div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div class="Con-styleimg-not" >
                            <div><img src={photo2} width="180px" height="180px"></img></div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div class="Con-styleimg-master" >
                            <div><img src={photo2} width="180px" height="180px"></img></div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <div class="Con-styleimg-aum" >
                            <div><img src={photo1} width="180px" height="180px"></img></div>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <div class="Con-styletext">
                            <p>นางสาว ภาสินี เพชรสม</p>
                            <p>6004062610093</p>
                            <p>sec.1</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div class="Con-styletext">
                            <p>นาย นพกร อรพรตระกูล</p>
                            <p>6004062620030</p>
                            <p>sec.1</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div class="Con-styletext">
                            <p>นาย ภาคภูมิ ศรีเสน</p>
                            <p> 6004062620048</p>
                            <p>sec.1</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
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
