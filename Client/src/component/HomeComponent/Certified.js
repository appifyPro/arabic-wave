import React from "react";
import "./homepage.css";

export default function Certified() {
  return (
    <section className="certified">
      <header className="center">
        <h1> Experience Constant Growth in Your Knowledge and Faith</h1>
      </header>
      <section className="center">
        <div className="card center transition">
          <img src="/pics/certificate-2.webp" alt="" />
          <h1>Certified and Expert Trainers</h1>
          <p style={{ fontSize: "17px" }}>
            Dive into excellence at Arabic Wave! Learn from certified experts in
            premium Arabic and Quran courses, receiving top-tier education. Join
            us now!
          </p>
        </div>
        <div className="card center transition">
          <img src="/pics/calender.png" alt="" />
          <h1>Flexible Calendar and Language</h1>
          <p style={{ fontSize: "17px" }}>
            Empower Your Learning: Expert Quran Tutors from Prominent Global
            Locations Offer Flexibility and Language Options.
          </p>
        </div>
        <div className="card center transition">
          <img src="/pics/imges-1.webp" alt="" />
          <h1 className="center">Engaging! Interactive Sessions</h1>
          <p style={{ fontSize: "17px" }}>
            Master the art of Tajweed and unlock the beauty of the Quran through
            engaging interactive classes that bring sacred knowledge to life.
          </p>
        </div>
        <div className="card center transition">
          <img src="/pics/imgmain3.png" alt="" />
          <h1 className="center">Activities and Quizes</h1>
          <p style={{ fontSize: "17px" }}>
            Embark on an immersive learning journey with our interactive
            sessions, featuring enriching online Tajweed and Quran activities,
            as well as engaging quizzes, to deepen your understanding and
            knowledge.
          </p>
        </div>
        <div className="card center transition">
          <img src="/pics/imgmain1.png" alt="" />
          <h1 className="center">Female Trainers</h1>
          <p style={{ fontSize: "17px" }}>
            Experience confidential empowerment in your Quranic odyssey via our
            female-to-female online Tajweed and Quran classes, led by skilled
            female instructors.
          </p>
        </div>
        <div className="card center transition">
          <img src="/pics/imgmain2.png" alt="" />
          <h1>One-On-One Interaction</h1>
          <p style={{ fontSize: "17px" }}>
            Discover the power of personalized learning through our one-on-one
            interactive sessions, where you'll master Tajweed, Arabic, and the
            Quran under expert guidance.
          </p>
        </div>
      </section>
    </section>
  );
}
