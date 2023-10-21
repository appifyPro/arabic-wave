import React from "react";
import OurFlagCourses from "../HomeComponent/Courses";
import "./learningpages.css";
export default function LearnUrduSec() {
  return (
    <>
      <section className="learn-sec">
        <div className="learn-first-sec">
          <div className="center" style={{ width: "100%", height: "37em" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="/pics/courseimg3.jpg"
              alt="tajweed course img"
            />
          </div>
          <div className="content">
            <h1>Learning Urdu language by Arabic Wave Academy</h1>
            <p
              style={{ marginTop: "10px", fontSize: "18px", lineHeight: "1.7" }}
            >
              Arabic Wave Academy invites you to embark on a captivating journey
              of Urdu language mastery. Our comprehensive Urdu course
              encompasses reading, writing, and speaking, ensuring you become
              proficient in this rich and expressive language.
            </p>
            <p
              style={{ marginTop: "10px", fontSize: "18px", lineHeight: "1.7" }}
            >
              What sets our program apart is the unwavering commitment of our
              certified instructors. With a deep passion for Urdu, they are not
              just educators but language enthusiasts who guide you through
              every aspect of Urdu fluency. Hailing from diverse linguistic
              backgrounds, our instructors offer a holistic learning experience.
            </p>
            <p
              style={{ marginTop: "10px", fontSize: "18px", lineHeight: "1.7" }}
            >
              Our curriculum is thoughtfully designed to cater to learners at
              all levels, from beginners to advanced. Whether you're eager to
              read classical Urdu literature, express yourself fluently in
              conversation, or pen down your thoughts in elegant Urdu script, we
              have you covered.
            </p>
            <p
              style={{ marginTop: "10px", fontSize: "18px", lineHeight: "1.7" }}
            >
              Arabic Wave Academy takes pride in providing exclusive training of
              the highest quality. We understand that language is more than just
              words; it's a gateway to culture, expression, and connection. With
              us, you'll not only master Urdu but also gain a profound
              understanding of its cultural nuances.
            </p>
            <p
              style={{ marginTop: "10px", fontSize: "18px", lineHeight: "1.7" }}
            >
              Join us in the pursuit of Urdu excellence, where your journey
              towards reading, writing, and speaking this beautiful language is
              nurtured by our certified instructors. Arabic Wave Academy is your
              trusted partner on this linguistic adventure, ensuring you unlock
              the full potential of Urdu.
            </p>
          </div>
        </div>

        <OurFlagCourses />
      </section>
    </>
  );
}
