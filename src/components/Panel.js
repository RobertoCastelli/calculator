import React, { useState } from "react";
import Display from "./Diplay";

const Panel = () => {
  const [digit, setDigit] = useState("0");

  const inputDigit = (e) => {
    e.preventDefault();
    digit === "0" ? setDigit(e.target.value) : setDigit(digit + e.target.value);
  };

  const inputCancel = () => {
    setDigit("0");
  };

  return (
    <>
      <Display displayValue={digit} />
      <div className="panel">
        <div className="numbers">
          <button className="one" value="1" onClick={inputDigit}>
            1
          </button>
          <button value="2" onClick={inputDigit} className="two">
            2
          </button>
          <button value="3" onClick={inputDigit} className="three">
            3
          </button>
          <button value="4" onClick={inputDigit} className="four">
            4
          </button>
          <button value="5" onClick={inputDigit} className="five">
            5
          </button>
          <button value="6" onClick={inputDigit} className="six">
            6
          </button>
          <button value="7" onClick={inputDigit} className="seven">
            7
          </button>
          <button value="8" onClick={inputDigit} className="eight">
            8
          </button>
          <button value="9" onClick={inputDigit} className="nine">
            9
          </button>
          <button value="0" onClick={inputDigit} className="zero">
            0
          </button>
          <button value="c" onClick={inputCancel} className="canc">
            c
          </button>
          <button value="ce" onClick={inputDigit} className="undo">
            ce
          </button>
          <button value="(" onClick={inputDigit} className="open">
            (
          </button>
          <button value=")" onClick={inputDigit} className="close">
            )
          </button>
          <button value="+" onClick={inputDigit} className="plus">
            +
          </button>
          <button value="-" onClick={inputDigit} className="minus">
            -
          </button>
          <button value="/" onClick={inputDigit} className="divide">
            /
          </button>
          <button value="*" onClick={inputDigit} className="times">
            x
          </button>
          <button value="=" onClick={inputDigit} className="equal">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Panel;
