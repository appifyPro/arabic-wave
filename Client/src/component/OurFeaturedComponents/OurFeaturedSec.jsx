import React from "react";
import Button from "../UI/Button";
import "./ourFeaturedpage.css";
export default function OurFeaturedSec() {
  return (
    <>
      <section className="thrd-sec">
        <div className="container center">
          <div className="right-half">
            <h1>
              Discover Excellence in Quranic Education with Arabic Wave Academy:
              Your Path to Mastery Begins Here!
            </h1>
            <p style={{ textAlign: "left" }}>
              Unlock the profound benefits of online Tajweed Ul Quran with
              Arabic Wave Academy. Our global experts provide top-notch
              guidance, ensuring you master the Shahidi Qaida and Structured
              Arabic Grammar. We prioritize your privacy, especially for women
              learners, offering a secure and comfortable online learning
              environment. Trust in our commitment to excellence as you embark
              on your Quranic journey. Join us and experience the world of
              speaking Education enriched with trust, knowledge, and
              empowerment.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
          <div
            className="left-half "
            // style={{ display: "flex", justifyContent: "right" }}
            style={{ height: "456px" }}
          >
            <img
              src="/pics/feat 1.png"
              alt=""
              style={{ height: "100%", width: "100%", borderRadius: "0px" }}
            />
          </div>
        </div>
        <div className="container center">
          <div
            className="left-half"
            // style={{ display: "flex", justifyContent: "left" }}
            style={{ height: "470px" }}
          >
            <img
              src="/pics/feat 3.png"
              alt=""
              style={{ height: "100%", width: "100%", borderRadius: "0px" }}
            />
          </div>
          <div className="right-half">
            <h1>Preserve the Quran in Your Heart: The Art of Hifz Ul Quran.</h1>
            <p style={{ textAlign: "left" }}>
              Join Arabic Wave Academy on a transformative journey to become a
              Hafiz of the Quran swiftly. Our unique curriculum, crafted by
              certified experts, ensures efficient and accessible learning.
              Starting with mandatory surahs from the Amma Parah, we build
              strong foundations in recitation and pronunciation. Then, we
              tackle the monumental task of memorizing Surah Al-Baqarah.
            </p>
            <p style={{ textAlign: "left", marginTop: "10px" }}>
              Parents who support their children in memorizing the Quran earn
              immense rewards and create an enduring legacy of ongoing charity
              and beneficial knowledge
            </p>
            <p style={{ textAlign: "left" }}>
              Join us on this journey, enrich your life with Quranic blessings,
              and secure eternal rewards for both you and your parents. Become a
              Hafiz with Arabic Wave Academy.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
        </div>
        <div className="container center">
          <div className="right-half">
            <h1>Defining and Achieving Your Learning Goals</h1>
            <p style={{ textAlign: "left" }}>
              At Arabic Wave Academy, we believe that embarking on the journey
              to master the Quran and the Arabic language is a profound and
              transformative experience. To ensure your success on this
              beautiful journey, it's crucial to define clear learning goals
              that guide your path towards excellence. Our commitment extends
              beyond education; we are dedicated to helping you shape and
              achieve your vibrant goals in Quranic education.
            </p>
            <p style={{ marginTop: "10px", textAlign: "left" }}>
              <strong>Tajweed Ul Quran:</strong> If your aim is to perfect your
              Quranic recitation, we are here to ensure that every letter, every
              pronunciation aligns harmoniously with the rules of Tajweed. Your
              fluency and precision in Quranic recitation will be your cherished
              achievement.
            </p>
            <p style={{ marginTop: "10px", textAlign: "left" }}>
              <strong>Qirat:</strong> If you dream of becoming a skilled Qari,
              our experienced instructors will nurture your talent. Your
              aspiration to recite the Quran melodiously and emotionally,
              touching the hearts of listeners, will be realized here.
            </p>
            <p style={{ marginTop: "10px", textAlign: "left" }}>
              <strong>Arabic Grammar:</strong> If your aspiration is to master
              Arabic grammar, our comprehensive courses will navigate you
              through the intricacies of the language. Your goal of profound
              comprehension of the Quranic text in its original form is our
              shared mission.
            </p>
            <p style={{ marginTop: "10px", textAlign: "left" }}>
              <strong>Spoken Arabic:</strong> If conversational Arabic is your
              target, our structured courses will empower you to excel in
              everyday communication. Your ability to engage in meaningful
              Arabic conversations will be a testament to our success.
            </p>
            <p style={{ marginTop: "10px", textAlign: "left" }}>
              Arabic Wave Academy takes its responsibility earnestly. Our expert
              instructors, meticulously crafted curriculum, and personalized
              guidance are all designed to help you define your learning goals
              and, more importantly, ensure that you achieve them. Your journey
              with us will be marked by milestones, growth, and a tapestry of
              accomplishments. We will be your unwavering support system every
              step of the way. Welcome to a world of Quranic education where
              your aspirations and dreams become vibrant realities.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button name="Book A Free Trail" to="/bookfreetrail" />
            </div>
          </div>
          <div
            className="left-half"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "780px",
            }}
          >
            <img
              src="/pics/feat 2.png"
              alt=""
              style={{ height: "100%", width: "100%", borderRadius: "0px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
