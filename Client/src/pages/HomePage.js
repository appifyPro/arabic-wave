import React, { useEffect, useState } from "react";
import MainSection from "../component/HomeComponent/mainSection";
import NavBar from "../component/UI/NavReact";
import AyahOfTheDay from "../component/UI/AyahOfTheDay";
import OurFlagCourses from "../component/HomeComponent/Courses";
import AboutUs from "../component/HomeComponent/AboutUs";
import Certified from "../component/HomeComponent/Certified";
import Accurdion from "../component/HomeComponent/Accurdion";
import OurCurriculum from "../component/HomeComponent/OurCurriculum";
import LearnTajweed from "../component/HomeComponent/LearnTajweed";
import Table from "../component/HomeComponent/Table";
import Form from "../component/HomeComponent/Form";
import Footer from "../component/UI/Footer";
import WhatsAppBtn from "../component/UI/WhatsAppBtn";
import TestimonialSection from "../component/TestimonialSection/TestimonialSection";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

export default function HomePage() {
  const handleToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    // const Navigate = useNavigate();
    if (token) {
      // Store the token in local storage or other state management mechanism
      localStorage.setItem("token", token);
      // Redirect or navigate to the desired page
      // console.log(token);
      // Navigate("/");
      window.location.href = "/"; // Redirect to the main page
    }
  };
  // Extract token from URL parameters
  useEffect(() => {
    handleToken();
  }, []);
  return (
    <>
      <NavBar />

      <AyahOfTheDay />
      <WhatsAppBtn />
      <MainSection />
      <OurFlagCourses />
      <AboutUs />
      <Certified />
      <OurCurriculum />
      <LearnTajweed />
      <TestimonialSection />
      <Table />
      <Form />
      <Accurdion />
      <Footer />
    </>
  );
}
