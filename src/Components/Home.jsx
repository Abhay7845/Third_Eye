import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { data } from "../Data/DataList";

const Home = () => {
  return (
    <>
      <div>
        <h4 className="text-center my-2 text-danger">Line Chart Information</h4>
        <h5 className="text-center mt-2">Company Performance (IN CR)</h5>
        <ResponsiveContainer aspect={3} width="95%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <Line
              type="monotone"
              dataKey="turnover"
              activeDot={{ r: 8 }}
              stroke="blue"
            />
            <Line
              type="monotone"
              dataKey="profit"
              activeDot={{ r: 8 }}
              stroke="green"
            />
            <Legend />
            <Tooltip />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
        <h6 className="text-center">- Data Showing IN YEAR -</h6>
      </div>
    </>
  );
};

export default Home;
