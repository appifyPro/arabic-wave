import { React, useState } from "react";
import "./currpage.css";
import { Box } from "@mui/material";
export default function OurCurriculum() {
  const [tajweedCards, setTajweedCards] = useState(tajweed[0].beginner);
  const [hafizCards, setHafizCards] = useState(hifz[0].beginner);
  const [hafizon, setHafizon] = useState(false);
  const [btn1click, setBtn1click] = useState(true);
  const [btn2click, setBtn2click] = useState(false);
  const [btn3click, setBtn3click] = useState(true);
  const [btn4click, setBtn4click] = useState(false);
  const [btn5click, setBtn5click] = useState(false);
  const hafizHandle = () => {
    setHafizon(true);
    setBtn2click(true);
    setBtn1click(false);
    setBtn3click(true);
    setBtn4click(false);
    setBtn5click(false);
  };
  const tajweedHandle = () => {
    setHafizon(false);
    setBtn1click(true);
    setBtn2click(false);
    setBtn3click(true);
    setBtn4click(false);
    setBtn5click(false);
  };
  const tajweedBeginer = () => {
    setBtn3click(true);
    setBtn4click(false);
    setBtn5click(false);
    setTajweedCards((prevValue) => (prevValue = tajweed[0].beginner));
  };
  const tajweedIntermediate = () => {
    setBtn3click(false);
    setBtn5click(false);
    setBtn4click(true);
    setTajweedCards((prevValue) => (prevValue = tajweed[1].intermediate));
  };
  const tajweedAdvanced = () => {
    setBtn3click(false);
    setBtn4click(false);
    setBtn5click(true);
    setTajweedCards((prevValue) => (prevValue = tajweed[2].advanced));
  };
  const hafizBeginer = () => {
    setBtn3click(true);
    setBtn4click(false);
    setBtn5click(false);
    setHafizCards((prevValue) => (prevValue = hifz[0].beginner));
  };
  const hafizIntermediate = () => {
    setBtn3click(false);
    setBtn5click(false);
    setBtn4click(true);
    setHafizCards((prevValue) => (prevValue = hifz[1].intermediate));
  };
  const hafizAdvanced = () => {
    setBtn3click(false);
    setBtn4click(false);
    setBtn5click(true);
    setHafizCards((prevValue) => (prevValue = hifz[2].advanced));
  };
  return (
    <>
      <section className="our-curr">
        <header className="center">
          <h1>Our Curriculum</h1>
        </header>
        <div className="center content-btns">
          <button
            className=""
            onClick={tajweedHandle}
            style={{
              backgroundColor: btn1click ? "#f49d1a" : "var(--secColor--)",
            }}
          >
            Tajweed Ul-Qur'an
          </button>
          <button
            style={{
              backgroundColor: btn2click ? "#f49d1a" : "var(--secColor--)",
            }}
            className=""
            onClick={hafizHandle}
          >
            Hifz-Ul-Qur'an
          </button>
        </div>
        <Box sx={{ display: hafizon ? "none" : "block" }}>
          <div className="btn-container center">
            <div className="content-btns">
              <button
                className="first-btn"
                onClick={tajweedBeginer}
                style={{
                  backgroundColor: btn3click ? "#f49d1a" : "var(--secColor--)",
                }}
              >
                Beginner
              </button>
              <button
                onClick={tajweedIntermediate}
                style={{
                  backgroundColor: btn4click ? "#f49d1a" : "var(--secColor--)",
                }}
              >
                Intermediate
              </button>
              <button
                className="sec-btn"
                onClick={tajweedAdvanced}
                style={{
                  backgroundColor: btn5click ? "#f49d1a" : "var(--secColor--)",
                }}
              >
                Advanced
              </button>
            </div>
          </div>
          <div className="curri-sec center">
            {tajweedCards.map((item, i) => (
              <div className="curri-card center transition" key={i}>
                <div className="card-disc center">
                  <h1 className="center">{item.title}</h1>
                  <hr />
                  <p dangerouslySetInnerHTML={{ __html: item.parg1 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg2 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg3 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg4 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg5 }}></p>
                  {/* <p>{item.parg3}</p>
                  <p>{item.parg4}</p>
                  <p>{item.parg5}</p> */}
                </div>
              </div>
            ))}
          </div>
        </Box>
        <Box sx={{ display: hafizon ? "block" : "none" }}>
          <div className="btn-container center">
            {/* <div className="content-btns">
              <button className="">Hifz-Ul-Qur'an</button>
            </div> */}
            <div className="content-btns">
              <button
                className={
                  hafizCards === hifz[0].beginner
                    ? "first-btn active"
                    : "first-btn"
                }
                style={{
                  backgroundColor: btn3click ? "#f49d1a" : "var(--secColor--)",
                }}
                onClick={hafizBeginer}
              >
                Beginner
              </button>
              <button
                onClick={hafizIntermediate}
                style={{
                  backgroundColor: btn4click ? "#f49d1a" : "var(--secColor--)",
                }}
              >
                Intermediate
              </button>
              <button
                className="sec-btn"
                onClick={hafizAdvanced}
                style={{
                  backgroundColor: btn5click ? "#f49d1a" : "var(--secColor--)",
                }}
              >
                Advanced
              </button>
            </div>
          </div>
          <div className="curri-sec center">
            {hafizCards.map((item, i) => (
              <div className="curri-card center transition" key={i}>
                <div className="card-disc ">
                  <h1 className="center">{item.title}</h1>
                  <hr />
                  <p dangerouslySetInnerHTML={{ __html: item.parg1 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg2 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg3 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg4 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.parg5 }}></p>
                  {/* <p>{item.parg2}</p>
                  <p>{item.parg3}</p>
                  <p>{item.parg4}</p> */}
                </div>
              </div>
            ))}
          </div>
        </Box>
      </section>
    </>
  );
}

const tajweed = [
  {
    beginner: [
      {
        title: "Learning Outcomes",
        parg1: `<strong>Pronunciation Perfection:</strong> Master the correct pronunciation of Arabic letters and sounds.`,
        parg2: `<strong>Understanding Makharij:</strong> Learn the positions of articulation (Makharij) for clear enunciation.`,
        parg3: `<strong>Basic Rules of Tajweed:</strong> Grasp fundamental Tajweed rules to avoid common mistakes.`,
        parg4: `<strong>Recognize Tajweed Symbols:</strong> Familiarize yourself with basic Tajweed symbols and their meanings.`,
      },
      {
        title: "Benefits",
        parg1: `<strong>Lay a Strong Foundation:</strong> Build a solid base for advanced Tajweed studies.`,
        parg2: `<strong>Improved Recitation:</strong>Enhance the clarity and accuracy of Quranic recitation.`,
        parg3: `<strong>Enhanced Pronunciation:</strong> Comprehend the importance of proper pronunciation in Quranic verses.`,
        parg4: `<strong>Confidence Boost:</strong> Gain confidence in your Quranic reading abilities.`,
        parg5: `<strong>Preparation for Intermediate Level:</strong> Prepare to move on to more advanced Tajweed concepts.`,
      },
      {
        title: "Achievements",
        parg1: "Ability to Pronounce Quranic words with basic Tajweed rules.",
        parg2: "Correct pronunciation of Arabic letters and sounds.",
        parg3: "Recognize and apply basic Tajweed symbols.",
        parg4: "Comprehend the significance of proper enunciation.",
        parg5: "",
      },
    ],
  },
  {
    intermediate: [
      {
        title: "Learning Outcomes",
        parg1: `<strong>Advanced Tajweed Rules:</strong> Delve deeper into complex Tajweed rules and exceptions.`,
        parg2: `<strong>Rules of Noon and Meem:</strong> Master the rules governing the pronunciation of Noon and Meem.`,
        parg3: `<strong>Correcting Common Mistakes:</strong> Identify and rectify typical Tajweed errors.`,
        parg4: `<strong>Enhanced Recitation Fluency:</strong> Improve your recitation speed while maintaining accuracy.`,
        parg5: "",
      },
      {
        title: "Benefits",
        parg1: `<strong>Precision in Recitation:</strong> Achieve a high level of accuracy in Quranic pronunciation.`,
        parg2: `<strong>Mastery of Complex Rules:</strong> Gain expertise in handling intricate Tajweed rules.`,
        parg3: `<strong>Articulate Recitation:</strong> Develop a melodious and articulate Quranic recitation style.`,
        parg4: `<strong>Prepares for Advanced Levels:</strong> Lay the groundwork for in-depth Tajweed studies.`,
        parg5: "",
      },
      {
        title: "Achievements",
        parg1: "Proficiency in applying intermediate Tajweed rules.",
        parg2:
          "Correct pronunciation of Noon and Meem letters in various scenarios.",
        parg3: `Enhanced recitation fluency of it with speed.`,
        parg4: "Identification and correction of common Tajweed mistakes.",
        parg5: "",
      },
    ],
  },
  {
    advanced: [
      {
        title: "Learning Outcomes",
        parg1: `<strong>Advanced Rulings:</strong> Master intricate Tajweed rules, including those related to Quranic melodiousness.`,
        parg2: `<strong>Rules of Ghunnah:</strong> Understand and apply the rules of Ghunnah (nasalization) in Quranic recitation.`,
      },
      {
        title: "Benefits",
        parg1: `<strong>Precision and Mastery:</strong> Achieve the highest level of Tajweed precision and mastery.`,
        parg2: `<strong>Artistry in Recitation:</strong> Recite the Quran with exquisite melodiousness and beauty.`,
        parg3: `<strong>Recognition as a Tajweed Expert:</strong> Earn recognition as an expert in the field of Tajweed.`,
      },
      {
        title: "Achievements",
        parg1:
          "Profound understanding and application of advanced Tajweed rules.",
        parg2: "Mastery of Ghunnah rules for nasalization.",
        parg3:
          "Ability to teach Tajweed Ul Quran effectively and professionally.",
      },
    ],
  },
];

const hifz = [
  {
    beginner: [
      {
        title: "Learning Outcomes",
        parg1: `<strong>Memorization Fundamentals:</strong> Lay the groundwork for effective Quranic memorization techniques.`,
        parg2: `<strong>Correct Pronunciation:</strong> Focus on proper pronunciation of Quranic verses during memorization.`,
        parg3: `<strong>Memorization of Short Surahs:</strong> Begin with the memorization of shorter chapters (Surahs) from the Quran.`,
        parg4: `<strong>Revision Techniques:</strong> Develop efficient methods for reviewing and retaining memorized verses.`,
        parg5: "",
      },
      {
        title: "Benefits",
        parg1: `<strong>Quranic Foundation:</strong> Establish a strong foundation for Quran memorization.`,
        parg2: `<strong>Improved Pronunciation:</strong> Enhance the accuracy and clarity of Quranic verses.`,
        parg3: `<strong>Early Progress:</strong> Begin the journey of memorizing Quranic text.`,
        parg4: `<strong>Increased Discipline:</strong> Cultivate discipline through regular memorization sessions.`,
        parg5: `<strong>Preparedness for Intermediate Level:</strong> Lay the groundwork for more advanced memorization.`,
      },
      {
        title: "Achievements",
        parg1: "Memorization of selected shorter Surahs.",
        parg2: "Proficiency in proper pronunciation during memorization.",
        parg3: "Familiarity with basic Tajweed rules.",
        parg4: "Ability to effectively review and retain memorized verses.",
        parg5: "Establishment of a strong Quranic memorization routine.",
      },
    ],
  },
  {
    intermediate: [
      {
        title: "Learning Outcomes",
        parg1: `<strong>Memorization of Juz' Amma:</strong> Progress to memorizing the 30th part of the Quran (Juz' Amma).`,
        parg2: `<strong>Advanced Memorization Techniques:</strong> Explore and implement more efficient memorization strategies.`,
        parg3: `<strong>Memorization of Longer Surahs:</strong> Move on to memorizing longer chapters (Surahs) of the Quran.`,
        parg4: `<strong>Enhanced Revision Skills:</strong> Develop advanced techniques for revision and retention.`,
        parg5: "",
      },
      {
        title: "Benefits",
        parg1: `<strong>Substantial Quranic Progress:</strong> Memorize a significant portion of the Quran (Juz' Amma).`,
        parg2: `<strong>Mastery of Memorization Techniques:</strong> Become adept at memorization strategies.`,
        parg3: `<strong>Profound Tajweed Understanding:</strong> Apply advanced Tajweed rules effectively.`,
        parg4: `<strong>Accomplishment of Memorizing Longer Surahs:</strong> Attain the ability to memorize lengthy Quranic chapters.`,
        parg5: `<strong>Enhanced Memory and Concentration:</strong> Improve memory and concentration through regular practice.`,
      },
      {
        title: "Achievements",
        parg1: "Successful memorization of Juz' Amma.",
        parg2: "Proficiency in advanced memorization techniques.",
        parg3: "Increased memory capacity and concentration skills.",
        parg4: "",
        parg5: "",
      },
    ],
  },

  {
    advanced: [
      {
        title: "Learning Outcomes",
        parg1: `<strong>Complete Quran Memorization:</strong> Achieve the remarkable feat of memorizing the entire Quran.`,
        parg2: `<strong>Advanced Memorization Mastery:</strong> Demonstrate exceptional proficiency in Quranic memorization.`,
        parg3: `<strong>Quranic Teaching Skills:</strong> Develop the ability to teach Quran memorization effectively.`,
        parg4: `<strong>Hifz Preservation:</strong> Learn techniques for preserving memorization for a lifetime.`,
        parg5: "",
      },
      {
        title: "Benefits",
        parg1: `<strong>Mastery of Quran:</strong> Attain the highest level of Quranic memorization.`,
        parg2: `<strong>Prestigious Achievement:</strong> Gain recognition as a Hafiz/Hafiza of the Quran.`,
        parg3: `<strong>Teaching Capability:</strong> Equip yourself to pass on the knowledge of Hifz to others.`,
        parg4: `<strong>Quranic Interpretation Insight:</strong> Understand the deeper meanings of the memorized verses.`,
        parg5: `<strong>Lifelong Hifz Preservation:</strong> Learn methods to ensure the preservation of your memorization.`,
      },
      {
        title: "Achievements",
        parg1: "Remarkable accomplishment of memorizing the entire Quran.",
        parg2: "Exceptional mastery of Quranic memorization techniques.",
        parg3: "Ability to teach Quranic memorization effectively.",
        parg4: "Profound knowledge of Quranic interpretation (Tafsir).",
        parg5: "Expertise in preserving Quranic memorization for a lifetime.",
      },
    ],
  },
];
