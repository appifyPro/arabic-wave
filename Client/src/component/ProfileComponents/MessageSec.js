import React, { useState } from "react";
import "./profile.css";
export default function TeacherMessage() {
  return (
    <>
      <div className="teacher-container">
        <ul>
          <li>
            <h1>Name of the teacher</h1>
            <p>this is the link of the resume</p>
            <div className="btns">
              <button className="accept btn">A</button>
              <button className="decline btn">D</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
