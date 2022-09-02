import React from "react";
import {
  HeaderSlide,
  JumiaFood,
  JumiaLogo,
  JumiaPay,
  JumiaPrime,
  StarLogo,
} from "../imports/Imports";
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
      </div>
    </>
  );
}

export default Header;
