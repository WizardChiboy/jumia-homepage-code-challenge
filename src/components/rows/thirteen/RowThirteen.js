import React from "react";

import {
  RowThirteen1,
  RowThirteen2,
  RowThirteen3,
  RowThirteen4,
  RowThirteen5,
  RowThirteen6,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowThirteen.css";

function RowThirteen() {
  return (
    <>
      <div className="rowthirteen">
        <h3>Adidas Official Store</h3>

        <div className="rowthirteen__cards">
          <Card2
            img={RowThirteen1}
            title={"Adidas CORE TRACKSUIT MTS Tapered"}
            price={"43,329"}
            slash={"61,879"}
            tag={"30"}
          />
          <Card2
            img={RowThirteen2}
            title={"Adidas SPORTS PERFORMANCE PANTS AFC TR PNT"}
            price={"48,819"}
          />
          <Card2
            img={RowThirteen3}
            title={"Adidas CORE PANTS M FI 3BAR PANT"}
            price={"39,069"}
            slash={"48,819"}
            tag={"20"}
          />
          <Card2
            img={RowThirteen4}
            title={"Adidas SPORTS PERFORMANCE TEE SHIRT M FR T"}
            price={"16,849"}
            slash={"21,069"}
            tag={"20"}
          />

          <Card2
            img={RowThirteen5}
            title={"Adidas SPORTS PERFORMANCE T-SHIRT W E LIN SLIM T"}
            price={"11,649"}
            slash={"14,559"}
            tag={"20"}
          />

          <Card2
            img={RowThirteen6}
            title={"Adidas CORE PANTS M FI 3BAR PANT"}
            price={"39,069"}
            slash={"48,819"}
            tag={"20"}
          />
        </div>
      </div>
    </>
  );
}

export default RowThirteen;
