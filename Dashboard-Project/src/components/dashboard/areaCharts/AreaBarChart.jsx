import { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const monthlyData = [
  { month: "Jan", value: 70 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 90 },
  { month: "May", value: 55 },
  { month: "Jun", value: 30 },
  { month: "Jul", value: 32 },
  { month: "Aug", value: 62 },
  { month: "Sep", value: 55 },
  { month: "Oct", value: 80 },
  { month: "Nov", value: 45 },
  { month: "Dec", value: 70 },
];

const yearlyData = [
  { month: "2023", value: 700 },
  { month: "2024", value: 800 },
];

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(monthlyData);

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleButtonClick = (period) => {
    if (period === "monthly") {
      setData(monthlyData);
    } else {
      setData(yearlyData);
    }
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Overview</h5>
        <div className="chart-info-data">
          <div className="info-data-buttons">
            <button
              className={`info-data-button ${data === monthlyData ? "active" : ""}`}
              onClick={() => handleButtonClick("monthly")}
            >
              Monthly
            </button>
            <button
              className={`info-data-button ${data === yearlyData ? "active" : ""}`}
              onClick={() => handleButtonClick("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#e6a8d7" : "#000080"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#e6a8d7" : "#000080"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="value"
              fill="#9370db"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="download-report">
        <button className="download-button">Download Report</button>
      </div>
    </div>
  );
};

export default AreaBarChart;
