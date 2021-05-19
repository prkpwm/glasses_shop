import React from 'react';
import axios from 'axios';
import { Row, Col, Button, Card } from "antd";
const style = { background: "#F8F9F9", padding: "8px 8px", height: "250px" };
const fontRight = { textAlign: "right" };
const blue = {
    textAlign: "right",
    backgroundColor: "#330033",
    color: "#FFFFFF",
};

export default class PersonList extends React.Component {
    state = {
        datas1: [[]],
        datas2: [[]],
        datas3: [[]],
        datas4: [[]],
        datas5: [[]]
    }

    async componentDidMount() {
        await axios.get("/interes_gender")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                this.setState({ datas1: datas });
            })
        await axios.get("/interes_age_range")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                this.setState({ datas2: datas });
            })
        await axios.get("/interes_time")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                this.setState({ datas3: datas });
            })
        await axios.get("/interes_person")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                this.setState({ datas4: datas });
            })
        await axios.get("/solditem")
            .then(res => {
                const datas = res.data;
                console.log(datas)
                this.setState({ datas5: datas });
            })

        let data = "";
        data += "<table>"
        this.state.datas1.splice(0, 0,["","Category","Total","Gender"]);
        for (let i = 0; i < this.state.datas1.length; i++) {
            data += "<tr>"
            for (let j = 1; j < 4; j++) {
                data += "<th>" + this.state.datas1[i][j] + "<th>"
            }
            data += "</tr>"
        }
        data += "</table>"
        document.getElementById("table1").innerHTML = data;

        data = "";
        data += "<table>"
        this.state.datas2.splice(0, 0,["","Category","Total","Year"]);
        for (let i = 0; i < this.state.datas2.length; i++) {
            data += "<tr>"
            for (let j = 1; j < 4; j++) {
                data += "<th>" + this.state.datas2[i][j] + "<th>"
            }
            data += "</tr>"
        }
        data += "</table>"
        document.getElementById("table2").innerHTML = data;

        data = "";
        data += "<table>"
        this.state.datas3.splice(0, 0,["Time","Total"]);
        for (let i = 0; i < this.state.datas3.length; i++) {
            data += "<tr>"
            for (let j = 0; j < 2; j++) {
                data += "<th>" + this.state.datas3[i][j] + "<th>"

            }
            data += "</tr>"
        }
        data += "</table>"
        document.getElementById("table3").innerHTML = data;

        data = "";
        data += "<table>"
        this.state.datas4.splice(0, 0,["Total","Category"]);
        for (let i = 0; i < this.state.datas4.length; i++) {
            data += "<tr>"
            for (let j = 1; j >=0 ; j--) {
                data += "<th>" + this.state.datas4[i][j] + "<th>"
            }
            data += "</tr>"
        }
        data += "</table>"
        document.getElementById("table4").innerHTML = data;


        data = "";
        data += "<table>"
        this.state.datas5.splice(0, 0,["Category","Total"]);
        for (let i = 0; i < this.state.datas5.length; i++) {
            data += "<tr>"
            for (let j = 0; j < 2; j++) {
                data += "<th>" + this.state.datas5[i][j] + "<th>"
            }
            data += "</tr>"
        }
        data += "</table>"
        document.getElementById("table5").innerHTML = data;
    }





    render() {
        return (
            <div>

        เพศสนใจของแว่นแต่ละประเภท
                <div id="table1"></div><br/>
         ช่วงอายุสนใจของแว่นแต่ละประเภท
                <div id="table2"></div><br/>
         ช่วงเวลาที่คนเข้าชมสินคัา(กราฟ)
                <div id="table3"></div><br/>
         จำนวนยอดคนสนใจของแว่นแต่ละประเภท
                <div id="table4"></div><br/>
         จำนวนยอดขายของแว่นแต่ละประเภท
                <div id="table5"></div><br/>
            </div>

        )
    }
}