import React from "react";

import {
  RowTwentyTwo1,
  RowTwentyTwo2,
  RowTwentyTwo3,
  RowTwentyTwo4,
  RowTwentyTwo5,
  RowTwentyTwo6,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowTwentyTwo.css";

function RowTwentyTwo() {
  return (
    <>
      <div className="rowtwentytwo">
        <h3>Top Deals | Fashion</h3>

        <div className="rowtwentytwo__cards">
          <Card2
            img={RowTwentyTwo1}
            title={"Six Pairs-in-1 Quality Ankle Socks"}
            price={"1,275"}
            slash={"4,000"}
            tag={"68"}
          />
          <Card2
            img={RowTwentyTwo2}
            title={
              "Aomei Female Office Lady Casual Dress Mesh Polka Dot Sleeve Pink"
            }
            price={"5,999"}
            slash={"12,531"}
            tag={"52"}
          />
          <Card2
            img={RowTwentyTwo3}
            title={
              "VEJARO T09 Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Black"
            }
            price={"3,222"}
            slash={"12,800"}
            tag={"75"}
          />
          <Card2
            img={RowTwentyTwo4}
            title={"Adidas CORE SNEAKERS GRAND COURT BASE"}
            price={"28,519"}
            slash={"40,709"}
            tag={"30"}
          />

          <Card2
            img={RowTwentyTwo5}
            title={"Trendyolmilla T-Shirt - Black - Crop"}
            price={"2,997"}
            slash={"5,994"}
            tag={"50"}
          />

          <Card2
            img={RowTwentyTwo6}
            title={"Aviator Sunglasses For Men- UV Protection Lightweight"}
            price={"700"}
            slash={"4,356"}
            tag={"84"}
          />
        </div>
      </div>
    </>
  );
}

export default RowTwentyTwo;
