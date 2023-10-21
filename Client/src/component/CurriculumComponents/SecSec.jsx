import React from "react";
import "./currpage.css";
export default function SecSec() {
  return (
    <>
      <section className="crr-sec-sec">
        <div className="sec-sec center">
          <div className="container center">
            <img
              style={{ height: "100px", width: "130px" }}
              src="/pics/worldwide.png"
              alt=""
            />
            <div>
              <h1>Worldwide Recognized </h1>
              <p>
                We're honored to be recognized as the trusted worldwide
                destination for online Qur’an and Arabic courses.
              </p>
            </div>
          </div>

          <div className="container center">
            <img
              style={{ height: "100px", width: "130px" }}
              src="/pics/support.png"
              alt=""
            />
            <div>
              <h1>Get Personal Assistance</h1>
              <p>
                Exclusive online sessions with globally recognized tutors,
                offering personalized guidance and support.
              </p>
            </div>
          </div>
          <div className="container center">
            <img
              style={{ height: "100px", width: "130px" }}
              src="/pics/24h.png"
              alt=""
            />
            <div>
              <h1>24/7</h1>
              <p>
                Discover the best online Arabic learning services, available
                24/7. Customize your Quran learning schedule to fit your
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
