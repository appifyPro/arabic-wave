import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";

const Testimonial = (props) => {
  return (
    <Box
      height={300}
      width={300}
      p={2}
     
      sx={{
        borderRadius: "12px",
        backgroundColor: "var(--mainColor--)",
        // border: "2px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={props.avatar}
        sx={{ height: "80px", width: "80px", ml: "auto", mr: "auto" }}
      />
      <Rating
        sx={{ marginTop: "10px", ml: "auto", mr: "auto" }}
        name="read-only"
        value={5}
        readOnly
      />
      <Typography
        pt={2}
        variant="body2"
        sx={{ fontFamily: "Oswald", color: "white" }}
      >
        {props.detail}
      </Typography>
      <Typography
        pt={2}
        variant="body1"
        sx={{
          fontFamily: "Oswald",
          color: "#ffd600",
          fontWeight: "bolder",
        }}
      >
        {props.name}
      </Typography>
    </Box>
  );
};

export default Testimonial;
