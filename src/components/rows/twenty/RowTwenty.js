import React from "react";

import {
  RowTwenty1,
  RowTwenty2,
  RowTwenty3,
  RowTwenty4,
  RowTwenty5,
  RowTwenty6,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowTwenty.css";

function RowTwenty() {
  return (
    <>
      <div className="rowtwenty">
        <h3>Top Deals | Half Price Store</h3>

        <div className="rowtwenty__cards">
          <Card2
            img={RowTwenty1}
            title={
              "UMIDIGI F3S (6GB,128GB ROM) 6.7 HD+ NFC 5150mAh Global Version (48MP+8MP+5MP)+16MP-Matte Silver"
            }
            price={"78,900"}
            slash={"156,667"}
            tag={"50"}
          />
          <Card2
            img={RowTwenty2}
            title={"EILIFINTE B06 Casual Crossbody Bag-Grey"}
            price={"1,743"}
            slash={"6,800"}
            tag={"74"}
          />
          <Card2
            img={RowTwenty3}
            title={
              "VEJARO T12 Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Red"
            }
            price={"3,137 - ₦ 3,780"}
            slash={"12,800"}
            tag={"75"}
          />
          <Card2
            img={RowTwenty4}
            title={
              "itel 2 USB Port, 2.4A Faster Charger With Free Fast Cable - White"
            }
            price={"2,190"}
            slash={"5,000"}
            tag={"56"}
          />

          <Card2
            img={RowTwenty5}
            title={
              "Fngeen 03 Luxury Classy Unisex Wrist Watch With Date/Week -Coffee"
            }
            price={"4,580"}
            slash={"25,000"}
            tag={"82"}
          />

          <Card2
            img={RowTwenty6}
            title={"Deco Gear Wireless Headphones Bluetooth 5.0"}
            price={"3,490"}
            slash={"6,330"}
            tag={"45"}
          />
        </div>
      </div>
    </>
  );
}

export default RowTwenty;
