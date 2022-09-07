import React from "react";
import Next from "../../button/Next";
import Prev from "../../button/Prev";
import {
  RowOne1,
  RowOne10,
  RowOne11,
  RowOne12,
  RowOne13,
  RowOne2,
  RowOne3,
  RowOne4,
  RowOne5,
  RowOne6,
  RowOne7,
  RowOne8,
  RowOne9,
} from "../../imports/Imports";
import "./RowOne.css";

function RowOne() {
  return (
    <>
      <div className="rowone">
        <div className="rowone__prev">
          <Prev />
        </div>

        <div>
          <a href="">
            <img src={RowOne1} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne2} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne3} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne4} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne5} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne6} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne7} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne8} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne9} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne10} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne11} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne12} alt="" />
          </a>
        </div>

        <div>
          <a href="">
            <img src={RowOne13} alt="" />
          </a>
        </div>

        <div className="rowone__next">
          <Next />
        </div>
      </div>
    </>
  );
}

export default RowOne;
