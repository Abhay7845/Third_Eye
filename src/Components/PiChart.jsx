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

  const TotalProfitTurnover = [TotalProfit(), TotalTurnover()];
  console.log("TotalProfitTurnover==>", TotalProfitTurnover);

  const TotalProfitTurnoverObj = TotalProfitTurnover.map((elements) => {
    return {
      profit: elements,
      turnover: elements,
    };
  });
  console.log("TotalProfitTurnoverObj==>", TotalProfitTurnoverObj);

  return (
    <>
      <div className="mt-2">
        <h4 className="text-center my-2 text-danger">PI Chart Information</h4>
        <h5 className="text-center mt-2">Company Last 5 Years Performance</h5>
        <ResponsiveContainer aspect={3} width="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={TotalProfitTurnoverObj}
              labelLine={false}
              cx="50%"
              cy="50%"
              outerRadius={180}
              dataKey="profit"
            >
              {TotalProfitTurnoverObj.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
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
