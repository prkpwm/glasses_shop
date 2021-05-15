import React, { useEffect, useState } from "react";
import { Row, Col, Breadcrumb, Button, Card, Select, Modal, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import GenItem from './GenItem'
import Paging from './Paging'
import Genpopular from './Genpopular'
import axios from 'axios';
const { Meta } = Card;
const { Option } = Select;
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right", float: "right", fontSize: "12px" };
const fontLeft = { textAlign: "left", float: "left", color: "grey", fontSize: "12px" };
const { TabPane } = Tabs;
const blue = {
    textAlign: "right",
    backgroundColor: "#f2f4f4",
    color: "#000000",
};
const blueright = {
    backgroundColor: "#f2f4f4",
    color: "#000000",
    float: 'right',
};

var categorynow = 0;
var caseselect = 0;

function ShopHome() {
    const [datas, setdatas] = useState([[]]);
    const [datapopup, setdatapopup] = useState([[]]);

    useEffect(() => {
        axios.get("/sortitem/iteminfo/price/asc")
            .then(res => {
                const datas = res.data;
                setdatas(datas)
            })
    }, [])

    function searchdata() {
        let name = document.getElementById('searchbar').value
        console.log(name)
        axios.get("/searchitem/iteminfo/" + name + "")
            .then(res => {
                // const datas = res.data[0];
                const datas = res.data;
                console.log(datas)
                setdatas(datas)
            })
    }



    const [visible, setVisible] = useState(false);

    const onChangeHandler = (event) => {
        var column;
        var order;
        caseselect = Number(event);
        categorynow = document.getElementById('cate').value;
        // if (categorynow === 0) {
            switch (Number(event)) {
                case 0:
                    column = "price"
                    order = "asc"
                    break;
                case 1:
                    column = "price"
                    order = "desc"
                    break;
                case 2:
                    column = "name"
                    order = "asc"
                    break;
                case 3:
                    column = "category"
                    order = "asc"
                default:
            }
            axios.get("/sortitem/iteminfo/" + column + "/" + order)
                .then(res => {
                    const datas = res.data;
                    setdatas(datas)
                })
        // }else{
            // switch (Number(event)) {
            //     case 0:
            //         column = "price"
            //         order = "asc"
            //         break;
            //     case 1:
            //         column = "price"
            //         order = "desc"
            //         break;
            //     case 2:
            //         column = "name"
            //         order = "asc"
            //         break;
            //     case 3:
            //         column = "category"
            //         order = "asc"
            //     default:
            // }
            // axios.get("/getinfowithorderby/iteminfo/<category>/<column>/<value>" + column + "/" + order)
            //     .then(res => {
            //         const datas = res.data;
            //         setdatas(datas)
            //     })
            // console.log(categorynow)
        // }

    }

    async function onClickHandler(data) {
        console.log(data)
        let body = {
            iid: data[0],
            uid: localStorage.getItem('uid'),
            itemprice: data[2],
            status: 'in-basket',
            quanlity: 1,
            orderid: null,
        };
        let message = ""

        await axios.get('/check_oderidinhis/', { params: { body } })
            .then(response => {
                message = response.data
                console.log("response: ", response)
            })
            .catch(err => console.log(err));

        // has orderid
        if (message != "fail") {

            body.orderid = JSON.parse(message[0]);
            console.log("after get id : " + body.orderid)

            axios.get('/insert_orderinfo2/', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response: ", response)
                })
                .catch(err => console.log(err));

        } else {
            // create orderid before insert in orderid
            await axios.get('/insert_history2/', { params: { body } })
                .then(response => {
                    console.log("response insert history : ", response)
                })
                .catch(err => console.log(err));

            // get id from his
            await axios.get('/check_oderidinhis/', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response check oderid in his: ", response)
                })
                .catch(err => console.log(err));
            body.orderid = JSON.parse(message[0]);

            //insert into orderinfo
            axios.get('/insert_orderinfo2/', { params: { body } })
                .then(response => {
                    message = response.data
                    console.log("response insert orderinfo2: ", response)
                })
                .catch(err => console.log(err));
        }


    }

    async function getitem(id) {
        console.log(id)
        await axios.get("/getinfobyid/iteminfo/GID/" + id + "")
            .then(res => {
                // const datas = res.data[0];
                const datas = res.data;
                console.log(datas)
                setdatapopup(datas)
            })

        let body = {
            iid: id,
            uid: localStorage.getItem('uid'),
        };
        let message = ""
        axios.get('/insert_statistics/', { params: { body } })
            .then(response => {
                message = response.data
                console.log("response: ", response)

            })
            .catch(err => console.log(err));
        if (message == "Success") {

        }
        else {
            // return notification["error"]({
            //   message: 'something wrong',
            // });
        }
        setVisible(true)
    }

    const genitem = ()=>{
        // categorynow = document.getElementById('TabPane').value;
        // if(categorynow!=0 && caseselect != 0){

        // }
        return (
            <Row gutter={[16, 24]}>
                {(datas.length > 1) ?
                    datas.map(data =>
                        <Col className="gutter-row" xs={24} md={12} xl={6}>
                            <Card
                                hoverable
                                cover={<img alt="glasses!!" src={data[3]} onClick={() => getitem(data[0])} width="95%" height="150" />}
                            >
                                <div onClick={() => getitem(data[0])}>
                                    <Meta title={data[1]} description={"Category : " + data[4]} /><br />
                                    <p><h7 style={fontLeft}>{data[5]} </h7> <h7 style={fontRight}>{data[2]} ฿</h7></p>
                                    <br />
                                </div>
                                <Button type="button" onClick={() => onClickHandler(data)} style={blue}>
                                    Add to cart
                                </Button>
                            </Card>
                        </Col>
                    )
                    : <div style={{ width: '100%' }}>
                        <h5 style={{ color: 'red', textAlign: 'center' }}>Nothing Here </h5>
                    </div>
                }
            </Row>
        )
    }
    return (
        <div>
            <Row>
                <Col span={6} push={18} >
                    <div style={{ textAlign: 'center' }}>
                        <form action="Genpopular.js" method="GET">
                            <input type="text" id="searchbar" name="searchbar" placeholder="searching" />
                            <Button type="submit" id="" name="search" onClick={() => searchdata()}><SearchOutlined /></Button><br />
                        </form>
                        <div id="pop" style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                            <Genpopular />
                        </div>
                    </div>
                </Col>
                <Col span={18} pull={6}>
                    <div id="Nav" style={{ textAlign: 'left' }}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Shop</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div style={{ fontSize: "30px" }}>
                        Shop
                    </div>

                    <div id="listItem" style={{ textAlign: 'center' }}>
                        <div>
                            <div style={{ textAlign: "right", paddingBottom: "20px" }} >
                                <Select id="sortby" name="sortby" style={{ width: "250px" }} defaultValue="0" onChange={onChangeHandler}>
                                    <Option value="0">Sort by price (min-max)</Option>
                                    <Option value="1">Sort by price (max-min)</Option>
                                    <Option value="2">Sort by Name</Option>
                                    <Option value="3">Sort by Group</Option>
                                </Select>
                            </div>
                            <Tabs defaultActiveKey="0" size={'small'} style={{ marginBottom: 32 }}>
                                <TabPane tab="ALL" key="0">
                                    <input type="hidden" value='0' id='cate'/>
                                     {genitem()}
                                </TabPane>
                                <TabPane tab="Boston" key="1">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Browline" key="2">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Oval" key="3">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Rrectangle" key="4">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Rrimless" key="5">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Round" key="6">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Wellington" key="7">
                                    <input type="hidden" value='1' id='cate'/>
                                    {genitem()}
                                </TabPane>
                                <TabPane tab="Other" key="8">
                                    <input type="hidden" value='2' id='cate'/>
                                    {genitem()}
                                </TabPane>
                            </Tabs>

                            <Modal
                                title=" Glasses information "
                                centered
                                visible={visible}
                                onOk={() => setVisible(false)}
                                onCancel={() => setVisible(false)}
                                width={400}
                                footer={null}
                            >

                                {datapopup.map(data => (
                                    < div style={{ padding: '20px 20px' }} >
                                        <div id='img' >
                                            <img alt="glasses!!" src={data[3]} width="100%" height="150" />
                                        </div>
                                        <div>
                                            <h3 >{data[1]} </h3>
                                            <p style={{ float: 'right' }}>Category : {data[4]} </p>
                                            <p >{data[5]}</p>
                                            <p> Glasses are glasses .
                                            The type of glasses is {data[4]} .
                                            Just wear it on your head.
                                            The whole world will be beautiful immediately </p>
                                            <h4 style={{ textAlign: 'right' }}>{data[2]} ฿</h4>
                                            <p style={{ textAlign: 'right' }}> AVAILABILITY: <b>IN STOCK </b></p>
                                            <Button type="button" onClick={() => onClickHandler(data)} style={blueright}>
                                                Add to cart
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </Modal>
                        </div >
                    </div>
                    <div id="pagination" style={{ paddingTop: "25px", textAlign: "center" }}>
                        <Paging />
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default ShopHome
