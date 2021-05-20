import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function BarCharted() {

  const [datas, setdatas] = useState([[]]);

   const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  const testtt = [
    {
      N: 'oval', 
      x: 5
    },
    {
      N: 'rimless', 
      x: 2
    },
    {
      N: 'round', 
      x: 2
    },
    {
      N: 'wellington', 
      x: 7
    }
  ];
  // const getIntroOfPage = (label) => {
  //   if (label === 'Page A') {
  //     return "Page A is about men's clothing";
  //   }
  //   if (label === 'Page B') {
  //     return "Page B is about women's dress";
  //   }
  //   if (label === 'Page C') {
  //     return "Page C is about women's bag";
  //   }
  //   if (label === 'Page D') {
  //     return 'Page D is about household goods';
  //   }
  //   if (label === 'Page E') {
  //     return 'Page E is about food';
  //   }
  //   if (label === 'Page F') {
  //     return 'Page F is about baby food';
  //   }
  //   return '';
  // };

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p className="label">{`${label} : ${payload[0].value}`}</p>
  //         <p className="intro">{getIntroOfPage(label)}</p>
  //         <p className="desc">Anything you want can be displayed here.</p>
  //       </div>
  //     );
  //   }
  
  //   return null;
  // };

  useEffect(async() => {
    // Graph interes_gender
    // await axios.get("/interes_gender")
    //   .then(res => {
    //     const datas = res.data;
    //     console.log(datas)
    //     var datagender = []
    //     for(var i = 0; i<datas.length;i++){
    //       console.log(datas[i])
    //       console.log("error")
    //       datagender.push({
    //         namegender: datas[i][1] +" ("+ datas[i][3][0] +") " ,
    //         numgender: datas[i][2]
    //       })
    //     }
    //     setdatas(datagender)
    //   })
    // Graph interes_time
    // await axios.get("/interes_time")
    //   .then(res => {
    //       const datas = res.data;
    //       console.log(datas)
    //       var interestime = []
    //       for(var i=0;i<25;i++){
    //         console.log(interestime[i])
    //       }
    //  })
    // Graph interes_person
    await axios.get("/interes_person")
      .then(res => {
        const datas = res.data;
        console.log(datas)
        var dataperson = []
        for(var i = 0; i<datas.length;i++){
          console.log(datas[i])
          dataperson.push({
            nameperson: datas[i][1],
            numperson: datas[i][0]
          });
        }
        setdatas(dataperson)        
      });

    // Graph solditem
    // await axios.get("/solditem")
    //   .then(res => {
    //     const datas = res.data;
    //     console.log(datas)
        
    //   }) 

  }, [])

  return (
    <div>
      <h5>เพศสนใจของแว่นแต่ละประเภท</h5>
        <BarChart width={800} height={300} data={datas}>
          <XAxis dataKey="namegender" fontSize={12} angle={-30} />
          <YAxis fontSize={12} />
          <Bar dataKey="numgender" barSize={25} fill="#8884d8"/>
        </BarChart>
      <hr></hr>

      <h5>ช่วงอายุสนใจของแว่นแต่ละประเภท</h5>
        test graph multiple
        <BarChart width={800} height={300} data={data}>
          <XAxis dataKey="uv" fontSize={12} angle={-30} />
          <YAxis fontSize={12} />
          <Bar dataKey="amt" barSize={25} fill="#8884d8"/>
        </BarChart>          
      <hr></hr>

      <h5>ช่วงเวลาที่คนเข้าชมสินคัา(กราฟ)</h5>
      test graph multiple
        <BarChart width={800} height={300} data={data}>
          <XAxis dataKey="name" fontSize={12} angle={-30} />
          <YAxis fontSize={12} />
          <Bar dataKey="amt" barSize={25} fill="#8884d8"/>
        </BarChart>
      <hr></hr>

      <h5>จำนวนยอดคนสนใจของแว่นแต่ละประเภท</h5>
        <BarChart width={800} height={300} data={datas}>
          <XAxis dataKey="nameperson" fontSize={12} angle={-30} />
          <YAxis fontSize={12} />
          <Bar dataKey="numperson" barSize={25} fill="#8884d8"/>
        </BarChart>          
      <hr></hr>

      <h5>จำนวนยอดขายของแว่นแต่ละประเภท</h5>
      test graph multiple
        <BarChart width={800} height={300} data={testtt}>
          <XAxis dataKey="N" fontSize={15} angle={-30} />
          <YAxis fontSize={17} />
          <Bar dataKey="x" barSize={50} fill="#8884d8"/>
        </BarChart>   
    </div>
  )
}

export default BarCharted
