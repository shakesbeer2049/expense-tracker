import React, { useState, useContext } from "react";
import MoneyContext from "../context/MoneyContext";
import { Chart } from "primereact/chart";

const BarGraph = () => {
    const {input, setInput, type, setType} = useContext(MoneyContext);
  const [chartData] = useState({
    labels: ["Income", "Expenses", "Savings", "Investments"],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726", "#FFA799"],
        hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D", "#FFA799"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div className="card flex justify-content-center">
      <Chart
        className="chart"
        type="pie"
        data={chartData}
        options={lightOptions}
        style={{ position: "relative", width: "30%" }}
      />
    </div>
  );
};

export default BarGraph;
