import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { ChartData } from "../Data/DataList";

const Home = () => {
  return (
    <>
      <h4 className="text-center mt-2">Company Data Last 5 Years</h4>
      <ResponsiveContainer aspect={3} width="95%">
        <LineChart data={ChartData}>
          <XAxis dataKey="year" />
          <Line type="monotone" dataKey="number" activeDot={{ r: 8 }} />
          <Tooltip />
          <Legend />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Home;
