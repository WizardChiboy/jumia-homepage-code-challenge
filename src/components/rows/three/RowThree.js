import React from "react";
import {
  RowThree1,
  RowThree10,
  RowThree11,
  RowThree12,
  RowThree13,
  RowThree2,
  RowThree3,
  RowThree4,
  RowThree5,
  RowThree6,
  RowThree7,
  RowThree8,
  RowThree9,
} from "../../imports/Imports";
import { ChevronRightIcon } from "../../material-icons/Icons";
import Timer from "../../timer/Timer";
import Card3 from "./Card3";
import "./RowThree.css";

function RowThree() {
  return (
    <>
      <div className="rowthree">
        <div className="rowthree__header">
          <div className="rowthree__header__flash">Flash Sales</div>

          <div className="rowthree__header__timer">
            <Timer
              date="december 27, 2022 11:00:00"
              closedText={"game closed for this week"}
            />
          </div>

          <div className="rowthree__header__more">
            SEE ALL <ChevronRightIcon />
          </div>
        </div>

        <div className="rowthree__cards">
          <Card3
            img={RowThree1}
            title={
              "UMIDIGI G1 (2GB,32GB ROM) 6.52 HD+ 5150mAh Android Smartphone Unlocked (13MP+2MP)+13MP-Starry Black"
            }
            price={"52,900"}
            slash={"79,900"}
            tag={"34"}
            item={10}
          />

          <Card3
            img={RowThree2}
            title={"Costa Mackerel In Tomato Sauce 155g x 1"}
            price={"360"}
            item={50}
          />

          <Card3
            img={RowThree3}
            title={"Coca-cola Drink - 50cl Pet x 12"}
            price={"1,600"}
            item={50}
          />

          <Card3
            img={RowThree4}
            title={
              "Sunlight 2in1 Tropical Sensations Handwash Washing Powder 900g"
            }
            price={"990"}
            item={50}
          />

          <Card3
            img={RowThree5}
            title={"Knorr Natural Triple Pack (3 beef + 3 chicken)"}
            price={"1,995"}
            slash={"2,400"}
            tag={"17"}
            item={4}
          />

          <Card3
            img={RowThree6}
            title={"Costa Mackerel In Tomato Sauce 155g x 10"}
            price={"3,600"}
            item={50}
          />

          <Card3
            img={RowThree7}
            title={"Indomie Regular Chicken Flavour 70G X 40"}
            price={"4,060"}
            item={50}
          />

          <Card3
            img={RowThree8}
            title={
              "NIVEA Perfect & Radiant Body Lotion For Women - 400ml (Pack Of 2)"
            }
            price={"3,900"}
            item={50}
          />

          <Card3
            img={RowThree9}
            title={"X1 TWS Bluetooth 5.1 Earphones Waterproof With Microphone"}
            price={"3,128"}
            slash={"7,850"}
            tag={"60"}
            item={7}
          />

          <Card3
            img={RowThree10}
            title={"Guinness Malta Can 330ml x24"}
            price={"4,990"}
            item={50}
          />

          <Card3
            img={RowThree11}
            title={"Power Oil 3L Bottle X1"}
            price={"4,400"}
            item={20}
          />

          <Card3
            img={RowThree12}
            title={
              "NIVEA Perfect & Radiant Luminous630 Anti Dark Marks Serum 30ml & Anti Dark Marks Day Cream SPF50 (bundle Pack)"
            }
            price={"12,800"}
            slash={"16,000"}
            tag={"20"}
            item={36}
          />

          <Card3
            img={RowThree13}
            title={
              "NIVEA Perfect & Radiant Body Lotion For Women - 400ml (Pack Of 2)"
            }
            price={"3,900"}
            item={50}
          />
        </div>
      </div>
    </>
  );
}

export default RowThree;
