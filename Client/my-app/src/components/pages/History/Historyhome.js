import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Tag, Modal, Card, Divider, Space, Button } from "antd";
import axios from 'axios';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        textAlign: "center",
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
];

var xmlhttp = new XMLHttpRequest();
function Historyhome() {
    const [dataIntable, setdataIntable] = useState([]);

    const useajax = () => {
        xmlhttp.open("GET", "/getpopulate");
        xmlhttp.send();
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
        }
    }
    return (
        <div>
            <Button onClick={()=>{useajax()}}>test</Button>
            <Card title="ประวัติการซื้อ"
                style={{ borderRadius: 20 }}
                headStyle={{ backgroundColor: "#f0f2f5", borderRadius: "20px 20px 0px 0px ", textAlign: "center" }}>
                <Table columns={columns} dataSource={dataIntable} />
            </Card>
        </div>
    )
}

export default Historyhome
