import React from "react";
import "./Card3.css";

function Card3({ img, tag, title, price, slash, item, range }) {
  return (
    <>
      <div className="card__three">
        <div className="card__three__img">
          {tag && <div className="card__three__tag">-{tag}%</div>}

          <img src={img} alt="" />
        </div>
        <div className="card__three__name">
          {title.toString().slice(0, 20) + "..."}
        </div>
        <div className="card__three__price">₦ {price}</div>
        {slash && <div className="card__three__price__slash">₦{slash}</div>}

        <div className="card__three__items__left">
          <p>{item} items left</p>
          {/* <input type="range" name="" id="" value={90} /> */}
        </div>
      </div>
    </>
  );
}

export default Card3;
