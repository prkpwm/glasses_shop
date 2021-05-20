import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card } from "antd";
import axios from 'axios'; 
// import Tooltip from '@bit/recharts.recharts.tooltip';

function PieCharted() {
  const [datas, setdatas] = useState([[]]);

  const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  const data02 = [
     { name: 'Group A', value: 500 }, { name: 'Group B', value: 500 },
     { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
     { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  // useEffect(async() => {
    
  // }, [])

  return (
    <div >
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={datas}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          {/* <Tooltip /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieCharted
