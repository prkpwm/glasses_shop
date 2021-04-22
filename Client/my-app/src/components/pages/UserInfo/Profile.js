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

    const loadimge = (path) => {

    }


    return (
        <div>
            <Card style={{ backgroundColor: "#DCDCDC", borderRadius: 20, fontSize: 25 }}>
                <Row>
                    <Col span={4} style={{ textAlign: "center" }}>
                        <Avatar src={"/loadimages/"+localStorage.getItem('path')} size={100} />
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
            
            <form action={"/saveimages/"+localStorage.getItem('uid')} method="POST" enctype="multipart/form-data">
                <input type="file" name="file" onChange={onChangeHandler}/>
                <input type="submit"/>
            </form>
      </Modal>

        </div>
    )
}

export default Profile
