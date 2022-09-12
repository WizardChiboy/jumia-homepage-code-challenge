import React from "react";

import {
  RowTwelve1,
  RowTwelve2,
  RowTwelve3,
  RowTwelve4,
  RowTwelve5,
  RowTwelve6,
  RowTwelve7,
  RowTwelve8,
  RowTwelve9,
  RowTwelve10,
} from "../../imports/Imports";
import Card2 from "../two/Card2";
import "./RowTwelve.css";

function RowTwelve() {
  return (
    <>
      <div className="rowtwelve">
        <h3>Infinix Official Store | Free Delivery</h3>

        <div className="rowtwelve__cards">
          <Card2
            img={RowTwelve1}
            title={
              "Infinix Hot 12 Play (X6816) 6.82 HD+, 4GB RAM(UP TO 7GB) + 64GB ROM, 6000mAh, Android 11, 13MP Camera, 4G, Fingerprint - Black"
            }
            price={"92,990"}
            slash={"110,000"}
            tag={"15"}
          />
          <Card2
            img={RowTwelve2}
            title={"Infinix Smart 6 4G, 2GB/32G Memory - Green"}
            price={"61,180"}
            slash={"65,400"}
            tag={"6"}
          />
          <Card2
            img={RowTwelve3}
            title={
              "Infinix Note 12i (X6819) - 6.82 FHD+ (128GB ROM-4GB RAM)- Free Remax Wireless-High-ear Pods- 50 MP (wide) + 2 MP (depth) + QVGA 8MPSelfie - 4G LTE - 5000mAh -Black"
            }
            price={"113,900"}
            slash={"129,999"}
            tag={"12"}
          />
          <Card2
            img={RowTwelve4}
            title={
              "Infinix Hot 11 (X689F) 90Hz 6.82 HD,+4GB RAM+128GB ROM, 6000 MAh Battery, 50MP+ 2 +Al Lens Quad Flash Light - Exploratory Blue"
            }
            price={"91,990"}
            slash={"97,000"}
            tag={"5"}
          />

          <Card2
            img={RowTwelve5}
            title={
              "Infinix Hot 11S, 6.7 IPS LCD Screen, 4GB/64GB Memory, 50MP Triple Camera, 5000 mAh Battery, Android 11 - Green Wave"
            }
            price={"84,137"}
            slash={"85,000"}
            tag={"1"}
          />

          <Card2
            img={RowTwelve6}
            title={
              "IInfinix Note 11 Pro, 8GB/128GB Memory, Android 11 - Mist Blue"
            }
            price={"132,600"}
            slash={"190,900"}
            tag={"31"}
          />
          <Card2
            img={RowTwelve7}
            title={
              "Infinix HOT 12 Play- (X6816)- 6.82 - 64/4GB RAM-13MP/8MP-4G LTE-6000MAH - BLUE"
            }
            price={"89,400"}
            slash={"110,000"}
            tag={"19"}
          />

          <Card2
            img={RowTwelve8}
            title={
              "Infinix Note 11 Pro, 8GB/128GB Memory, Android 11 - Mithril Grey"
            }
            price={"132,600"}
            slash={"190,900"}
            tag={"31"}
          />

          <Card2
            img={RowTwelve9}
            title={
              "Infinix HOT 12 Play- (X6816)- 6.82 - 128/4GB RAM-13MP/8MP-4G LTE-6000MAH-BLUE"
            }
            price={"100,500"}
            slash={"110,000"}
            tag={"9"}
          />

          <Card2
            img={RowTwelve10}
            title={
              "Infinix Note 12 - 6.7 FHD+ (128GB ROM-4GB RAM)-50 MP (wide) + 2 MP (depth) + QVGA 16MPSelfie - 4G LTE - 5000mAh -Gold"
            }
            price={"128,800"}
            slash={"135,000"}
            tag={"5"}
          />
        </div>
      </div>
    </>
  );
}

export default RowTwelve;
