import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "../UI/Button";
import "./homepage.css";
import { Box } from "@mui/material";

export default function OurCurriculum() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5.3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2.3,
    },
    minTablet: {
      breakpoint: { max: 780, min: 480 },
      items: 1.7,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  const handleFileClick = (file) => {
    window.open(file);
  };

  return (
    <section className="curriculum-sec">
      <header className="center">
        <h1>Our Curriculum</h1>
      </header>
      <Carousel responsive={responsive}>
        <div
          className="container-card center"
          style={{
            width: "20em",
            height: "29em",
          }}
          // style={{
          //   width: { xs: "21em", md: "25em" },
          //   height: { xs: "57em", md: "37em" },
          // }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -1</h1>
              <h2>Tajweed Basics</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Master Arabic alphabet through engaging exercises</p>
              {/* <p>Get completed كلمات</p>
              <p>Test and evaluate your Tajweed.</p>
              <p>8-15 Classes</p> */}
              <p>Distinguish similar-sounding letters</p>
              <p>Explore articulation points</p>
              <p>Practice with interactive exercises</p>
              <p>
                30 Classes - including Lesson 1 to 2 with Testing and Evaluation
                Report
              </p>
              <p style={{ fontWeight: "bold" }}>Earn Certification Level -1</p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/1st-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/5kAeWI7qta7sfgk288")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -2</h1>
              <h2> Harakaat and Maddah</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Learn the significance of Harakaat</p>
              <p>Achieve precise intonation</p>
              <p>Discover Maddah letters</p>
              <p>Evaluate your understanding</p>
              <p>
                15 Classes - Including Lessons 3 to 4 with Testing and
                Evaluation Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/2nd-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/4gw5m87qtbbwecg289")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -3</h1>
              <h2>Leen and Special Marks</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Understand Standing Zabr, Zair, and Inverted Paish</p>
              <p>Dive into Leen Alphabets</p>

              <p>Complete exercises</p>
              <p>
                15 Classes - Including Lesson 5 to 6 with Testing and Evaluation
                Report
              </p>
              <p style={{ fontWeight: "bold" }}>Earn Certification Level -2</p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/3rd-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/bIYcOAdOR6Vgc48fZ0")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -4</h1>
              <h2>Qalqalah and Tashdeed</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Gain insight into Qalqalah letters</p>
              <p>Control vibrations</p>
              <p>Integrate Qalqalah into your recitation</p>
              <p>Delve into Tashdeed</p>
              <p>
                13 Classes - Including Lesson 7 to 8 with Testing and Evaluation
                Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/4th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/dR629W2691AW0lq28b")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            {/* <h1>Module -5</h1> */}
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -5</h1>
              <h2> Silent Words and Stops</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Explore silent words</p>
              <p>Engage with Qamari and Shamsi letters</p>
              <p>Understand Waqf (stopping)</p>
              <p>Gauge your progress</p>
              <p>
                15 Classes – Including Lesson 9 with Testing and Evaluation
                Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/5th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/4gw4i4fWZdjE9W0aEI")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -6</h1>
              <h2>Tanween Noon e Sakin -1</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Master Tanween and Noon e Sakin rules</p>
              <p>Learn Ikhfa and Iqlab</p>
              <p>Test your skills</p>
              <p>
                15 Classes - Including Lesson 10 to 13 with Testing and
                Evaluation Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/6th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/14k9CoeSV6Vgecg6ot")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -7</h1>
              <h2>Tanween Noon e Sakin -2</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Explore Izhar and Idgham</p>
              <p>Arabic phonetic rules and assimilation of sounds</p>
              <p>Practice basic Idgham</p>
              <p>
                13 Classes – Including Lesson 14 to 15 with Testing and
                Evaluation Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/7th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/8wM3e08uxgvQc4828e")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -8</h1>
              <h2>Idgham and Meem e Sakin</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Grasp Idgham rules</p>
              <p>Master Meem e Sakin rules</p>
              <p>Exercise with Mushaddat letters</p>
              <p>Explore Lafze Allah</p>
              <p>
                15 Classes – Including Lesson 16 to 18 with Testing and
                Evaluation Report
              </p>
              <p style={{ fontWeight: "bold" }}>Earn Certification Level -3</p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/8th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/dR6cOA9yB6Vgb04eV1")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -9</h1>
              <h2>Waqf (Stop) & Ibtida (Start)</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Identify suitable pause points (Waqf)</p>
              <p> Techniques for resuming recitation (Ibtida)</p>
              <p>Understand the importance of pauses</p>
              <p>Test and achieve Level-3 Tajweed Batch Certification</p>
              <p>
                13 Classes – Including Lesson 19 with Testing and Evaluation
                Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/9th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/dR629WcKNgvQb049AI")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -10</h1>
              <h2>Hamza Wasli, Noon Qutni</h2>
            </div>
            <hr />

            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Connects two words without pausing.</p>
              <p>Involves stopping or pausing at word or verse endings.</p>
              <p>Silent Words: Quran's Silent Letter Conveyors.</p>
              <p>Mastery of Tafkheem, Tarqeeq, and Raa</p>
              <p>18 Classes Lesson 20 to 22 with Report</p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/10th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/cN25m85il2F00lq14d")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -11</h1>
              <h2>Madd (Lengthening)</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Explore various forms of Madd</p>
              <p>Techniques for elongating vowels</p>
              <p>Exercises to improve Madd pronunciation</p>
              <p>Maintain a consistent rhythm</p>
              <p>
                13 Classes – Including Lesson 23 to 24 with Testing and
                Evaluation Report
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/11th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/dR6dSE7qt2F0c487sC")
              }
            >
              Join Now
            </button>
          </div>
        </div>
        <div
          className="container-card center"
          style={{ width: "20em", height: "29em" }}
        >
          <div className="card-disc center">
            <div
              style={{
                color: "white",

                height: "100%",
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                backgroundColor: "#004143",
              }}
            >
              <h1>Module -12</h1>
              <h2>Practice and Recitation</h2>
            </div>
            <hr />
            <div className="card-p" style={{ marginTop: "10px" }}>
              <p>Apply Tajweed rules in comprehensive exercises</p>
              <p>Build confidence in Quranic recitation</p>
              <p>Cultivate a profound connection</p>
              <p>
                20 Classes –including lesson 25 with Final Evaluation Report
              </p>
              <p style={{ fontWeight: "bold" }}>Earn Tajweed Ul Quran Batch</p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingBottom: "15px" }}>
            <a
              onClick={() => {
                handleFileClick("/files/12th-module-curriculum.pdf");
              }}
            >
              View Detailed Curriculum
            </a>
          </div>
          <div
            className="card-learn center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            {/* <h1>$21</h1> */}
            <Button name="Free Trail" to="/bookfreetrail" />
            <button
              className="btn"
              style={{
                backgroundColor: "#008e90",
                color: "white",
                height: "2em",
                padding: "0em 1em",
                margin: "0px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              onClick={() =>
                (window.location.href =
                  "https://book.stripe.com/eVaeWI4eha7sgkobIT")
              }
            >
              Join Now
            </button>
          </div>
        </div>
      </Carousel>
      ;
    </section>
  );
}
