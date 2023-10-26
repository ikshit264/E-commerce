import React from "react";
import Payment from "../../../assets/payments.png"
import "./Credits.scss";
export default function Credits() {
  return (
    <div className="credit">
      <div className="right">
        JSDEVSTORE 2022 CREDITED BY JS DEV PREMIUM E-COMMERSE SOLLUTION
      </div>
      <div className="left">
        <img src={Payment} alt="" />
      </div>
    </div>
  );
}
