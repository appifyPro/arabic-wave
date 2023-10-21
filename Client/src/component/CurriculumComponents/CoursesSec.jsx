import React from "react";
import Button from "../UI/Button";
import "./currpage.css";
export default function CoursesSection() {
  return (
    <>
      <section className="course-sec">
        {/* tajweed  */}
        <div className="course-container center">
          <div className="left-half">
            <img src="/pics/tajweed bg.png" alt="" />
            <div style={{ marginTop: "60px" }}>
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
          <div className="right-half center">
            <header className="center">
              <h1 className="center">
                Tajweed Ul-Quran
                <img
                  src="/pics/Asset 4.png"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
              </h1>
            </header>
            <div>
              <p>
                The Arabic word Tajweed linguistically means 'proficiency' or
                'doing something well'. It comes from the same root letters as
                the word Jayyid, which means 'good'.
                <Button name="Learn More" to="/course/tajweedulquran" />
              </p>
            </div>
          </div>
        </div>
        {/* Memorization */}
        <div className="course-container center">
          <div className="right-half center">
            <header className="center">
              <h1 className="center">
                Memorization of Quran
                <img
                  src="/pics/Asset 3.png"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
              </h1>
            </header>
            <div>
              <p>
                Allaah has given special privileges to the one who memorizes the
                Qur’an in a number of ways in this world and in the Hereafter,
                <Button name="Learn More" to="/course/memorizatingquran" />
              </p>
            </div>
          </div>
          <div className="left-half">
            <img src="/pics/hafiz bg.png" alt="" />
            <div style={{ marginTop: "60px" }}>
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
        </div>
        {/* arabic  */}
        <div className="course-container center">
          <div className="left-half">
            <img src="/pics/arabic bg.png" alt="" />
            <div style={{ marginTop: "60px" }}>
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
          <div className="right-half center">
            <header className="center">
              <h1 className="center">
                Learn Arabic
                <img
                  src="/pics/Asset 2.png"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
              </h1>
            </header>
            <div>
              <p>
                Arabic is the language of the Qur'an (or Koran, the sacred book
                of Islam) and the religious language of all Muslims. Literary
                Arabic
                <Button name="Learn More" to="/course/learnarabic" />
              </p>
            </div>
          </div>
        </div>
        {/* Urdu  */}
        <div className="course-container center">
          <div className="right-half center">
            <header className="center">
              <h1 className="center">
                Learn Urdu
                <img
                  src="/pics/Asset 1.png"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
              </h1>
            </header>
            <div>
              <p>
                Urdu is one of the cultural languages which has a rich
                literature and has familiarity with Hindi, Punjabi, Persian,
                Turkish, and Sanskrit.
                <Button name="Learn More" to="/course/learnurdu" />
              </p>
            </div>
          </div>
          <div className="left-half">
            <img src="/pics/urdu bg.png" alt="" />
            <div style={{ marginTop: "70px" }}>
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
