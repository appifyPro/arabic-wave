import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "./homepage.css";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ErrorDialog from "../UI/ErrorDialog";
import SuccessDialog from "../UI/SuccessDialog";
import { BURL } from "../../Utils";
export default function Form() {
  const [tajweedform, setTajweedform] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    audio: "",
  });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [record, setRecord] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [country, setCountry] = useState("");
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const handlePhoneChange = (value, country) => {
    setTajweedform({ ...tajweedform, phone: value, country: country.name });
    // setPhone(value);
    // setCountry(country.name);
  };
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };
  const handleAudioChange = (e) => {
    const selectedFile = e.target.files[0];

    if (
      selectedFile &&
      (selectedFile.type === "audio/mpeg" || selectedFile.type === "audio/mp3")
    ) {
      setTajweedform({
        ...tajweedform,
        audio: selectedFile,
      });
    } else {
      setErrorMsg("Upload audio file Only!");
      setOpen(true);
      setTajweedform({
        ...tajweedform,
        audio: null,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
  
      setErrorMsg("Login Required for filling this form");
      setOpen(true);
    } else {
      if (!tajweedform.name) {
        setErrorMsg("Enter Your name");
        setOpen(true);
      } else if (!tajweedform.email || !validateEmail(tajweedform.email)) {
        setErrorMsg("Enter Your Valid Email");
        setOpen(true);
      } else if (!tajweedform.phone || tajweedform.phone.length < 11) {
        setErrorMsg("Invalid Mobile Number");
        setOpen(true);
      } else if (!tajweedform.audio) {
        setErrorMsg("Upload Audio file");
        setOpen(true);
      } else {
        const formData = new FormData();
        formData.append("name", tajweedform.name);
        formData.append("email", tajweedform.email);
        formData.append("phone", tajweedform.phone);
        formData.append("country", tajweedform.country);
        formData.append("audio", tajweedform.audio);

        try {
          const response = await axios.post(`${BURL}/jointajweed`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setSuccessMsg(response.data.message);
          setSuccessOpen(true);
          // console.log(response.data.message); // Display success message
          setTajweedform({
            name: "",
            email: "",
            phone: "",
            country: "",
            audio: "",
          });
        } catch (error) {
          console.error("Error:", error);
          // Display error message to the user
        }
      }
    }
  };

  return (
    <>
      {/* <section className="home-form-sec">
        <div className="form-bg"> */}
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Grid container>
            <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img
                // className="right-form-img"
                src="/pics/testtajweed.png"
                height={590}
                width={560}
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={3} component="form">
                {/* <div className="form-disc"> */}
                <Typography
                  pt={2}
                  variant="h5"
                  sx={{ fontFamily: "Mooli", fontWeight: "bolder" }}
                >
                  Test Your Tajweed-Ul-Quran Skills Today!
                </Typography>
                <Typography
                  variant="body2"
                  mt={2}
                  mb={3}
                  sx={{ fontFamily: "Mooli", fontSize: "18px" }}
                >
                  Please don't hesitate to get in touch with us or simply
                  complete the form below and upload your recorded audio. Our
                  dedicated support team will promptly reach out to you
                  following a thorough evaluation.
                </Typography>
                {/* </div> */}
                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Name
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Name"
                  type="name"
                  value={tajweedform.name}
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
                  onChange={(e) =>
                    setTajweedform({
                      ...tajweedform,
                      name: e.target.value,
                    })
                  }
                />

                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Email
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Email"
                  type="email"
                  value={tajweedform.email}
                  onChange={(e) =>
                    setTajweedform({
                      ...tajweedform,
                      email: e.target.value,
                    })
                  }
                  sx={{
                    marginTop: "5px",
                    width: { xs: "100%", md: "100%" },
                  }}
                />

                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Phone Number
                </Typography>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={tajweedform.phone}
                  onChange={handlePhoneChange}
                />
                {errorMsg && (
                  <div className="error-msg">
                    <p>{errorMsg}</p>
                  </div>
                )}

                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Country Name
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Country"
                  value={tajweedform.country}
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
                />

                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Audio (Less than 3mbs)
                </Typography>
                <TextField
                  variant="outlined"
                  type="file"
                  size="small"
                  accept=".mp3"
                  onChange={handleAudioChange}
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
                />
                {tajweedform.audio && (
                  <Typography>
                    Uploaded audio: {tajweedform.audio.name}
                  </Typography>
                )}
                <Box mt={3}>
                  <Button
                    variant="contained"
                    size="small"
                    type="submit"
                    sx={{
                      backgroundColor: "rgb(223, 145, 0)",
                      "&:hover": {
                        backgroundColor: "rgb(223, 145, 0)",
                      },
                    }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ErrorDialog open={open} onClose={handleClose} errorMsg={errorMsg} />
        <SuccessDialog
          open={successopen}
          onClose={handleClose}
          successMsg={successMsg}
        />
      </Box>
    </>
  );
}
