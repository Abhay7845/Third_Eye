import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { ChartData } from "../Data/DataList";

const Home = () => {
  return (
    <>
      <div>
        <h4 className="text-center my-2 text-danger">Line Chart Information</h4>
        <h5 className="text-center mt-2">Company Last 5 Years Performance</h5>
        <ResponsiveContainer aspect={3} width="95%">
          <LineChart data={ChartData}>
            <XAxis dataKey="year" />
            <Line type="monotone" dataKey="turnover" activeDot={{ r: 8 }} />
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
          <BarChart data={ChartData}>
            <Bar dataKey="turnover" fill="blue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <Tooltip />
            <YAxis />
          </BarChart>
        </ResponsiveContainer>
        <h6 className="text-center">- Data Showing IN YEAR -</h6>
      </div>
      <div className="mt-5">
        <h4 className="text-center my-2 text-danger">PI Chart Information</h4>
        <h5 className="text-center mt-2">Company Last 5 Years Performance</h5>
        <ResponsiveContainer aspect={3} width="95%">
          <BarChart data={ChartData}>
            <Bar dataKey="turnover" fill="blue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <Tooltip />
            <YAxis />
          </BarChart>
        </ResponsiveContainer>
        <h6 className="text-center">- Data Showing IN YEAR -</h6>
      </div>
    </>
  );
};

export default Home;
