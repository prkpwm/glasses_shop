import React from "react";
import { Row, Col, Card, Avatar, Divider, Button, Modal } from "antd";
import { ResponsiveContainer,PieChart, Pie,Cell} from 'recharts';

function PieChart() {
    const [datas, setdatas] = useState([[]]);
  
    useEffect(() => {
      axios.get("/sortitem/iteminfo/price/asc")
        .then(res => {
          const datas = res.data;
          console.log(datas)
          setdatas(datas)
        })
    }, [])

    return (
        <div>
         {/* https://www.npmjs.com/package/canvasjs

         https://canvasjs.com/react-charts/animated-chart/ */}
        </div>
    )
}

export default PieChart
