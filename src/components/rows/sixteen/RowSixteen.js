import React from "react";

import {
  RowSixteen1,
  RowSixteen2,
  RowSixteen3,
  RowSixteen4,
  RowSixteen5,
  RowSixteen6,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowSixteen.css";

function RowSixteen() {
  return (
    <>
      <div className="rowsixteen">
        <h3>Top Deals | Health & Beauty</h3>

        <div className="rowsixteen__cards">
          <Card2
            img={RowSixteen1}
            title={
              "Kiki New Gain LED Display Cordless Rechargeable Clipper NG-888B"
            }
            price={"7,250"}
            slash={"7,800"}
            tag={"7"}
          />
          <Card2
            img={RowSixteen2}
            title={
              "NIVEA Perfect & Radiant Luminous630 Anti Dark Marks Day Cream SPF50"
            }
            price={"8,000"}
          />
          <Card2
            img={RowSixteen3}
            title={
              "SHARE THIS PRODUCT Pei Mei Brightening Vitamin C Serum/Anti-acne."
            }
            price={"1,500"}
            slash={"1,650"}
            tag={"9"}
          />
          <Card2
            img={RowSixteen4}
            title={"Colgate SENSITIVE PRO-RELIEF 75ML (INSTANT RELIEF) x1"}
            price={"1,345"}
          />

          <Card2
            img={RowSixteen5}
            title={"Nova 3 In 1 Hair Straightener, Curler And Comb (Nova)"}
            price={"2,600"}
            slash={"7,850"}
            tag={"67"}
          />

          <Card2
            img={RowSixteen6}
            title={
              "Habetong Aloe Vera Soothing/Moisturizing Sunburn Repair Gel"
            }
            price={"1,512"}
            slash={"2,500"}
            tag={"40"}
          />
        </div>
      </div>
    </>
  );
}

export default RowSixteen;
