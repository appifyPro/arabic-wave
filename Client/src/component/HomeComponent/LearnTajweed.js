import React, { useState } from "react";
import "./homepage.css";
import { loadStripe } from "@stripe/stripe-js";
import { BURL, PUBLISHABLE_KEY } from "../../Utils";
import axios from "axios";
import { Box } from "@mui/material";
export default function LearnTajweed() {
  const [cardSelection, setCardSelection] = useState(oneToOne);
  const [course, setCourse] = useState({
    name: "",
    price: "",
  });
  // const makePayment = async (title, price) => {
  //   try {
  //     setCourse({
  //       name: title,
  //       price: price,
  //     });

  //     const stripe = await loadStripe(PUBLISHABLE_KEY);
  //     const response = await axios.post(`${BURL}/checkout-session`, course);

  //     console.log(response);
  //     const { sessionUrl } = response.data;

  //     // Redirect the user to the checkout session URL
  //     window.location.href = sessionUrl;

  //     // Handle successful response here
  //   } catch (error) {
  //     console.error("API request failed:", error);
  //     // Handle the error and display an error message to the user
  //   }
  // };
  return (
    <section className="learn-tajweed-sec center">
      <header className="center">
        <h1>Learn Tajweed UI Quran by Arabic Wave Academy</h1>
      </header>
      <div className="content-btns">
        <button
          className={
            cardSelection === oneToOne ? "first-btn active" : "first-btn"
          }
          onClick={() =>
            setCardSelection((prevValue) => (prevValue = oneToOne))
          }
        >
          One To One
        </button>
        <button
          className={
            cardSelection === groupSession ? "sec-btn active" : "sec-btn"
          }
          onClick={() =>
            setCardSelection((prevValue) => (prevValue = groupSession))
          }
        >
          Group Session
        </button>
      </div>
      <div className="curriculum-sec center">
        {cardSelection.map((item, i) => (
          <div
            className="container-card center transition"
            key={i}
            style={{ width: "20em", height: "27em" }}
          >
            <div className="card-disc">
              <div
                style={{
                  color: "white",

                  // height: "100%",
                  // width: "100%",
                  textAlign: "center",
                  overflow: "hidden",
                  backgroundColor: "#004143",
                  // paddingLeft: "0em",
                }}
              >
                <h1 style={{ textAlign: "center" }}>{item.title}</h1>
              </div>
              <hr />
              <p>{item.firstDisc}</p>
              <p>{item.secondDisc}</p>
              <p>{item.thirdDisc}</p>
              <p>{item.forthDisc}</p>
              <p>{item.fifthDisc}</p>
              <p>{item.sixthDisc}</p>
            </div>
            <div className="card-learn center">
              {/* <h1>{item.charge}</h1> */}
              <a target="_blank" rel="noreferrer" href={item.link}>
                <button className="btn center">Book Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const oneToOne = [
  {
    id: 1,
    title: "Basic",
    firstDisc: "Arabic Script Introduction",
    secondDisc: "Learning Quranic Alphabet & Vowels",
    thirdDisc: "Basics of Pronunciation & Articulation",
    forthDisc: "Recognizing Short & Long Vowels (Harakat)",
    fifthDisc: "Emphasizing Correct Letter Characteristics (Sifaat)",
    sixthDisc: "Initial Tajweed Understanding",
    link: "https://book.stripe.com/00g29WbGJ3J47NS5kw",
    price: "22",
    // charge: "22$"
  },
  {
    id: 2,
    title: "Intermediate",
    firstDisc: "In-depth Articulation Points Study",
    secondDisc: "Mastery of Heavy & Light Letters (Tafkheem & Tarqeeq)",
    thirdDisc: "Elongation Rules (Madd) & Application",
    forthDisc: "Intensive Noon & Meem Sakinah Rules",
    fifthDisc: "Introduction to Qalqalah & Vibration",
    sixthDisc: "Complex Words & Intermediate Verses Practice",
    link: "https://book.stripe.com/eVa9Co269gvQ3xC5kx",
    price: "22",
    // charge: "34$"
  },
  {
    id: 3,
    title: "Advance",
    firstDisc: "Comprehensive Tajweed Rules Study",
    secondDisc: "Ikhfa & Idgham Rules (Merging Sounds)",
    thirdDisc: "Waqf (Pausing) & Ibtida (Resuming) Rules",
    forthDisc: "Intensive Noon & Meem Sakinah Rules",
    fifthDisc: "Mastery of Advanced Rules",
    sixthDisc: "Melodic & Profound Recitation Focus",
    link: "https://book.stripe.com/4gw5m88uxa7s4BG3cq",
    price: "22",
    // charge: "47$"
  },
  {
    id: 4,
    title: "Expert",
    firstDisc: "Virtues-Level Tajweed Application",
    secondDisc: "Fluid & Natural Recitation Style",
    thirdDisc: "Tajweed Integration in Reflection",
    forthDisc: "Quranic Rhythms (Tarteel) Mastery",
    fifthDisc: "Intonation, Pacing, & Pausing Mastery",
    sixthDisc: "Complex Verses Exploration & Guiding Others",
    link: "https://book.stripe.com/fZecOAaCFfrMb04eV9",
    price: "22",
    // charge: "56$"
  },
];
const groupSession = [
  {
    title: "Group 5 Students",
    firstDisc: "Small, intimate learning environment.",
    secondDisc: "Individualized attention from instructors.",
    thirdDisc: "Personalized feedback and guidance.",
    fourthDisc: "Interactive discussions and group activities.",
    fifthDisc: "Close-knit support system.",
    sixthDisc: "Tailored curriculum to meet specific needs.",
    link: "https://book.stripe.com/dR65m8aCF1AW2ty00h",
    price: "22",
    // charge: "12$",
  },
  {
    title: "Group 10 Students",
    firstDisc: "Dynamic and collaborative atmosphere.",
    secondDisc: "Diverse perspectives and interactions.",
    thirdDisc: "Teamwork and group Recitations.",
    fourthDisc: "Opportunity for peer learning.",
    fifthDisc: "Balanced between personal attention and group dynamics.",
    sixthDisc: "Comprehensive curriculum with broader coverage.",
    link: "https://book.stripe.com/14k29W9yBdjE6JObJ0",
    price: "22",
    // charge: "Free",
  },
];
