import React from "react";
import { Row, Col, Breadcrumb ,Card} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import GenItem from './GenItem'
import Paging from './Paging'

function ShopHome() {

    return (
        <div>
            <Row>
                <Col span={6} push={18} >
                    <div style={{ textAlign: 'center' }}>
                        <form action="" method="GET">
                            <input type="text" id="searchbar" name="searchbar" placeholder="searching" />
                            <button type="submit" id="" name="search"><SearchOutlined /></button><br />
                        </form>
                        <div id="pop" style={{paddingLeft:"20px",paddingTop:"20px"}}>
                            <Card title="Populate" extra={<a href="#">More</a>}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </div>
                </Col>
                <Col span={18} pull={6}>
                    <div id="fakeNav" style={{ textAlign: 'left' }}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Shop</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div style={{ fontSize: "30px" }}>
                        Shop
                    </div>
                    
                    <div id="listItem" style={{ textAlign: 'center' }}>
                         <GenItem />
                    </div>
                    <div id="pagination" style={{paddingTop:"25px",textAlign:"center"}}>
                        <Paging/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShopHome
