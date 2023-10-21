import React from "react";
import Button from "../UI/Button";
import "./homepage.css";
export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="right-side">
        <img src="/pics/aboutUs.png" alt="" />
      </div>
      <div className="left-side center">
        <h1>About Us</h1>
        <p style={{ paddingTop: "20px" }}>
          Welcome to "Arabic Wave Academy," a distinguished online platform
          dedicated to the profound art of Tajweed Ul Quran. In this immersive
          haven of learning, we wholeheartedly embrace the Quran's timeless
          elegance, treating each verse with the utmost care and precision it
          deserves. Our journey is inspired by the illuminating teachings of the
          revered Prophet Muhammad (peace be upon him), as eloquently conveyed
          in <strong>Sunan al-Tirmidhī, Hadith Number 2914.</strong>
        </p>

        <h3
          style={{
            fontWeight: "bold",
            paddingTop: "15px",
          }}
        >
          Recite and ascend the levels of Paradise:
        </h3>

        <p style={{ paddingTop: "15px" }}>
          Abdullah ibn Amr reported: The Prophet, peace and blessings be upon
          him, said, “It will be said to the companion of the Quran: Recite and
          ascend as you recited in the world. Verily, your rank is determined by
          the last verse you recite.”
        </p>
        <p style={{ paddingTop: "20px" }}>
          "Dive into Excellence with Arabic Wave Academy– Your Premier Online
          Arabic, Tajweed Ul Qur’an and Qirat learning Platform! Delve into the
          Depth of Quranic Learning with our Exceptional Arabic and Online Quran
          Teaching Courses, Designed for All Ages. The Quran's Wisdom Knows No
          Bounds, Enriching Lives Around the Globe. Become Part of our
          International Community of Happy Students, Spanning the USA, Canada,
          UK, UAE, Saudi Arabia, India, and Beyond. Our Distinguished
          Instructors are Graduates of Renowned Islamic Institutions,
          Guaranteeing You the Highest Quality Education."
        </p>
        <p style={{ paddingTop: "20px" }}>
          Arabic Wave Academy is a globally recognized institution committed to
          providing high-quality Quranic education. Our unwavering dedication to
          Quranic learning is steadfast and impartial. We cater to students from
          diverse backgrounds, without discrimination based on sect or
          affiliation.
        </p>
        <p style={{ paddingTop: "20px" }}>
          Our team of Quran and Arabic instructors represents a spectrum of
          sects and backgrounds, but they do not impart guidance or teachings
          specific to any particular sect. Instead, our primary focus remains on
          Quranic studies and the Arabic language, delivered through
          comprehensive online training. Our commitment to fostering an
          inclusive, unbiased, and enriching educational environment ensures
          that all students, regardless of their beliefs or affiliations, can
          benefit from our holistic approach to Quranic education.
        </p>
        {/* <p className="hadeth">“The Messenger of Allah (peace and blessings of Allah be upon him) said: ‘That individual must lead the prayer which has the most understanding of the Book of Allah; if they are equal in an understanding of the Qur’an, then by the one who has the most knowledge of the Sunnah; if they are equivalent in the knowledge of the Sunnah, then by the one who moved (made hijrah) first; No one should lead another in Salah in his domain of power, or sit in his position in his home, unless with his permission.”</p> */}
        <div className="center">
          <Button name="Book A Free Trail" to="/bookfreetrail" />
          <Button name="Read More" to="/about-us" />
        </div>
      </div>
    </div>
  );
}
