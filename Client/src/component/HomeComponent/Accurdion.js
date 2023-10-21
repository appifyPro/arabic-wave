import React, { useState } from "react";
import "./homepage.css";

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
        <header className="center">
          <h1>
            Parental Roles in Supporting Children's Online Quranic Learning
          </h1>
        </header>
        {parentAnswers.map((item, i) => (
          <div className="accurdion" key={i}>
            <div className="center title transition" onClick={() => toggle(i)}>
              <h1>{item.question}</h1>
              <span
                className={selected === i ? "close transition" : "transition"}
              >
                +
              </span>
            </div>
            <p className={selected === i ? "content  show" : "content "}>
              {item.Answer}
            </p>
          </div>
        ))}
        <br></br>
        <br></br>
        <header className="center">
          <h1>
            Unlocking the Profound Benefits of Tajweed Ul Quran and Arabic
            Language for Children
          </h1>
        </header>
        {qAndAnswer.map((item, i) => (
          <div className="accurdion" key={i}>
            <div className="center title transition" onClick={() => toggle(i)}>
              <h1>{item.question}</h1>
              <span
                className={selected === i ? "close transition" : "transition"}
              >
                +
              </span>
            </div>
            <p className={selected === i ? "content  show" : "content "}>
              {item.Answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const qAndAnswer = [
  {
    question: "Unlocking the Path to Understanding Arabic Language with Ease",
    Answer:
      "At Arabic Wave Academy, we are your trusted guide on the remarkable journey to mastering the Arabic language with ease. Our expert instructors, interactive courses, and flexible learning approach empower students of all ages to embrace the beauty of Arabic effortlessly. We provide a nurturing environment where linguistic proficiency, cultural appreciation, and spiritual growth flourish. Unlock the path to understanding Arabic with confidence, and let the Arabic Wave carry you to a world of knowledge and connection. Join us today and embark on a transformative adventure in language and culture.",
  },
  {
    question:
      "Why Should My Child Learn the Arabic Language with Arabic Wave Academy?",
    Answer:
      "Learning the Arabic language with Arabic Wave Academy offers numerous advantages. It opens doors to understanding the Quran, Islamic traditions, and the rich Arab culture. Our expert instructors and interactive courses make the learning journey enjoyable and accessible, providing your child with a strong linguistic foundation.",
  },
  {
    question:
      "How Does Arabic Wave Academy Ensure a Comfortable Learning Experience for Children?",
    Answer:
      "We provide a nurturing and supportive environment, offering personalized one-on-one sessions, interactive lessons, and flexible schedules to accommodate your child's needs and preferences. ",
  },
  {
    question:
      "What Is the Duration of Arabic Language Courses at Arabic Wave Academy?",
    Answer:
      "Course durations vary, but our flexible schedules enable children to progress at their own pace. At Arabic Wave Academy, we understand the importance of nurturing young minds to become proficient in Arabic. Our Arabic language courses for children are thoughtfully designed with flexibility in mind, ensuring consistency in their learning journey. The duration of our courses varies to cater to different age groups and skill levels, allowing children to progress at their own pace. By recognizing and building upon each child's unique capabilities, we foster a love for language and culture. With us, your child will embark on a journey of linguistic excellence, opening doors to a world of opportunities and connection. Join us today to unlock your child's language potential with Arabic Wave Academy.",
  },
  {
    question:
      "How Does Learning Arabic Grammar Benefit My Child's Language Skills",
    Answer:
      "At Arabic Wave Academy, we empower your child with the invaluable gift of Arabic grammar proficiency. Our expert instructors provide engaging lessons that enhance language skills and cognitive development. By delving into the intricacies of Arabic grammar, children not only strengthen their communication abilities but also sharpen their analytical thinking. The consistent exposure to grammar rules nurtures linguistic proficiency, enabling them to express themselves with clarity and precision. We recognize each child's unique capabilities, ensuring a tailored learning experience. Join us at Arabic Wave Academy, where learning Arabic grammar becomes a fun and enriching journey for your child, building a strong foundation for a lifetime of linguistic prowess.",
  },
  {
    question:
      "What Support Does Arabic Wave Offer for Parents in Their Child's Arabic Grammar Education?",
    Answer:
      "At Arabic Wave Academy, we understand that parental involvement is crucial in a child's Arabic grammar education. We offer unwavering support to parents, providing resources, regular progress reports, and guidance to actively engage in their child's learning journey. Our goal is to create a collaborative and nurturing environment where parents and instructors work together to ensure the child's success. We recognize each child's unique capabilities and provide personalized attention, fostering a love for language and culture. With consistency in learning and the active involvement of parents, we empower children to excel in Arabic grammar, paving the way for a bright linguistic future. Join us at Arabic Wave Academy, where your child's education is our shared commitment.",
  },
  {
    question: "How Can Learning Arabic Benefit My Child's Future Career?",
    Answer:
      "Learning Arabic at Arabic Wave Academy sets the stage for your child's future career success. Arabic is not only a language but also a key to unlocking numerous opportunities. Proficiency in Arabic opens doors to careers in international diplomacy, translation, journalism, business, and academia. Our courses emphasize practical skills, ensuring your child's readiness for real-world challenges. With consistency in learning and dedication, your child can stand out in a competitive job market and embark on a fulfilling professional journey. Invest in your child's future today with Arabic Wave Academy and watch them thrive in their career, thanks to their linguistic prowess and cultural understanding.",
  },
  {
    question: "Unlocking the Career Advantages of Learning Arabic Language.",
    Answer:
      "Learning Arabic through Arabic Wave Academy offers a transformative pathway to a thriving career in teaching, jobs, business, or any field in the Gulf countries. Proficiency in Arabic not only grants you access to a rich cultural tapestry but also positions you as a sought-after professional. Whether you aspire to teach Arabic online, pursue a career in Gulf-based companies, or establish your own business, our comprehensive courses equip you with the linguistic capabilities needed for success. With consistency and dedication, you can unlock a world of opportunities, elevate your career, and thrive in the dynamic Gulf job market. Invest in your future with Arabic Wave Academy and watch your professional aspirations come to life.",
  },
];

const parentAnswers = [
  {
    question: "The Growth of Virtual Quranic Study Platforms",
    Answer:
      "There are numerous online platforms for Quranic education where you can learn the Quran. With more people having access to resources and skills, they are increasingly utilizing these platforms for educational purposes. As a parent, it is your responsibility to explore various websites and select the most reliable ones. You can read reviews and assess the track record of each platform in terms of success. Additionally, you can engage in discussions with the tutors to highlight your children's strengths. We believe that thorough research is essential for all parents before making a choice regarding an online portal.",
  },
  {
    question: "Engage in Personalized Learning: One-On-One Teacher Meetings",
    Answer:
      "When children learn the Quran online, they miss the opportunity for face-to-face interactions with their peers, which can be a challenge. However, having clear conversations with teachers on the website is relatively straightforward. On the flip side, this lack of in-person interaction is not an advantage of online Quranic education. Nevertheless, these issues are being addressed by various applications. You have the flexibility to choose how you communicate with the tutor. You can convey your expectations for your child, discuss their strengths and areas for improvement, and more.",
  },
  {
    question: "Enabling Kids for Success in Modern and Digital Education",
    Answer:
      "Guiding your children in the realm of online education is crucial in today's digital age. While online learning offers numerous advantages, it's essential to acknowledge that not every child may feel entirely comfortable with this mode of education. To ensure their success, it's important to create an environment that fosters engagement and effective learning. Start by establishing a dedicated and organized study space that minimizes distractions. Encourage regular communication with teachers and peers, as interaction is key to understanding and retaining information. Set clear daily schedules to maintain a sense of routine, which can help children adapt more smoothly to online learning. Additionally, instill self-discipline and time management skills to help them stay focused and meet deadlines. Remember, parental involvement and support are vital in navigating the challenges and opportunities of online education for your child's benefit.",
  },
  {
    question:
      "Empowering Muslim Parents to Nurture Quranic Learning in Their Children",
    Answer:
      "It is the foremost duty of every Muslim parent to impart the knowledge of the Quran to their children. On the Day of Judgment, Allah (SWT) will inquire about our efforts in this regard. We earnestly hope that all parents who come across this blog will consider the option of enrolling their children in online Quranic education programs. Should you encounter any challenges or uncertainties, please do not hesitate to reach out to us. Our team of experts is dedicated to assisting you in exploring innovative perspectives and devising effective strategies for your child's Quranic education.",
  },
];
