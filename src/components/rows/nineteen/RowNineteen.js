import React from "react";
import {
  RowNineteen1,
  RowNineteen2,
  RowNineteen3,
} from "../../imports/Imports";
import "./RowNineteen.css";

function RowNineteen() {
  return (
    <>
      <div className="rownineteen">
        <h3>Half Price Store</h3>

        <div className="rownineteen__ads">
          <img src={RowNineteen1} alt="" />
          <img src={RowNineteen2} alt="" />
          <img src={RowNineteen3} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowNineteen;
