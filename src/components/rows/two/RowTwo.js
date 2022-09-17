import React from "react";

import {
  RowTwo1,
  RowTwo10,
  RowTwo11,
  RowTwo12,
  RowTwo13,
  RowTwo2,
  RowTwo4,
  RowTwo5,
  RowTwo6,
  RowTwo7,
  RowTwo8,
  RowTwo9,
} from "../../imports/Imports";
import Card2 from "./Card2";
import "./RowTwo.css";

function RowTwo() {
  return (
    <>
      <div className="rowtwo">
        <h3>Top selling items</h3>

        <div className="rowtwo__cards">
          <Card2
            img={RowTwo7}
            title={"unisex ash sneakers"}
            price={"11,000"}
            slash={"17,000"}
            tag={"10"}
          />
          <Card2
            img={RowTwo8}
            title={"2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB"}
            price={"127,081"}
            slash={"290,000"}
            tag={"56"}
          />
          <Card2
            img={RowTwo9}
            title={"Latest Men Sneakers -Black"}
            price={"4,990"}
            slash={"9,827"}
            tag={"49"}
          />
          <Card2
            img={RowTwo10}
            title={"black jacket for men"}
            price={"3500"}
            slash={"7,000"}
            tag={"13"}
          />

          <Card2 img={RowTwo1} title={"samsung galaxy a23"} price={"124,000"} />
          <Card2
            img={RowTwo2}
            title={
              "tNokia 3.2 - 6.26 HD+ DISPLAY -16GBROM + 2GB RAM-13MP + 5MP-ANDROID 9 PIE -4000MAH-FACE UNLOCK-BLACK"
            }
            price={"39,990"}
            slash={"49,990"}
            tag={"20"}
          />

          <Card2
            img={RowTwo4}
            title={"Yemlays Men's Casual Shoe -blue"}
            price={"4,980"}
            slash={"7,827"}
            tag={"36"}
          />
          <Card2
            img={RowTwo5}
            title={"VEJARO T04 Women's Fashion Short Sleeve T Shirt-Black"}
            price={"1,799"}
            slash={" 6,500"}
            tag={"72"}
          />
          <Card2
            img={RowTwo6}
            title={
              "Infinix HOT 12i- (X665B) '6.6 HD+ IPS-64GB/3GB RAM-13MP/8MP-5000MAH-4GLite-FINGERPRINT- Gold"
            }
            price={"75,999"}
            slash={"89,000"}
            tag={"15"}
          />
          <Card2
            img={RowTwo11}
            title={"Infinix Note 12i, 4GB/128GB Memory - Force Black"}
            price={"105,000"}
            slash={"134,000"}
            tag={"22"}
          />
          <Card2
            img={RowTwo12}
            title={"32 inchs plasma LED tv"}
            price={"86,000"}
            slash={"104,000"}
            tag={"15"}
          />
          <Card2
            img={RowTwo13}
            title={"Men's Sports Running Shoes -White"}
            price={"6,870 - ₦ 6,880"}
            slash={"12,000"}
            tag={"43"}
          />
        </div>
      </div>
    </>
  );
}

export default RowTwo;
