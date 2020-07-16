import React from "react";

const Diplay = (props) => {
  return (
    <div className="display">
      <div className="displayValue">{props.displayValue}</div>
      <div className="displayResult">{props.displayResult}</div>
    </div>
  );
};

export default Diplay;
