import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BarGraph = ({ income, saving, expense, investment }) => {
  const data = {
    labels: ["Income", "Savings", "Expenses", "Investments",],
    datasets: [
      {
        label: "Spend Analysis",
        data: [income, saving, expense, investment],
        backgroundColor: [
          "#3a86ff",
          "#f77f00",
          "#d90429",
          "3ffca3a",
      
        ],
        borderColor: [
          "#3a86ff",
          "#f77f00",
          "#d90429",
          "#ffca3a",
        
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} className = "chart" />;
};

export default BarGraph;
