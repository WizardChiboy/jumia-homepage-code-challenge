import React from "react";
import {
  RowTwentyOne1,
  RowTwentyOne2,
  RowTwentyOne3,
} from "../../imports/Imports";
import "./RowTwentyOne.css";

function RowTwentyOne() {
  return (
    <>
      <div className="rowtwentyone">
        <h3>Fashion Deals</h3>

        <div className="rowtwentyone__ads">
          <img src={RowTwentyOne1} alt="" />
          <img src={RowTwentyOne2} alt="" />
          <img src={RowTwentyOne3} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowTwentyOne;
