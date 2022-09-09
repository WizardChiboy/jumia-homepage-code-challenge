import React from "react";
import {
  RowFour1,
  RowFour2,
  RowFour3,
  RowFour4,
  RowFour5,
  RowFour6,
} from "../../imports/Imports";
import "./RowFour.css";

function RowFour() {
  return (
    <>
      <div className="rowfour">
        <h3>Don't Miss Out On These!!!</h3>

        <div className="rowfour__ads">
          <img src={RowFour1} alt="" />
          <img src={RowFour2} alt="" />
          <img src={RowFour3} alt="" />
          <img src={RowFour4} alt="" />
          <img src={RowFour5} alt="" />
          <img src={RowFour6} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowFour;
