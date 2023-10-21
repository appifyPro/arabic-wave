import React from "react";
import "./aboutuspage.css";
export default function ThirdSec() {
  return (
    <>
      <section className="thrd-sec">
        <div className="container center">
          <div className="right-half">
            <h1 style={{ fontSize: "30px" }}>Our Mission</h1>
            <p style={{ textAlign: "left", fontSize: "18px" }}>
              At "Arabic Wave Academy," our foremost mission is to foster an
              unbreakable connection between you and the Quran through the art
              of Tajweed. We believe that every syllable, every melody, is a
              reflection of divine wisdom, and we're dedicated to ensuring that
              this essence is preserved in your study. As we walk alongside you
              on this journey, guided by the timeless wisdom of the Prophet
              (peace be upon him), our commitment is to illuminate the path that
              leads to a profound Quranic understanding—a connection that
              transcends the confines of time itself.
            </p>
          </div>
          <div className="left-half " style={{ height: "370px" }}>
            <img
              src="/pics/ourmission.png"
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "0px",
                padding: "0px",
              }}
            />
          </div>
        </div>
        <div className="container center">
          <div
            className="left-half "
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <img
              src="/pics/ourvision.png"
              alt=""
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "0px",
                padding: "0px",
              }}
            />
          </div>
          <div className="right-half">
            <h1 style={{ fontSize: "30px" }}>Our Vision</h1>
            <p style={{ textAlign: "left", fontSize: "18px" }}>
              We aim to teach the Quran to individuals all around the world. We
              at Arabic Wave work hard so that every Muslim can understand and
              read the Holy Quran by following the rules of Tajweed. We wish
              that the students will use what they have learned in their
              everyday lives to be good examples for this global society. We
              strive to teach people so that every Muslim not just reads the
              Quran but also should know the true meaning of the Quran.
            </p>
            <p
              style={{
                paddingTop: "14px",
                textAlign: "left",
                fontSize: "18px",
              }}
            >
              We extend our invitation to you, regardless of age, to join us on
              this enlightening expedition. Together, we'll navigate the
              intricate tapestry of Tajweed, meticulously unlocking the radiant
              verses of the Quran, beginning at the tender age of 8 and
              stretching beyond all boundaries. "Arabic Wave Academy" isn't just
              a platform—it's a sanctuary for seekers of knowledge, a sanctuary
              where the Quran comes alive in its purest form, awaiting your
              embrace.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
