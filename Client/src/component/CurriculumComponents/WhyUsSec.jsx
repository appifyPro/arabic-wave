import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./currpage.css";

export default function WhyUsSec() {
  return (
    <>
      <section className="why-us-sec">
        <div className="content-half">
          <h1 className="center">Why Choose Arabic Wave</h1>
          <div className="center content-container">
            <div className="container">
              <div className="center">
                <img src="/img/icons8-training-100.png" alt="" />
                <div className="">
                  <h2>Expert Teachers</h2>
                  <p>
                    Our male and female teachers are fully skilled and have
                    degrees from some of the best Islamic universities in the
                    world. They also have experience teaching students who do
                    not speak Arabic.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="center">
                <img src="/img/icons8-business-meeting-100.png" alt="" />
                <div className="">
                  <h2>Live One On One Sessions!</h2>
                  <p>
                    One-on-one is how we arrange our online classes. Our
                    teachers pay attention to every student for a full half-hour
                    to an hour to ensure their time is being used well. We use
                    the most up-to-date software to ensure your class goes as
                    smoothly as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="center">
                <img src="/img/icons8-alarm-clock-96.png" alt="" />
                <div className="">
                  <h2>Flexibility</h2>
                  <p>
                    The student has some say over what kind of information they
                    want to pay attention to. Our trained teachers will help you
                    decide which options are best.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="center">
                <img src="/img/icons8-microphone-64.png" alt="" />
                <div className="">
                  <h2>Recorded Sessions</h2>
                  <p>
                    The sessions of all of your online courses will be recorded
                    and given to you. You can review the lectures and classes
                    you have already taken. It makes it easier to remember
                    things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
