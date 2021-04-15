import React from 'react'
import { Row, Col } from 'antd'
const style = { background: '#F8F9F9', padding: '8px 8px', height: '250px' };
const fontRight = { textAlign: 'right' }
const blue = { textAlign: 'right', backgroundColor: '#330033', color: '#FFFFFF' }

function GenItem() {
    // var list="";
    // for(var i=0;i<8;i++){
    //     list+="<Col className=\"gutter-row\" span={6}><div style={style}>col-6</div></Col>"
    // }
    // var template = document.createElement('template');
    // list = list.trim();
    // template.innerHTML(list);
    return (<Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
        <Col className="gutter-row" span={6}>
            <div style={style}>
                <img src='http://localhost:3000/img/dumpGlasses.png' alt="glasses!!" width="95%" height="150" /><br />
                <a href="#" >Glasses</a>
                <p style={fontRight}>1,000 ฿</p>
                <button type="button" style={blue} >Add to card</button>
            </div>
        </Col>
    </Row>);
}


export default GenItem