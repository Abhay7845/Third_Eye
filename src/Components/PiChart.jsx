import React from "react";
import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { data } from "../Data/DataList";

const PiChart = () => {
  const COLORS = ["blue", "green"];
  const turnoverData = data.map((item) => item.turnover);
  const profitData = data.map((item) => item.profit);

  const TotalProfit = () => {
    let total = 0;
    for (let profits of profitData) total = total + profits;
    return total;
  };
  const TotalTurnover = () => {
    let total = 0;
    for (let turnovers of turnoverData) total = total + turnovers;
    return total;
  };
  const turnover = TotalTurnover();
  const profit = TotalProfit();

  const ComponyData = [
    { name: "Turnover", totalVale: turnover },
    { name: "Profit", totalVale: profit },
  ];
  return (
    <>
      <div className="mt-2">
        <h4 className="text-center my-2 text-danger">PI Chart Information</h4>
        <h5 className="text-center mt-2">
          Company Last 5 Years Performance (IN CR)
        </h5>
        <ResponsiveContainer aspect={4} width="100%">
          <PieChart>
            <Pie
              data={ComponyData}
              labelLine={false}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="totalVale"
            >
              {ComponyData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i % COLORS.length]}
                  style={{ outline: "none" }}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PiChart;
