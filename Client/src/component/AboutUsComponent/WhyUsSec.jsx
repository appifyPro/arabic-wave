import React from "react";
import "./aboutuspage.css";

export default function WhyUs() {
  return (
    <>
      <section className="whyus">
        <header className="center">
          <h1>Why Us</h1>
        </header>

        <div className="card-container center">
          <div className="card center transition">
            <img src="/pics/whyus1.png" alt="" />
            <p>
              Master Tajweed principles and recite the Holy Quran flawlessly,
              even if you're new to the Arabic alphabet.
            </p>
          </div>
          <div className="card center transition">
            <img src="/pics/whyus2.png" alt="" />
            <p>
              Unlock the path to becoming a Hafiz-ul-Quran from the comfort of
              your home with our expert guidance.
            </p>
          </div>
          <div className="card center transition">
            <img src="/pics/whyus3.jpg" alt="" />
            <p>
              We uplift underprivileged communities with free Quran courses,
              earning you Sadqa e Jaria in the Akhira as a reward from Allah.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
