import React, { useState } from "react";
import "./policy.css";

export default function Accurdion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected((prevValue) => (prevValue = null));
    }
    setSelected((prevValue) => (prevValue = i));
  };

  return (
    <section className="accurdion-sec">
      <div className="wrapper">
        {FAQ.map((item, i) => (
          <div className="accurdion" key={i}>
            <div className="center title transition" onClick={() => toggle(i)}>
              <h1>{item.question}</h1>
              <span
                className={selected === i ? "close transition" : "transition"}
              >
                +
              </span>
            </div>
            <p
              className={
                selected === i
                  ? "content transition show"
                  : "content transition"
              }
            >
              {item.Answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FAQ = [
  {
    question: "What is the Arabic Wave platform for?",
    Answer:
      "The Arabic Wave platform is an innovative online learning platform designed to provide comprehensive Quranic education to students of all ages and backgrounds. It offers a wide range of courses, including Quranic recitation, Tajweed, Tafsir, and more, with experienced and qualified instructors.",
  },
  {
    question: "How can I benefit from the Arabic Wave platform?",
    Answer:
      "By enrolling in Arabic Wave, you gain access to high-quality Quranic education from the comfort of your home. Our platform offers flexibility in scheduling and a variety of courses to suit your learning needs.",
  },
  {
    question: "Are the instructors qualified on the Arabic Wave platform?",
    Answer:
      "Yes, all our instructors are highly qualified and have extensive experience in teaching Quranic studies. They are dedicated to helping you achieve your Quranic learning goals.",
  },
  {
    question: "Is the Arabic Wave platform suitable for beginners?",
    Answer:
      "Absolutely! Arabic Wave offers courses for students at all levels, from beginners to advanced learners. We provide a supportive learning environment for those new to Quranic studies.",
  },
  {
    question: "Can I schedule my lessons at my convenience?",
    Answer:
      "Yes, you can choose lesson times that suit your schedule. Our platform offers flexibility to accommodate your busy lifestyle.",
  },
  {
    question:
      "What measures are in place to ensure the privacy and modesty of female students during online classes?",
    Answer:
      "Arabic Wave places a strong emphasis on privacy and modesty. Our platform and instructors are committed to upholding these values. We encourage all students to maintain proper hijab and modesty during online classes to create a respectful and comfortable learning environment for everyone.",
  },
  {
    question:
      "Are the female instructors on Arabic Wave qualified and experienced",
    Answer:
      "Absolutely, our female instructors are highly qualified and experienced in teaching Quranic studies. They are dedicated to providing a nurturing and effective learning experience for our female students.",
  },
  {
    question:
      "What are the benefits of learning Quran online with Arabic Wave?",
    Answer:
      "Arabic Wave provides a convenient and accessible way to deepen your understanding of the Quran. Some benefits include personalized instruction, interactive learning, and the opportunity to study at your own pace.",
  },
  {
    question:
      "Are there any age restrictions for enrolling in courses on Arabic Wave?",
    Answer:
      "No, there are no age restrictions but we accept students from 8 years of age (Students should understand the concept of Online class). Arabic Wave welcomes learners of all ages, from children to adults.",
  },
  {
    question: "Can I track my progress on the Arabic Wave platform?",
    Answer:
      "Yes, you can track your progress through our user-friendly interface, allowing you to monitor your learning journey and achievements.",
  },
  {
    question: "How can I enroll in courses on the Arabic Wave platform?",
    Answer:
      "To enroll in courses, simply visit our website, browse our offerings, and select the courses that align with your goals. You can then proceed with the enrollment process.",
  },
  {
    question: "Is there a trial period available for new learners?",
    Answer:
      "Yes, we offer a trial period for new learners, allowing you to experience our platform and teaching methods before committing to a course.",
  },
  {
    question:
      "Can I access course materials and resources on the Arabic Wave platform?",
    Answer:
      "Absolutely! We provide access to a wealth of resources, including Quranic texts, recordings, and supplementary materials to enhance your learning experience.",
  },
  {
    question:
      "Is technical support available for students on the Arabic Wave platform?",
    Answer:
      "Yes, we have a dedicated technical support team available to assist you with any technical issues or inquiries you may have.",
  },
  {
    question: "Can I interact with other students on the Arabic Wave platform?",
    Answer:
      "Yes, we encourage interaction and collaboration among students through discussion forums and group activities.",
  },
  {
    question: "Are certificates awarded upon course completion?",
    Answer:
      "Yes, we provide certificates of completion for our courses, which can serve as valuable credentials.",
  },
  {
    question: "Can I switch courses or instructors if needed?",
    Answer:
      "Yes, we offer flexibility for changing courses or instructors based on your preferences and learning requirements.",
  },
  {
    question: "Is the Arabic Wave platform accessible on mobile devices?",
    Answer:
      "Yes, our platform is mobile-friendly, allowing you to access your courses from smartphones and tablets.",
  },
  {
    question:
      "Are there group discounts available for families or organizations?",
    Answer:
      "Yes, we offer group discounts for families and organizations interested in enrolling multiple students.",
  },
  {
    question:
      "What sets Arabic Wave apart from other online Quran education platforms?",
    Answer:
      "Arabic Wave stands out for its personalized approach, qualified instructors, interactive learning environment, and a wide range of course offerings.",
  },
  {
    question: "How can I get started on Arabic Wave today?",
    Answer:
      "To begin your Quranic learning journey with Arabic Wave, visit our website, explore our courses, and enroll in the one that suits your needs.",
  },
  {
    question:
      "How can I contact Arabic Wave for further inquiries or assistance?",
    Answer:
      "You can contact our customer support team through the contact information provided on our website. We are here to assist you at every step of your Quranic education journey.",
  },
];
