import React from "react";

import {
  RowEleven1,
  RowEleven2,
  RowEleven3,
  RowEleven4,
  RowEleven5,
  RowEleven6,
  RowEleven7,
  RowEleven8,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowEleven.css";

function RowEleven() {
  return (
    <>
      <div className="roweleven">
        <h3>Top Deals | Phones & Tablets</h3>

        <div className="roweleven__cards">
          <Card2
            img={RowEleven1}
            title={
              "UMIDIGI A11 Pro Max 8GB RAM,128GB ROM 6.8 Inch FHD Android 11 (48MP+16MP+2MP)+24MP Infrared Temperature Sensor 5150mAh-Mist Blue"
            }
            price={"95,900"}
            slash={"170,392"}
            tag={"44"}
          />
          <Card2
            img={RowEleven2}
            title={
              "Apple IPhone 13 6.1 XDR Display, (4GB RAM + 256GB ROM), IOS 15, With FaceTime - Midnight Black"
            }
            price={"601,999"}
            slash={"1,051,999"}
            tag={"43"}
          />
          <Card2
            img={RowEleven3}
            title={
              "XIAOMI Redmi 9A 6.53 Inches 2GB RAM 32GB ROM 13MP REAR CAMERA, 5MP FRONT CAMERA, 5000mAH- Sky Blue"
            }
            price={"58,800"}
            slash={"65,000"}
            tag={"10"}
          />
          <Card2
            img={RowEleven4}
            title={
              "Samsung Galaxy A03 Core, 2GB/32GB Memory, 5000 MAh Battery - Onyx"
            }
            price={"58,400"}
            slash={"68,000"}
            tag={"14"}
          />

          <Card2
            img={RowEleven5}
            title={"Infinix Smart 6 4G, 2GB/32G Memory -Polar Black"}
            price={"60,100"}
            slash={"65,400"}
            tag={"8"}
          />

          <Card2
            img={RowEleven6}
            title={"Infinix Hot 12 Play, 4GB/64GB Memory - Racing Black"}
            price={"85,950"}
            slash={"91,000"}
            tag={"6"}
          />
          <Card2
            img={RowEleven8}
            title={"Samsung Galaxy A13, 4GB/128GB Memory - Blue"}
            price={"112,000"}
            slash={"120,000"}
            tag={"7"}
          />
        </div>
      </div>
    </>
  );
}

export default RowEleven;
