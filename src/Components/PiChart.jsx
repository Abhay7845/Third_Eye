import React from "react";

import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { data } from "../Data/DataList";

const PiChart = () => {
  const COLORS = ["blue", "green"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="mt-2">
        <h4 className="text-center my-2 text-danger">PI Chart Information</h4>
        <h5 className="text-center mt-2">Company Last 5 Years Performance</h5>
        <ResponsiveContainer aspect={3} width="95%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="turnover"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <h6 className="text-center">- Data Showing IN YEAR -</h6>
      </div>
    </>
  );
};

export default PiChart;
