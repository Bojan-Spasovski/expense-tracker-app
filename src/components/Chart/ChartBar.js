import React from "react";

import "./ChartBar.css";

// Filling the ChartBar using the value relation to the maxValue
const Chartbar = (props) => {
  let barFillHeight = `0%`;

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + `%`;
  }

  // Setting the style prop of an element dynamically, by passing an object inside the
  // style prop in the element/div.
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
