import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Radio ,Modal, Divider } from "antd";
import axios from 'axios'

function success() {
    Modal.success({
        content: (
          <div>
            <p>ทำรายการสำเร็จ</p>
          </div>
        ),
        onOk() {window.location.replace("/")},
      });
  }


  var id = ""
  if (localStorage.getItem('isLogin') == "true") {
      id = localStorage.getItem('uid')
  }
  else {
      id = sessionStorage.getItem('uid')
  }

function Pay() {
    const [value, setValue] = useState(1);
    const [loading, setloading] = useState(true);
    const [showorder, setshoworder] = useState({
        number:"sdsd",
        order:[{
            a:"sadf"
        },
        {
            a:"sadf"
        },
        {
            a:"sadf"
        },]
    });


    
    useEffect(() => {
        let body = {
            uid: id,
            status: 'in-basket',
        };
        let message = ""
        const getdata = async () => {
            await axios.get('/getbasketitem/', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response: ", response)
                })
                .catch(err => console.log(err));
            if (message != "fail") {
                var data1 = []
                for (var i = 0; i < message.length; i++) {
                    data1.push({
                        title: message[i][3],
                        price: message[i][4] ,
                        number: message[i][2],
                        path:message[i][5],
                        id: i+1,
                    })
                }
                var data = {
                    number:message.length,
                    order:data1
                }
                setshoworder(data)
                setloading(false)


        // var cookie = ["aaaaa", '=', JSON.stringify(data), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
        // document.cookie = cookie;

        var testObject = [{ 'URL': 1, 'TITLE': 2 },{ 'URL': 3, 'TITLE': 4 }];
localStorage.setItem('testObject', JSON.stringify(testObject));
var retrievedObject = localStorage.getItem('testObject');
console.log('retrievedObject: ', JSON.parse(retrievedObject));

            }
        }
        getdata()
    }, [])

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        // var result = JSON.parse()
        // console.log(result)
      };
    return (
        <div >
        <div style={{ fontSize: 30,textAlign:"center" }}>ชำระเงิน</div><br/><br/>
        <Row>
            <Col span={5}/>
            <Col span={7}>
            เลือกช่องทางการชำระเงิน<br/><br/>
            <Radio.Group onChange={onChange} value={value}>
            <Card style={{borderRadius:20}}>
                <Radio value={1}>ชำระเงินปลายทาง</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={2}>True Wallet</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={3}>บัตรเครดิต/บัตรเดบิต</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={4}>โอนเงินเข้าบัญชีพร้อมเพย์/ธนาคาร</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={5}>แสกน QR พร้อมเพย์</Radio >
            </Card>
            <Card style={{borderRadius:20,marginTop:20}}>
                <Radio value={6}>PayPal</Radio >
            </Card>
            </Radio.Group>
            </Col>
            <Col span={1}/>
            <Col span={7}>
            <br/><br/>
            <Card style={{borderRadius:20,backgroundColor: "#DCDCDC"}}>
                <div>สรุปรายการสั่งซื้อ {showorder.number} รายการ</div>
                <Divider style={{backgroundColor:"black"}}/>
                {showorder.order.map(item=>
                    <Row>
                        <Col span={8}>
                    {item.title}
                    </Col>
                    <Col span={6}>
                        จำนวน {item.number}
                    </Col> 
                        <Col>
                        ราคา {new Intl.NumberFormat('en').format(item.price*item.number)} ฿
                    </Col>
                    </Row>
                )}
            </Card><br/>
            <Card style={{borderRadius:20,textAlign:"center", backgroundColor: "#DCDCDC"}}>
                <span style={{color:"red",fontSize:20}}>ยอดชำระ {new Intl.NumberFormat('en').format(showorder.order.map(item=>item.price*item.number).reduce((a, b) => a + b, 0))} ฿</span><br/><br/>
                <button className="myButton" onClick={success}>ชำระเงิน</button>
            </Card>
            </Col>
        </Row>
        
        </div>
    )
}

export default Pay
