import React from "react";
import "./Card2.css";

function Card2({ img, tag, title, price, slash }) {
  return (
    <>
      <div className="card__two">
        <div className="card__two__img">
          {tag && <div className="card__two__tag">-{tag}%</div>}

          <img src={img} alt="" />
        </div>
        <div className="card__two__name">
          {title.toString().slice(0, 20) + "..."}
        </div>
        <div className="card__two__price">₦ {price}</div>
        {slash && <div className="card__two__price__slash">₦{slash}</div>}
      </div>
    </>
  );
}

export default Card2;
