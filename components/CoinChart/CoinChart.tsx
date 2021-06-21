import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

interface CoinDetailsProps {
  price: any;
  data: any;
}
export function CoinDetails({ price, data }: CoinDetailsProps) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: true,
    options: {
      transitions: {
        plugins: {
          title: {
            display: true,
            text: "Cryptic graph",
          },
        },
      },
    },
  };
  if (price === "0.00") {
    return <p>please select a currency pair</p>;
  }
  return (
    <div className="dashboard">
      <h2>{`${price}`}</h2>

      <div className="chart-container">
        {/* https://stackoverflow.com/questions/67618984/react-typescript-chart-js-error-type-is-missing-in-type */}
        <Line type="line" data={data} options={opts} />
      </div>
    </div>
  );
}