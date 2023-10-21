import React from "react";
import Button from "./Button";

export default function MiniMainSec(props) {
  return (
    <>
      <div className={props.headClass}>
        <div className="mini-sec transition">
          <div className="disc">
            <h1>{props.header}</h1>
            <p>{props.p}</p>
            <div className="btns center" style={{ marginTop: "15px" }}>
              <Button name="Book A Free Trail" to="/bookfreetrail" />
              <Button name="Join Us" to="/joinasteacher" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
