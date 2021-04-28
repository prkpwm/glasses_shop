import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Tag, Modal, Card, Divider, Space, Button } from "antd";
import axios from 'axios';

const columns = [
    {
        title: 'วันที่',
        dataIndex: 'date',
        key: 'date',
        // render: text => <a>{text}</a>,
    },
    {
        title: 'จำนวน',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: 'ราคา',
        dataIndex: 'price',
        key: 'price',
    },
];

var xmlhttp = new XMLHttpRequest();
function Historyhome() {
    const [dataIntable, setdataIntable] = useState([]);



    useEffect(() => {
        const data = [{
            date: "1/1/2564",
            item: "4",
            price: "1000",
        }, {
            date: "2/1/2564",
            item: "3",
            price: "600",
        },
        ]
        setdataIntable(data)
    }, [])
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
            <Button onClick={() => { useajax() }}>test</Button>
            <Card title="ประวัติการซื้อ"
                style={{ borderRadius: 20 }}
                headStyle={{ backgroundColor: "#f0f2f5", borderRadius: "20px 20px 0px 0px ", textAlign: "center" }}>
                <Table columns={columns} dataSource={dataIntable} />
            </Card>
        </div>
    )
}

export default Historyhome
