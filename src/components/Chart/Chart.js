import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

//rendering the ChartBars dynamically, mapping the dataPoints as props so ChartBar
//components are created paralel to the number od dataPoints.

const Chart = (props) => {
  // calculating the maxValue

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
