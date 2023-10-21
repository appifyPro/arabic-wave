import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import Footer from "../component/UI/Footer";
import MiniMainSec from "../component/UI/MiniMainSec";
import BlogSec from "../component/BlogComponents/BlogSec";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";
import SelfBlog from "../component/BlogComponents/Posts/SelfBlog";

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <WhatsAppBtn />
      <AyahOfTheDay />
      <MiniMainSec headClass="blog-bg" header="Arabic Wave Blog" />
      <BlogSec />
      <SelfBlog />
      <Footer />
    </>
  );
}
