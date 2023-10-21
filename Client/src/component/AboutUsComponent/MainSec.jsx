import React from "react";
import Button from "../UI/Button";
import "./aboutuspage.css";
export default function MainSec() {
  return (
    <>
      <div className="aboutus">
        <div className="main-sec">
          <div className="disc">
            <h1>Join the most trusted online Quran learning platform</h1>
            <Button name="Book A Free Trail" to="/bookfreetrail" />
          </div>
        </div>
      </div>
    </>
  );
}
