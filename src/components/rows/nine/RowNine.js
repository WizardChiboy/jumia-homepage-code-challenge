import React from "react";

import {
  RowNine1,
  RowNine10,
  RowNine2,
  RowNine4,
  RowNine3,
  RowNine5,
  RowNine6,
  RowNine8,
  RowNine9,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowNine.css";

function RowNine() {
  return (
    <>
      <div className="rownine">
        <h3>Daily Jumia Hot 10</h3>

        <div className="rownine__cards">
          <Card2
            img={RowNine1}
            title={
              "Oraimo 27000mAh Massive Power Charing Bank Traveller 3 Byte"
            }
            price={"18,500"}
            slash={"22,353"}
            tag={"17"}
          />
          <Card2
            img={RowNine2}
            title={
              "Oraimo FreePods-3 2Baba Edition BT5.2 Wireless Stereo Earbuds"
            }
            price={"16,400"}
            slash={"30,392"}
            tag={"46"}
          />
          <Card2
            img={RowNine3}
            title={"Six Pairs-in-1 Quality Ankle Socks"}
            price={"1,500"}
            slash={"4,000"}
            tag={"63"}
          />
          <Card2
            img={RowNine4}
            title={"WEYON 32 Inches LED TV +1 Years Warranty - Black"}
            price={"54,990"}
            slash={"98,020"}
            tag={"44"}
          />

          <Card2
            img={RowNine5}
            title={"Oraimo Power Bank OPB-P206DN 20KmAh"}
            price={"11,000"}
            slash={"15,761"}
            tag={"30"}
          />

          <Card2
            img={RowNine6}
            title={"Feng Shui Black Obsidian Wealth Bracelet"}
            price={"840"}
            slash={"2,000"}
            tag={"58"}
          />
          <Card2
            img={RowNine8}
            title={
              "Knorr Chicken Seasoning Cubes Taste The Knorr Difference 50x8g"
            }
            price={"715"}
            slash={"875"}
            tag={"18"}
          />

          <Card2
            img={RowNine9}
            title={
              "itel 2 USB Port, 2.4A Faster Charger With Free Fast Cable - White"
            }
            price={"2,250"}
            slash={"5,000"}
            tag={"55"}
          />
          <Card2
            img={RowNine10}
            title={"Geneva LED Luminous WristWatch - Black"}
            price={"1,650"}
            slash={"1,900"}
            tag={"13"}
          />
        </div>
      </div>
    </>
  );
}

export default RowNine;
