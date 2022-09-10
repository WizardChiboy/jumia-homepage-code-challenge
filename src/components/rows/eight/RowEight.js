import React from "react";
import { RowEight1, RowEight2, RowEight3 } from "../../imports/Imports";
import "./RowEight.css";
function RowEight() {
  return (
    <>
      <div className="roweight">
        <h3>Exciting offers & games</h3>

        <div className="roweight__ads">
          <img src={RowEight1} alt="" />
          <img src={RowEight2} alt="" />
          <img src={RowEight3} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowEight;
