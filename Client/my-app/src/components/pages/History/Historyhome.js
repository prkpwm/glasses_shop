import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Tag, Modal, Card, Divider, Space, Button } from "antd";
import axios from 'axios';
var dayjs = require('dayjs')

const columns = [
    {
        title: 'วันที่',
        dataIndex: 'date',
        key: 'date',
        // render: text => <a>{text}</a>,
    },
    {
        title: 'สถานะ',
        dataIndex: 'status',
        key: 'status',
    },
];

var xmlhttp = new XMLHttpRequest();

var id = ""
if (localStorage.getItem('isLogin') == "true") {
    id = localStorage.getItem('uid')
}
else {
    id = sessionStorage.getItem('uid')
}

function Historyhome() {
    const [dataIntable, setdataIntable] = useState([]);



    useEffect(() => {
        xmlhttp.open("GET", "/getinfobyid/history/uid/" + id);
        xmlhttp.send();
        // const data = [{
        //     date: "1/1/2564",
        //     item: "4",
        //     price: "1000",
        // }, {
        //     date: "2/1/2564",
        //     item: "3",
        //     price: "600",
        // },
        // ]
        // setdataIntable(data)
    }, [])
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var tabledata = []
            for (var i = 0; i < data.length; i++) {
                tabledata.push({
                    date: dayjs(data[i][4]).format('DD/MM/YYYY'),
                    status: data[i][3],
                })
            }
            setdataIntable(tabledata)
        }
    }
    return (
        <div>
            <Card title="ประวัติการซื้อ"
                style={{ borderRadius: 20 }}
                headStyle={{ backgroundColor: "#f0f2f5", borderRadius: "20px 20px 0px 0px ", textAlign: "center" }}>
                <Table columns={columns} dataSource={dataIntable} pagination={{ pageSize: 3 }}/>
            </Card>
        </div>
    )
}

export default Historyhome
