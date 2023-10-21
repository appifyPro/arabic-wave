import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MiniMainSec from "../component/UI/MiniMainSec";
import OurFeaturedSec from "../component/OurFeaturedComponents/OurFeaturedSec";
import WhyAWSec from "../component/OurFeaturedComponents/WhyAWSec";
import Footer from "../component/UI/Footer";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";

export default function OurFeaturedPage() {
  return (
    <>
      <NavBar />
      <AyahOfTheDay />
      <WhatsAppBtn />
      <MiniMainSec
        headClass="ourfeatured-bg"
        header="Our Features"
        p="Your Quranic Journey Begins with Trust in Arabic Wave Academy"
      />
      <OurFeaturedSec />
      <WhyAWSec />
      <Footer />
    </>
  );
}
