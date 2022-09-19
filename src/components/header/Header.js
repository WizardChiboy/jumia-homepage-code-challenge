import React, { useState } from "react";
import Links from "../banner/Links";
import {
  HeaderSlide,
  JumiaFood,
  JumiaLogo,
  JumiaPay,
  JumiaPrime,
  StarLogo,
} from "../imports/Imports";
import {
  ArrowDropDownIcon,
  BabyChangingStationIcon,
  CarRentalIcon,
  CheckroomIcon,
  CloseIcon,
  ComputerIcon,
  DvrIcon,
  HealthAndSafetyIcon,
  HelpOutlineIcon,
  HomeIcon,
  MenuIcon,
  MoreIcon,
  PersonIcon,
  PhoneIphoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  SportsCricketIcon,
  SportsEsportsIcon,
  StoreIcon,
} from "../material-icons/Icons";
import "./Header.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="header">
        <img src={HeaderSlide} alt="header slide gif" />

        <div className="header__logos">
          <div className="header__logos__first">
            <a href="">
              <img src={StarLogo} alt="star logo" /> <p>sell on jumia</p>
            </a>
          </div>

          <div className="header__logos__second">
            <img src={JumiaLogo} alt="jumia" />
            <img src={JumiaPay} alt="jumia pay" />
            <img src={JumiaFood} alt="jumia food" />
            <img src={JumiaPrime} alt="jumia prime" />
          </div>
        </div>

        <div className="header__layer__three">
          <div className="header__layer__three__logo">
            <img src={JumiaLogo} alt="jumia logo" />
          </div>

          <div className="header__layer__three__cta">
            <div className="header__layer__three__cta__search">
              <SearchIcon />
              <input
                type="search"
                placeholder="search products, brands and categories"
                id=""
              />
            </div>
            <div className="header__layer__three__cta__search__btn">search</div>

            <div className="header__layer__three__cta__account">
              <PersonIcon />
              <p>account</p>
              <ArrowDropDownIcon />
            </div>

            <div className="header__layer__three__cta__help">
              <HelpOutlineIcon />
              <p>help</p>
              <ArrowDropDownIcon />
            </div>

            <div className="header__layer__three__cta__cart">
              <ShoppingCartIcon />
              <p>cart</p>
            </div>
          </div>
        </div>

        {/* mobile */}

        <div className="header__layer__three__mobile__main">
          {toggle && (
            <div className="header__layer__three__mobile__main__nav">
              <div className="banner__links">
                <div className="header__layer__three__logo">
                  <img src={JumiaLogo} alt="jumia logo" />

                  <div onClick={handleToggle}>
                    <CloseIcon />
                  </div>
                </div>
                <Links text={"super market"} icon={<StoreIcon />} />
                <Links
                  text={"health & beauty"}
                  icon={<HealthAndSafetyIcon />}
                />
                <Links text={"home & office"} icon={<HomeIcon />} />
                <Links text={"phones & tablet"} icon={<PhoneIphoneIcon />} />
                <Links text={"computing"} icon={<ComputerIcon />} />
                <Links text={"electronics"} icon={<DvrIcon />} />
                <Links text={"fashion"} icon={<CheckroomIcon />} />
                <Links
                  text={"baby products"}
                  icon={<BabyChangingStationIcon />}
                />
                <Links text={"gaming"} icon={<SportsEsportsIcon />} />
                <Links text={"sporting goods"} icon={<SportsCricketIcon />} />
                <Links text={"auto mobile"} icon={<CarRentalIcon />} />
                <Links text={"other categories"} icon={<MoreIcon />} />
              </div>
            </div>
          )}

          <div className="header__layer__three__mobile">
            <div
              className="header__layer__three__mobile__toggle"
              onClick={handleToggle}
            >
              <MenuIcon />
            </div>

            <div className="header__layer__three__logo">
              <img src={JumiaLogo} alt="jumia logo" />
            </div>

            <div className="header__layer__three__cta__account">
              <PersonIcon />
              <p>account</p>
            </div>

            <div className="header__layer__three__cta__cart">
              <ShoppingCartIcon />
              <p>cart</p>
            </div>
          </div>

          <div className="header__layer__three__cta__search">
            <SearchIcon />
            <input
              type="search"
              placeholder="search products, brands and categories"
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
