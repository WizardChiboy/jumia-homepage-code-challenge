import React from "react";
import "./Banner.css";
import {
  BabyChangingStationIcon,
  CarRentalIcon,
  CheckroomIcon,
  ComputerIcon,
  DvrIcon,
  HealthAndSafetyIcon,
  HomeIcon,
  MoreIcon,
  PhoneIphoneIcon,
  SportsCricketIcon,
  SportsEsportsIcon,
  StoreIcon,
} from "../material-icons/Icons";
import Links from "./Links";

import {
  Mini1,
  Mini2,
  Slide,
  Slide2,
  Slide3,
  Slide4,
} from "../imports/Imports";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner__links">
          <Links text={"super market"} icon={<StoreIcon />} />
          <Links text={"health & beauty"} icon={<HealthAndSafetyIcon />} />
          <Links text={"home & office"} icon={<HomeIcon />} />
          <Links text={"phones & tablet"} icon={<PhoneIphoneIcon />} />
          <Links text={"computing"} icon={<ComputerIcon />} />
          <Links text={"electronics"} icon={<DvrIcon />} />
          <Links text={"fashion"} icon={<CheckroomIcon />} />
          <Links text={"baby products"} icon={<BabyChangingStationIcon />} />
          <Links text={"gaming"} icon={<SportsEsportsIcon />} />
          <Links text={"sporting goods"} icon={<SportsCricketIcon />} />
          <Links text={"auto mobile"} icon={<CarRentalIcon />} />
          <Links text={"other categories"} icon={<MoreIcon />} />
        </div>

        <div className="banner__slides">
          <div>
            <img src={Slide} alt="banner" />
          </div>
          {/* <div>
              <img src={Slide2} alt="banner" />
            </div>

            <div>
              <img src={Slide3} alt="banner" />
            </div>

            <div>
              <img src={Slide4} alt="banner" />
            </div> */}
        </div>

        <div className="banner__mini">
          <div className="banner__mini__one">
            <img src={Mini1} alt="" />
          </div>

          <div className="banner__mini__two">
            <img src={Mini2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
