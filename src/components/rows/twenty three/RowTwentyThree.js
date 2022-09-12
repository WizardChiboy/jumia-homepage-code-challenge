import React from "react";

import {
  RowTwentyThree1,
  RowTwentyThree2,
  RowTwentyThree3,
  RowTwentyThree4,
  RowTwentyThree5,
  RowTwentyThree6,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowTwentyThree.css";

function RowTwentyThree() {
  return (
    <>
      <div className="rowtwentythree">
        <h3>Top Deals | Computing</h3>

        <div className="rowtwentythree__cards">
          <Card2
            img={RowTwentyThree1}
            title={
              "Asus E410MA-EK1015T LAPTOP (CEL-N4020/4GB/128GB/14.0 FHD/WIN10) - STAR BLACK"
            }
            price={"139,330"}
          />
          <Card2
            img={RowTwentyThree2}
            title={"2.4Ghz Wireless Gaming Mouse / Mice - Gray"}
            price={"1,998"}
            slash={"3,163"}
            tag={"37"}
          />
          <Card2
            img={RowTwentyThree3}
            title={"Metal Foldable Adjustable Stand Holder For Laptop"}
            price={"2,900"}
            slash={"3,706"}
            tag={"22"}
          />
          <Card2
            img={RowTwentyThree4}
            title={
              "Eaget Pen Flash Drive 3.0 64GB - Metal OTG Micro USB Type-C"
            }
            price={"3,090"}
            slash={"4,275"}
            tag={"28"}
          />

          <Card2
            img={RowTwentyThree5}
            title={
              "Hp 15 Pentium Silver 4GB RAM 500GB Win 10 + 1 Year Warranty"
            }
            price={"174,655"}
            slash={"200,000"}
            tag={"13"}
          />

          <Card2
            img={RowTwentyThree6}
            title={
              "Eaget Pen Flash Drive 3.0 32GB - Metal OTG Micro USB Type-C"
            }
            price={"2,690"}
            slash={"3,431"}
            tag={"22"}
          />
        </div>
      </div>
    </>
  );
}

export default RowTwentyThree;
