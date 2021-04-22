import React, { useState } from "react";
import { Row, Col, Card, Avatar, Divider, Button, Modal } from "antd";
import Profileinfo from './Profileinfo'
function Profile() {
    const [showmodaladdpic, setshowmodaladdpic] = useState(false);
    const [dataprofilepic, setdataprofilepic] = useState();

    const showModal = () => {
        setshowmodaladdpic(true);
    };

    const handleOk = () => {
        setshowmodaladdpic(false);
    };

    const handleCancel = () => {
        setshowmodaladdpic(false);
    };
    const onChangeHandler = (event)=>{
        console.log(event.target.files[0])
        setdataprofilepic(event.target.files[0])
    }
    return (
        <div>
            <Card style={{ backgroundColor: "#DCDCDC", borderRadius: 20, fontSize: 25 }}>
                <Row>
                    <Col span={4} style={{ textAlign: "center" }}>
                        <Avatar src="/img/Userprofile/UserpicID_1.jpg" size={100} />
                        <br /><br />
                        <Button shape="round" type="primary" onClick={showModal}>อัพโหลด</Button>
                    </Col>
                    <Col span={1}>
                        <Divider type="vertical" style={{ backgroundColor: "black", height: "100%" }} />
                    </Col>
                    <Col span={18}>
                        <Profileinfo />
                    </Col>
                </Row>
            </Card>



            <Modal title="อัพโหลดรูปภาพ" visible={showmodaladdpic} onOk={handleOk} onCancel={handleCancel}>
            <input type="file" name="file" onChange={onChangeHandler}/>
      </Modal>

        </div>
    )
}

export default Profile
