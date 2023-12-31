import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../Data/DataList";

const BarChar = () => {
  return (
    <div>
      <div className="mt-2">
        <h4 className="text-center my-2 text-danger">Bar Chart Information</h4>
        <h5 className="text-center mt-2">Company Performance (IN CR)</h5>
        <ResponsiveContainer aspect={3} width="95%">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="turnover" fill="blue" />
            <Bar dataKey="profit" fill="green" />
          </BarChart>
        </ResponsiveContainer>
        <h6 className="text-center">- Data Showing IN YEAR -</h6>
      </div>
    </div>
  );
};

export default BarChar;
