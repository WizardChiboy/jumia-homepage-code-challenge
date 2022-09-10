import React from "react";
import {
  RowSeven1,
  RowSeven10,
  RowSeven11,
  RowSeven12,
  RowSeven2,
  RowSeven3,
  RowSeven4,
  RowSeven5,
  RowSeven6,
  RowSeven7,
  RowSeven8,
  RowSeven9,
} from "../../imports/Imports";
import "./RowSeven.css";

function RowSeven() {
  return (
    <>
      <div className="rowseven">
        <h3>Shop From Our Collections!</h3>

        <div className="rowseven__cards">
          <div className="rowseven__card">
            <img src={RowSeven1} alt="" />
            <p>shop for university</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven2} alt="" />
            <p>shop for secondary</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven3} alt="" />
            <p>android vs ios</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven4} alt="" />
            <p>shop for primary</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven5} alt="" />
            <p>fashion</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven6} alt="" />
            <p>video games</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven7} alt="" />
            <p>sporting goods</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven8} alt="" />
            <p>health and beauty</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven9} alt="" />
            <p>little stars</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven10} alt="" />
            <p>half price store</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven11} alt="" />
            <p>upgrade your appliances</p>
          </div>

          <div className="rowseven__card">
            <img src={RowSeven12} alt="" />
            <p>electric deals</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RowSeven;
