import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BURL } from "../../../Utils";
import BackToBlogs from "../../UI/BackToBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(`${BURL}/blogs/${id}`);
      // console.log(response.data.data);
      setBlogDetails(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="post-sec">
      <BackToBlogs />
      <div className="content">
        <h1>{blogDetails.header}</h1>
        <p>{blogDetails.paragraph}</p>
        <div dangerouslySetInnerHTML={{ __html: blogDetails.details }} />
      </div>
    </section>
  );
};

export default BlogDetails;
