import React, { useState } from "react";
import Popup from "../UI/Popup";
import { Link } from "react-router-dom";
import "./blogpage.css";
export default function BlogSec() {
  const [openList, setOpenList] = useState(blogArr.map(() => false));

  const handleOpen = (index) => {
    setOpenList((prevList) => {
      const newList = [...prevList];
      newList[index] = !newList[index];
      return newList;
    });
  };

  return (
    <>
      <section className="blog-sec center">
        {blogArr.map((item, i) => (
          <div className="blog-card" key={i}>
            <img src="/pics/background-card.png" alt="" />
            <h1>{item.header}</h1>
            <p>{item.paragraph}</p>
            <Link to={item.post}>
              <button className="btn">
                <span>Read More</span>
              </button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

const blogArr = [
  {
    header: "The Importance of Quran Education",
    paragraph:
      "The Quran, the holy book of Islam, is not merely a religious text; it is a source of spiritual guidance, a linguistic masterpiece, and a fountain of wisdom. For Muslims, learning the Quran is not just a religious duty but a lifelong journey that brings them closer to God and enriches their understanding of the world. In this article, we will explore the profound importance of Quran education and how it can unlock the spiritual and linguistic treasures of the Quran.",
    post: "/blogs/importanceofquran",
  },
  {
    header: "Mastering Tajweed: A Guide to Perfect Quranic Recitation",
    paragraph:
      "The Quran, the holy book of Islam, is not just a collection of divine revelations; it's a profound source of spiritual guidance, wisdom, and solace for millions of Muslims worldwide. To truly connect with the Quran and its teachings, mastering Tajweed, the art of perfect Quranic recitation, is essential. Tajweed not only enhances your understanding of the Quran but also elevates your spiritual experience. In this comprehensive guide, we will delve into the significance of Tajweed, its rules, and how it can transform your Quranic journey.",
    post: "/blogs/quranrecitation",
  },
  {
    header: "Learning Arabic for Quranic Understanding",
    paragraph:
      "The Quran, the sacred text of Islam, holds a central place in the lives of Muslims worldwide. Its verses contain divine guidance, wisdom, and a profound connection to spirituality. To truly grasp the depth of its teachings, learning Arabic becomes an invaluable asset. In this comprehensive guide, we will explore the importance of learning Arabic for a better understanding of the Quran, breaking down the language barrier that often stands between the reader and the divine message.",
    post: "/blogs/understandquran",
  },
  {
    header: "Teaching Quran to Children: Strategies and Tips",
    paragraph:
      "Introducing the Quran to children is a profoundly rewarding journey. It's not just about teaching them a book; it's about instilling in them a lifelong love for the Quran, nurturing their spirituality, and building a strong foundation for their faith. In this comprehensive guide, we will explore effective strategies and valuable tips for teaching the Quran to children, ensuring that the process is engaging, meaningful, and enjoyable.",
    post: "/blogs/learningqurantips",
  },

  // {
  //   header: "Why Is It Important For A Muslim To Learn Arabic?",
  //   paragraph:
  //     "Arabic is one of the top five most spoken languages, and learning it is a worthwhile endeavor. About 400 million people speak Arabic.",
  //   post: "/WhyMemorizeQuran",
  // },
];
