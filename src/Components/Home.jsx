import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ChartData } from "../Data/DataList";

const Home = () => {
  return (
    <>
      <h4 className="text-center mt-2">Company Last 5 Years Performance</h4>
      <ResponsiveContainer aspect={3} width="95%">
        <LineChart data={ChartData}>
          <XAxis dataKey="year" />
          <Line type="monotone" dataKey="turnover" activeDot={{ r: 8 }} />
          <Tooltip />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      <h6 className="text-center">- Data Showing IN YEAR -</h6>
    </>
  );
};

export default Home;
