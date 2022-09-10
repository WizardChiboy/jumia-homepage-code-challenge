import React from "react";

import {
  RowFive1,
  RowFive10,
  RowFive11,
  RowFive12,
  RowFive13,
  RowFive2,
  RowFive3,
  RowFive5,
  RowFive6,
  RowFive7,
  RowFive8,
  RowFive9,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowFive.css";

function RowFive() {
  return (
    <>
      <div className="rowfive">
        <h3>Top Deals | Free Delivery</h3>

        <div className="rowfive__cards">
          <Card2
            img={RowFive7}
            title={"Latest Men Sneakers -Black"}
            price={"4,990"}
            slash={"9,827"}
            tag={"49"}
          />
          <Card2
            img={RowFive8}
            title={"T&G Wireless Bluetooth Speaker With USB & TF Card-Black"}
            price={"4,775"}
            slash={"7,900"}
            tag={"40"}
          />
          <Card2
            img={RowFive9}
            title={
              "QUBO X668-6.53 HD+,(4GB,64GB ROM),4900mAh-13MP/8MP Android 11,4G"
            }
            price={"60,495"}
            slash={"101,337"}
            tag={"40"}
          />
          <Card2
            img={RowFive10}
            title={"Apple Refurbished IPhone 6 16GB - Gold - 4.7 Inch Grade A"}
            price={"45,000"}
            slash={"85,000"}
            tag={"47"}
          />

          <Card2
            img={RowFive1}
            title={"Men's Loafers Slip On Sneakers Men's Leather Shoes"}
            price={"3,750"}
            slash={"5,784 - ₦ 10,000"}
            tag={"63"}
          />

          <Card2
            img={RowFive3}
            title={
              "itel 43 Inches A4310AE FHD TV (With Over Voltage Protection)"
            }
            price={"154,455"}
            slash={"227,451"}
            tag={"32"}
          />
          <Card2
            img={RowFive2}
            title={
              "UWY 64GB Pendrive Flash . DriveUSB 2.0 Metal High Speed For PC"
            }
            price={"2,225"}
            slash={"3,876"}
            tag={"43"}
          />

          <Card2
            img={RowFive5}
            title={
              "Scarlett 7 Speed Electric Hand Mixer Whisk Egg Beater Cake Baking"
            }
            price={"4,545"}
            slash={"7,255"}
            tag={"37"}
          />
          <Card2
            img={RowFive6}
            title={
              "UMIDIGI A11 (3GB,64GB ROM) Android 11 Infrared Temperature Sensor 2.0 (16MP+8MP+5MP)+8MP 5150mAh 6.53 Global Version-Frost Grey"
            }
            price={"71,900"}
            slash={"111,569"}
            tag={"36"}
          />
          <Card2
            img={RowFive11}
            title={
              "UMIDIGI A13 Pro (6GB,128GB ROM) 5150mAh NFC (48MP+8MP+5MP)+16MP-Sunglow Gold"
            }
            price={"97,900"}
            slash={"150,784"}
            tag={"35"}
          />
          <Card2
            img={RowFive12}
            title={"LED Teeth Whitening Light - Blue"}
            price={"1,880"}
            slash={"2,532"}
            tag={"26"}
          />
          <Card2
            img={RowFive13}
            title={"WEYON 32 Inches LED TV +1 Years Warranty - Black"}
            price={"56,880"}
            slash={"98,020"}
            tag={"42"}
          />
        </div>
      </div>
    </>
  );
}

export default RowFive;
