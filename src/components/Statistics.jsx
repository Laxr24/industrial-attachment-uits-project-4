import React, { useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
// import { useCallback, useState } from "react";
// import { useLoaderData, useParams } from 'react-router-dom';
// import { PieChart, Pie, Sector } from "recharts";

const pieChart = JSON.parse(localStorage.getItem('donated'));
console.log(pieChart)

const totalDonationPercentage = (pieChart.length / 12) * 100;
const yourDonationPercentage = 100 - totalDonationPercentage;


// const data = [
//   { name: "Group A", value: '90' },
//   { name: "Group B", value: " 130" },
//   { name: "Group C", value: 1 },
//   { name: "Group D", value: 1.5 }
// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value
//   } = props;

//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };


const Statistics = () => {


  // const totalPrice = useLoaderData();
  // console.log(totalPrice);
  // {
  //   totalPrice?.map(sumOfPrice => <>
  //     <div key={sumOfPrice.id}>{sumOfPrice.price}</div>
  //   </>)
  // }




  // const [activeIndex, setActiveIndex] = useState(0);
  // const onPieEnter = useCallback(
  //   (_, index) => {
  //     setActiveIndex(index);
  //   },
  //   [setActiveIndex]
  // );



  return (

    <div className=''>
        <div className='w-52 h-52'>
            <div className="statistics">
                <div className="pie-chart">
                    <PieChart
                        data={[
                            {
                                title: 'Your Donation',
                                value: totalDonationPercentage,
                                color: '#00C49F',

                            },
                            {
                                title: 'Total Donation',
                                value: yourDonationPercentage,
                                color: '#FF444A',
                            },
                        ]}
                        label={({ dataEntry }) => (dataEntry.percentage).toFixed(0) + '%'}
                        labelStyle={{
                            fontSize: '6px',
                            fill: '#ffffff',
                        }}
                    />
                </div>
                <div className='donation-bar'>
                    <div className="flex gap-2 items-center your-donation">
                        <p >Your Donation</p>
                        <div className="h-3 w-3 bg-green-600"></div>
                    </div>
                    <div className="flex gap-2 items-center total-donation">
                        <p >Total Donation</p>
                        <div className="h-3 w-3 bg-red-600 bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    // <PieChart width={400} height={400}>
    //   <Pie
    //     activeIndex={activeIndex}
    //     activeShape={renderActiveShape}
    //     data={data}
    //     cx={200}
    //     cy={200}
    //     innerRadius={60}
    //     outerRadius={80}
    //     fill="#8884d8"
    //     dataKey="value"
    //     onMouseEnter={onPieEnter}
    //   />
    // </PieChart>
  )
};

export default Statistics;