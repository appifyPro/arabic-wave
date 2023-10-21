import React from "react";
import Button from "../UI/Button";
import "./homepage.css";

export default function OurFlagCourses() {
  return (
    <div className="flag-courses">
      <header className="center">
        <h1>Our Flagship Courses</h1>
      </header>
      <section className="center">
        <div className="card center transition">
          <img
            src="/pics/Asset 4.png"
            alt=""
            style={{ height: "140px", width: "140px" }}
          />
          <h1>Tajweed Ul Quran</h1>
          <p>Beginning at 8 Years and Beyond!</p>
          <Button name="Read More" to="/course/tajweedulquran" />
        </div>
        <div className="card center transition">
          <img
            src="/pics/Asset 3.png"
            alt=""
            style={{ height: "140px", width: "140px" }}
          />
          <h1>Memorization of Quran</h1>
          <p>Beginning at 8 Years and Beyond!</p>
          <Button name="Read More" to="/course/memorizatingquran" />
        </div>
        <div className="card center transition">
          <img
            width={10}
            height={10}
            src="/pics/Asset 2.png"
            alt=""
            style={{ height: "140px", width: "140px" }}
          />
          <h1>Learn Arabic</h1>
          <p>Beginning at 8 Years and Beyond!</p>
          <Button name="Read More" to="/course/learnarabic" />
        </div>
        <div className="card center transition">
          <img
            src="/pics/Asset 1.png"
            alt=""
            style={{ height: "140px", width: "140px" }}
          />
          <h1>Learn Urdu</h1>
          <p>Beginning at 8 Years and Beyond!</p>
          <Button name="Read More" to="/course/learnurdu" />
        </div>
      </section>
    </div>
  );
}
