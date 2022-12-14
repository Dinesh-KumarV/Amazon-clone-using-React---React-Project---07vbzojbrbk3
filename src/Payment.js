import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <div className="payment">
        <h1>
          {basket.length === 0
            ? "Please purchase something"
            : "Thanks for Purchasing from Amazon clone done by Dinesh"}
        </h1>
        <img
          src={
            basket.length === 0
              ? "https://thumbs.dreamstime.com/b/no-idea-i-don-t-know-portrait-uncertain-confused-ginger-girl-sweater-expressing-doubts-bewilderment-no-idea-i-don-t-know-171143079.jpg"
              : "https://i.pinimg.com/originals/a1/6e/7b/a16e7b300475b2f11e40f32bbbf8b05f.png"
          }
        ></img>
      </div>
    </div>
  );
}

export default Payment;
