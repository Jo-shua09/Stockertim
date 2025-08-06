import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { chartData } from "./../../assets/data/ChartData";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(200, 200, 200, 0.1)",
          drawBorder: false,
        },
        ticks: {
          display: false, // Hide Y-axis labels
        },
      },
      x: {
        grid: {
          color: "rgba(200, 200, 200, 0.1)",
          drawBorder: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      line: {
        fill: false,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <Line data={chartData} options={options} height={300} />
    </div>
  );
}
