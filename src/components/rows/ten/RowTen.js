import React from "react";
import { RowTen1, RowTen2, RowTen3 } from "../../imports/Imports";
import "./RowTen.css";
function RowTen() {
  return (
    <>
      <div className="rowten">
        <h3>Phone Deals</h3>

        <div className="rowten__ads">
          <img src={RowTen1} alt="" />
          <img src={RowTen2} alt="" />
          <img src={RowTen3} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowTen;
