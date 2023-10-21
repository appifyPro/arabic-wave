import React from "react";
import "./aboutuspage.css";
export default function OurValues() {
  return (
    <>
      <section className="our-values">
        <header className="center">
          <h1>Our Values</h1>
        </header>
        <div className="card-container center">
          <div className="card center transition">
            <img src="/pics/Passion.svg" alt="" />
            <h1 style={{ fontSize: "1.4em" }}>Passion</h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                lineHeight: "1.5",
              }}
            >
              "Arabic Wave Academy ignites students' passion for Quran education
              through engaging lessons and a supportive community, fostering a
              lifelong love for the Quran."
            </p>
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              "Our instructors at Arabic Wave Academy inspire a deep passion for
              Quranic knowledge, creating a vibrant learning environment that
              fuels students' enthusiasm."
            </p>
          </div>
          <div className="card center transition">
            <img src="/pics/Efficiency.svg" alt="" />
            <h1 style={{ fontSize: "1.4em" }}>Efficiency</h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                lineHeight: "1.5",
              }}
            >
              At Arabic Wave Academy, we optimize efficiency in Quran education,
              ensuring every lesson counts, and students’ progress effectively."
            </p>
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              "We employ streamlined processes and personalized guidance to make
              Quranic learning efficient and accessible for all."
            </p>
          </div>
          <div className="card center transition">
            <img src="/pics/Inclusion.svg" alt="" />
            <h1 style={{ fontSize: "1.4em" }}>Inclusion</h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                lineHeight: "1.5",
              }}
            >
              "At Arabic Wave Academy, we're dedicated to inclusion, working
              tirelessly to create a diverse and supportive learning environment
              where every student's needs and backgrounds are embraced."
            </p>
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              "Our commitment to inclusion drives us to go the extra mile,
              ensuring that every student feels valued and supported on their
              Quranic education journey."
            </p>
          </div>
          <div className="card center transition">
            <img src="/pics/Accessibility.svg" alt="" />
            <h1 style={{ fontSize: "1.4em" }}>Accessibility</h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                lineHeight: "1.5",
              }}
            >
              "Arabic Wave Academy ensures accessibility by offering online
              classes that fit your schedule, allowing you to learn at your own
              pace and in your own space. Recorded sessions and 24/7 support
              further enhance your learning journey."
            </p>
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              "We prioritize accessibility at Arabic Wave Academy with flexible
              online classes, recorded sessions for convenient review, and
              round-the-clock support, making Quran education accessible to
              all."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
