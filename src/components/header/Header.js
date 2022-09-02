import React from "react";
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
  HelpOutlineIcon,
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../material-icons/Icons";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src={HeaderSlide} alt="header slide gif" />

        <div className="header__logos">
          <div className="header__logos__first">
            <a href="">
              <img src={StarLogo} alt="star logo" /> <p>sell on jumia</p>
            </a>{" "}
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
      </div>
    </>
  );
}

export default Header;
