import React from "react";
import {
  Jumia_delivery,
  Jumia_food,
  Jumia_pay,
  Jumia_prime,
} from "../../imports/Imports";

import "./RowSix.css";

function RowSix() {
  return (
    <>
      <div className="rowsix">
        <div className="rowsix__card">
          <img src={Jumia_delivery} alt="jumia delivery" />
          <p>free delivery</p>
        </div>

        <div className="rowsix__card">
          <img src={Jumia_prime} alt="jumia delivery" />
          <p>jumia prime</p>
        </div>

        <div className="rowsix__card">
          <img src={Jumia_pay} alt="jumia delivery" />
          <p>buy airtme 3% off</p>
        </div>

        <div className="rowsix__card">
          <img src={Jumia_food} alt="jumia delivery" />
          <p>jumia food</p>
        </div>
      </div>
    </>
  );
}

export default RowSix;
