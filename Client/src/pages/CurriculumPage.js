import React from "react";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import MainSec from "../component/CurriculumComponents/MainSec";
import SecSec from "../component/CurriculumComponents/SecSec";
import TriangleSec from "../component/CurriculumComponents/TriangleSec";
import CoursesSection from "../component/CurriculumComponents/CoursesSec";
import OurCurriculum from "../component/CurriculumComponents/OurCurriculum";
import WhyUsSec from "../component/CurriculumComponents/WhyUsSec";
import Footer from "../component/UI/Footer";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";

export default function Curriculum() {
  return (
    <>
      <NavBar />
      <AyahOfTheDay />
      <WhatsAppBtn />
      <MainSec />
      <SecSec />
      <TriangleSec />
      <CoursesSection />
      <OurCurriculum />
      <Footer />
    </>
  );
}
