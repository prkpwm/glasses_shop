import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function BarCharted() {

  const [datas, setdatas] = useState([[]]);

   const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];
  
  useEffect(async() => {

  //Graph interes_gender
    await axios.get("/interes_gender")
      .then(res => {
        const datas = res.data;
        console.log(datas)
        var datagender = []
        for(var i = 0; i<datas.length;i++){
          datagender.push({
            namegender: datas[i][1] +" ("+ datas[i][3][0] +") " ,
            numgender: datas[i][2]
          })
        }
        setdatas(datagender)
      })

    // Graph interes_age_range
      // await axios.get("/interes_age_range")
      //   .then(res => {
      //     const datas = res.data;
      //     console.log(datas)
      //     var dataagerange = []
      //     for(var i = 0; i<datas.length;i++){
      //       dataagerange.push({
      //         nameage: datas[i][1]+ " ("+ datas[i][3]+ ") " ,
      //         numage: datas[i][2]
      //       })
      //     }
      //     setdatas(dataagerange)
      //   })

    // Graph interes_time
      // await axios.get("/interes_time")
      //   .then(res => {
      //       const datas = res.data;
      //       console.log(datas)
      //       var datainterestime = []
      //       for(var i = 0; i<datas.length;i++){
      //         datainterestime.push({
      //         datatime: datas[i][0],
      //         numtime: datas[i][1]
      //       })
      //     }
      //     setdatas(datainterestime)
      // })

  //Graph interes_person
    // await axios.get("/interes_person")
    //   .then(res => {
    //     const datas = res.data;
    //     console.log(datas)
    //     var dataperson = []
    //     for(var i = 0; i<datas.length;i++){
    //       dataperson.push({
    //         nameperson: datas[i][1],
    //         numperson: datas[i][0]
    //       });
    //     }
    //     setdatas(dataperson)        
    //   });

    // Graph solditem
    // await axios.get("/solditem")
    //   .then(res => {
    //     const datas = res.data;
    //     console.log(datas)
    //     var datasolditem = []
    //     for(var i = 0; i<datas.length;i++){
    //       datasolditem.push({
    //         nameitem: datas[i][0],
    //         numitem: datas[i][1]
    //       });
    //     }
    //     setdatas(datasolditem)  
    //   }) 

  }, [])

  return (
    <div>
      <h5>เพศสนใจของแว่นแต่ละประเภท</h5>
        <BarChart width={1100} height={300} data={datas}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="namegender" fontSize={12} angle={-30} />
          <YAxis fontSize={12} />
          <Bar dataKey="numgender" barSize={25} fill="#483D8B"/>
        </BarChart>
      <br></br>
      <hr></hr>

      <h5>ช่วงอายุสนใจของแว่นแต่ละประเภท</h5>
        <BarChart width={1400} height={300} data={datas}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nameage" fontSize={12} angle={-25} />
          <YAxis fontSize={12} />
          <Bar dataKey="numage" barSize={20} fill="#4682B4"/>
        </BarChart> 
      <br></br>         
      <hr></hr>

      <h5>ช่วงเวลาที่คนเข้าชมสินคัา(กราฟ)</h5>
        <BarChart width={800} height={300} data={datas}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datatime" fontSize={12} />
          <YAxis fontSize={12} />
          <Bar dataKey="numtime" barSize={20} fill="#8B8970"/>
        </BarChart>
      <br></br>
      <hr></hr>

      <h5>จำนวนยอดคนสนใจของแว่นแต่ละประเภท</h5>
        <BarChart width={800} height={300} data={datas}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nameperson" fontSize={12} angle={-30} />
          <YAxis fontSize={12} />
          <Bar dataKey="numperson" barSize={25} fill="#00688B"/>
        </BarChart> 
      <br></br>         
      <hr></hr>

      <h5>จำนวนยอดขายของแว่นแต่ละประเภท</h5>
        <BarChart width={800} height={300} data={datas}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nameitem" fontSize={15}/>
          <YAxis fontSize={17} />
          <Bar dataKey="numitem" barSize={50} fill="#8884d8"/>
        </BarChart> 
      <br></br>  

    </div>
  )
}

export default BarCharted
