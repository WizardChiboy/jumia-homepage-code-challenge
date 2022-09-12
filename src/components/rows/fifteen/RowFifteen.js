import React from "react";
import { RowFifteen1, RowFifteen2, RowFifteen3 } from "../../imports/Imports";
import "./RowFifteen.css";
function RowFifteen() {
  return (
    <>
      <div className="rowfifteen">
        <h3>Beauty Deals</h3>

        <div className="rowfifteen__ads">
          <img src={RowFifteen1} alt="" />
          <img src={RowFifteen2} alt="" />
          <img src={RowFifteen3} alt="" />
        </div>
      </div>
    </>
  );
}

export default RowFifteen;
