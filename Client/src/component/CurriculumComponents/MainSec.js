import React from "react";
import Button from "../UI/Button";
import "./currpage.css";
export default function MainSec() {
  return (
    <>
      <div className="curriculum">
        <div className="main-sec">
          <div className="disc">
            <h1>
              Join the most trusted online Quran and Arabic learning platform
            </h1>
            <Button name="Book A Free Trail" to="/bookfreetrail" />
          </div>
        </div>
      </div>
    </>
  );
}
