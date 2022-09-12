import React from "react";
import {
  RowSeventeen1,
  RowSeventeen2,
  RowSeventeen3,
} from "../../imports/Imports";
import "./RowSeventeen.css";

function RowSeventeen() {
  return (
    <>
      <div className="rowseventeen">
        <h3>Home & Office</h3>

        <div className="rowseventeen__ads">
          <img src={RowSeventeen1} alt="" />
          <img src={RowSeventeen2} alt="" />
          <img src={RowSeventeen3} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowSeventeen;
