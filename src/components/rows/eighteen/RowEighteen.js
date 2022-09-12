import React from "react";

import {
  RowEighteen1,
  RowEighteen2,
  RowEighteen3,
  RowEighteen4,
  RowEighteen5,
  RowEighteen6,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowEighteen.css";

function RowEighteen() {
  return (
    <>
      <div className="roweighteen">
        <h3>Top Deals | Home & Office</h3>

        <div className="roweighteen__cards">
          <Card2
            img={RowEighteen1}
            title={"Household Kitchen Tap Water Purifier Filter"}
            price={"1,126"}
            slash={"1,520"}
            tag={"26"}
          />
          <Card2
            img={RowEighteen2}
            title={
              "450mL 7-color Night Light Mist Humidifier Diffuser USB Quiet"
            }
            price={"4,390"}
            slash={"6,000"}
            tag={"27"}
          />
          <Card2
            img={RowEighteen3}
            title={
              "Skyrun 1HP-Split Copper Air Conditioner-KF-25GWC-FHR4/A-White"
            }
            price={"169,990"}
            slash={"240,000"}
            tag={"29"}
          />
          <Card2
            img={RowEighteen4}
            title={
              "10Layer 9Grid Dustproof Shoe Rack Shelf Storage Closet-Brown"
            }
            price={"5,800"}
            slash={"10,245"}
            tag={"43"}
          />

          <Card2
            img={RowEighteen5}
            title={"Century 11L Electric Oven - COV 8320-B"}
            price={"15,100"}
            slash={"25,000"}
            tag={"40"}
          />

          <Card2
            img={RowEighteen6}
            title={"LCD Display Digital Timer Switch Socket"}
            price={"7,200"}
            slash={"8,504"}
            tag={"15"}
          />
        </div>
      </div>
    </>
  );
}

export default RowEighteen;
