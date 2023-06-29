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
  LineChart,
  Line,
} from "recharts";
import { data } from "../Data/DataList";

const Home = () => {
  return (
    <>
      <div>
        <h4 className="text-center my-2 text-danger">Line Chart Information</h4>
        <h5 className="text-center mt-2">Company Last 5 Years Performance</h5>
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
      <div className="mt-5">
        <h4 className="text-center my-2 text-danger">Bar Chart Information</h4>
        <h5 className="text-center mt-2">Company Last 5 Years Performance</h5>
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
    </>
  );
};

export default Home;
