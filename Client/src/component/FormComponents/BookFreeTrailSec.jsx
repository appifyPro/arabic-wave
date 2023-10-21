import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ErrorDialog from "../UI/ErrorDialog";
import SuccessDialog from "../UI/SuccessDialog";
import axios from "axios";
import { BURL } from "../../Utils";

export default function BookFreeTrailSec() {
  const [booktrial, setBooktrial] = useState({
    name: "",
    email: "",
    course: "Tajweed Ul-Quran",
    phone: "",
    country: "",
    address: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handlePhoneChange = (value, country) => {
    setBooktrial({ ...booktrial, phone: value, country: country.name });
    // setPhone(value);
    // setCountry(country.name);
  };
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!booktrial.name) {
      setErrorMsg("Enter Your name");
      setOpen(true);
    } else if (!booktrial.email || !validateEmail(booktrial.email)) {
      setErrorMsg("Enter Your Valid Email");
      setOpen(true);
    } else if (!booktrial.phone || booktrial.phone.length < 11) {
      setErrorMsg("Invalid Mobile Number");
      setOpen(true);
    } else if (!booktrial.address) {
      setErrorMsg("Enter Address");
      setOpen(true);
    } else {
      try {
        const response = await axios.post(`${BURL}/booktrial`, booktrial);
        setSuccessMsg(response.data.message);
        setSuccessOpen(true);
        // console.log(response);
        setBooktrial({
          name: "",
          email: "",
          course: "Tajweed Ul-Quran",
          phone: "",
          country: "",
          address: "",
        });
      } catch (err) {
        console.log(err);
      }

      // console.log(booktrial);
    }
    // if (!email || !validateEmail(email)) {
    //   setErrorMsg("Enter your Gmail!");
    // } else if (!select1) {
    //   setErrorMsg("Choose your course!");
    // } else if (!value) {
    //   setErrorMsg("Enter your phone!");
    // } else {
    //   const token = localStorage.getItem("auth");
    //   const response = await fetch(
    //     "https://blue-cheerful-starfish.cyclic.app/form/booktrail/",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Token ${token}`,
    //       },
    //       body: JSON.stringify({ email: email, phone: value, type: select1 }),
    //     }
    //   );
    //   if (response.status === 200) {
    //     const message = await response.json();
    //     console.log(message);
    //     window.location.href = "/";
    //   } else {
    //     const message = await response.json();
    //     console.log(message);
    //   }
    // }
  };
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <Grid container sx={{ backgroundColor: "var(--bgColorGray--)" }}>
          <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              // className="right-form-img"
              src="/pics/booktrialimg.png"
              height={740}
              width={550}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={3} component="form">
              <Typography pt={2} variant="h5" sx={{ fontFamily: "Mooli" }}>
                Book A Free Trail
              </Typography>
              <Typography
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                component="label"
              >
                Enter Your Name
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                sx={{ width: "100%", marginTop: "5px" }}
                value={booktrial.name}
                onChange={(e) =>
                  setBooktrial({
                    ...booktrial,
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
                label="Email"
                variant="outlined"
                sx={{ width: "100%", marginTop: "5px" }}
                value={booktrial.email}
                onChange={(e) =>
                  setBooktrial({
                    ...booktrial,
                    email: e.target.value,
                  })
                }
              />
              <Typography
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                component="label"
              >
                Enter Your Course
              </Typography>
              <FormControl
                variant="outlined"
                sx={{ mt: 1, minWidth: 120, width: "100%" }}
              >
                <InputLabel>Course</InputLabel>
                <Select
                  value={booktrial.course}
                  onChange={(e) =>
                    setBooktrial({
                      ...booktrial,
                      course: e.target.value,
                    })
                  }
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Tajweed Ul-Quran">Tajweed Ul-Quran</MenuItem>
                  <MenuItem value="Memorization Ul-Quran">
                    Memorization Ul-Quran
                  </MenuItem>
                  <MenuItem value="Learn Urdu">Learn Urdu</MenuItem>
                  <MenuItem value="Learn Arabic">Learn Arabic</MenuItem>
                </Select>
              </FormControl>
              <Typography
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                component="label"
              >
                Enter Your Phone Number
              </Typography>
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  textAlign: "left",
                  justifyContent: "left",
                  width: "100%",
                }}
              >
                <PhoneInput
                  placeholder="Enter phone number"
                  value={booktrial.phone}
                  onChange={handlePhoneChange}
                />
              </Box>
              <Typography
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                component="label"
              >
                Enter Your Address
              </Typography>
              <TextField
                label="Address"
                sx={{ width: "100%", marginTop: "5px" }}
                multiline
                rows={3}
                value={booktrial.address}
                onChange={(e) =>
                  setBooktrial({
                    ...booktrial,
                    address: e.target.value,
                  })
                }
              />
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
      {/* <section className="home-form-sec">
        <div className="form-bg center">
          <img
            className="right-form-img"
            src="/pics/about-us-img.webp"
            alt=""
          />
          <div className="form-container">
            <div className="form-disc">
              <h1>Book A Free Trail</h1>
            </div>
            <Box component="form"> */}
      {/* <div>
                <div className="center select-container">
                  <label className="transition">Select Course</label>
                  <select
                    value={select1}
                    onChange={(e) => setSelect1(e.target.value)}
                  >
                    <option value="">Courses</option>
                    <option value="tajweed-ul-quran">Tajweed Ul-Quran</option>
                    <option value="memrization-ul-quran">
                      Memorization Ul-Quran
                    </option>
                    <option value="learn-urdu">Learn Urdu</option>
                    <option value="learn-arabic">Learn Arabic</option>
                  </select>
                </div>
              </div> */}

      {/* <div>
                            <div className="input-container">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label className="transition">Email</label>
                            </div>
                        </div> */}
      {/* </Box>
          </div>
        </div>
      </section> */}
    </Box>
  );
}
