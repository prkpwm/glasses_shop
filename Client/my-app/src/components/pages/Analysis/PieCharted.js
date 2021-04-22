import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card } from "antd";
// import Tooltip from '@bit/recharts.recharts.tooltip';

function PieCharted() {
  const [datas, setdatas] = useState([[]]);

  const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  // useEffect(() => {
  //   axios.get("/sortitem/iteminfo/price/asc")
  //     .then(res => {
  //       const datas = res.data;
  //       console.log(datas)
  //       setdatas(datas)
  //     })
  // }, [])

  return (
    <div >
      <Card hoverable style={{ width: "100%" }}>
        <PieChart width={400} height={400}>
          <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          {/* <Tooltip /> */}
        </PieChart>
      </Card>

    </div>
  )
}

export default PieCharted
