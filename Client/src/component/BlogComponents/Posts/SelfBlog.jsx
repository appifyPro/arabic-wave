import axios from "axios";
import React, { useEffect, useState } from "react";
import { BURL } from "../../../Utils";
import { Link } from "react-router-dom";

const SelfBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  });
  const getBlogs = async () => {
    try {
      const response = await axios.get(`${BURL}/blogs`);
      //   console.log(response.data.data);
      setBlogs(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section className="blog-sec center">
        {blogs.map((item, i) => (
          <div className="blog-card" key={i}>
            <img src="/pics/background-card.png" alt="" />
            <h1>{item.header}</h1>
            <p>{item.paragraph}</p>
            <Link to={`/blogs/${item.id}`}>
              <button className="btn">
                <span>Read More</span>
              </button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default SelfBlog;
