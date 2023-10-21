import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Testimonial from "../Testimonial/Testimonial";

const TestimonialSection = () => {
  const reviewData = [
    {
      avatar: "/pics/avatar4.png",
      details:
        "The Arabic Quran website is a true gem for seekers of spiritual enlightenment. Its beautifully designed interface and user-friendly navigation make it a joy to explore the depths of the Quranic teachings.",
      name: "Asmar/PK",
    },
    {
      avatar: "/pics/avatar5.png",
      details:
        "The website's commitment to accuracy and authenticity is commendable where seekers can trust the knowledge they gain.This platform is a beacon of light that guides you through the timeless wisdom of Quran.",
      name: "Arham/USA",
    },
    {
      avatar: "/pics/avatar6.jpg",
      details: "Love the way they teach.Highly Recommended",
      name: "Amina/India",
    },
    {
      avatar: "/pics/avatar2.webp",
      details:
        "The Arabic Quran website is a true gem for seekers of spiritual enlightenment. Its beautifully designed interface and user-friendly navigation make it a joy to explore the depths of the Quranic teachings.",
      name: "Ali/UK",
    },
    {
      avatar: "/pics/avatar1.png",
      details:
        "I Love Learning Quraan from Arabic Wave.I believe this institute provide you a very good knowledge about Quraan.I prefer you to join Arabic wave.",
      name: "Usman/PK",
    },
    {
      avatar: "/pics/avatar3.jpeg",
      details: "Very Good PlatForm.",
      name: "Ayesha/USA",
    },
  ];
  return (
    <Box pt={10} pb={10} sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Grid container>
          <header className="center">
            <h1>Review Section</h1>
          </header>
          {reviewData.map(({ avatar, details, name }, i) => (
            <Grid
              key={i}
              item
              mt={3}
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <Testimonial name={name} avatar={avatar} detail={details} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
