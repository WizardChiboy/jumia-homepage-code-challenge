import React from "react";
import "./ScrollTop.css";
import { KeyboardArrowUpIcon } from "../material-icons/Icons";

function ScrollTop() {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="scrolltop" onClick={handleScroll}>
        <KeyboardArrowUpIcon />
      </div>
    </>
  );
}

export default ScrollTop;
