import React, { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
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
import { BURL } from "../../Utils";

export default function Form() {
  const [teacherform, setTeacherForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "Tajweed Ul-Quran",
    resume: null,
  });
  //   const [select1, setSelect1] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const handlePhoneChange = (value, country) => {
    setTeacherForm({ ...teacherform, phone: value, country: country.name });
    // setPhone(value);
    // setCountry(country.name);
  };
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      // console.log("Login Required");
      setErrorMsg("Login Required for filling this form");
      setOpen(true);
    } else {
      if (!teacherform.name) {
        setErrorMsg("Enter Your name");
        setOpen(true);
      } else if (!teacherform.email || !validateEmail(teacherform.email)) {
        setErrorMsg("Enter Your Valid Email");
        setOpen(true);
      } else if (!teacherform.course || teacherform.course === "") {
        setErrorMsg("Please select your Course");
        setOpen(true);
      } else if (!teacherform.phone || teacherform.phone.length < 11) {
        setErrorMsg("Invalid Mobile Number");
        setOpen(true);
      } else if (!teacherform.resume) {
        setErrorMsg("Upload Resume");
        setOpen(true);
      } else {
        const formData = new FormData();
        formData.append("name", teacherform.name);
        formData.append("email", teacherform.email);
        formData.append("phone", teacherform.phone);
        formData.append("country", teacherform.country);
        formData.append("course", teacherform.course);
        formData.append("resume", teacherform.resume);

        try {
          const response = await axios.post(`${BURL}/jointeacher`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setSuccessMsg(response.data.message);
          setSuccessOpen(true);
          // console.log(response.data.message); // Display success message
          setTeacherForm({
            name: "",
            email: "",
            phone: "",
            country: "",
            course: "Tajweed Ul-Quran",
            resume: null,
          });
        } catch (error) {
          console.error("Error:", error);
          // Display error message to the user
        }
      }
    }
  };
  const handleResumeChange = (e) => {
    const selectedFile = e.target.files[0];

    if (
      (selectedFile && selectedFile.type === "application/pdf") ||
      selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      setTeacherForm({
        ...teacherform,
        resume: selectedFile,
      });
    } else {
      setErrorMsg("Upload Pdf or DOCX file Only!");
      setOpen(true);
      setTeacherForm({ ...teacherform, resume: null });
    }
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Container>
          <Grid container>
            <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
              <img
                // className="right-form-img"
                src="/pics/Online-tutor.jpeg"
                height={530}
                width={550}
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
                  Join As A Teacher
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Mooli" }} mb={3}>
                  We empower you to build the life you want! Join No.1 online
                  Learning platform!
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
                  value={teacherform.name}
                  onChange={(e) =>
                    setTeacherForm({ ...teacherform, name: e.target.value })
                  }
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
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
                  value={teacherform.email}
                  onChange={(e) =>
                    setTeacherForm({ ...teacherform, email: e.target.value })
                  }
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
                />

                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Phone Number
                </Typography>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={teacherform.phone}
                  onChange={handlePhoneChange}
                />
                {/* {errorMsg && (
                  <div className="error-msg">
                    <p>{errorMsg}</p>
                  </div>
                )} */}

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
                  value={teacherform.country}
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
                />
                <Typography
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                  component="label"
                >
                  Enter Your Course
                </Typography>
                <FormControl
                  variant="outlined"
                  sx={{ mt: 1, minWidth: 100, width: "100%" }}
                >
                  <InputLabel>Course</InputLabel>
                  <Select
                    value={teacherform.course}
                    onChange={(e) =>
                      setTeacherForm({
                        ...teacherform,
                        course: e.target.value,
                      })
                    }
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Tajweed Ul-Quran">
                      Tajweed Ul-Quran
                    </MenuItem>
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
                  Upload Your Resume
                </Typography>
                <TextField
                  variant="outlined"
                  type="file"
                  accept=".pdf"
                  size="small"
                  sx={{ marginTop: "5px", width: { xs: "100%", md: "100%" } }}
                  // value={teacherform.resume}
                  onChange={handleResumeChange}
                />
                {teacherform.resume && (
                  <Typography>
                    Uploaded Resume: {teacherform.resume.name}
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
      {/* <section className="home-form-sec">
        <div className="form-bg center teacher-form">
          <img className="right-form-img" src="/img/Online-tutor.JPG" alt="" />
          <div className="form-container">
            <div className="form-disc">
              <h1>Join As A Teacher</h1>
              <p>
                We empower you to build the life you want! <br />
                Join No.1 online Learning platform!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="center">
              <div className="center">
                <div className="center select-container">
                  <label className="transition">Select Course</label>
                  <select
                    value={select1}
                    onChange={(e) =>
                      setSelect1((prevValue) => (prevValue = e.target.value))
                    }
                  >
                    <option value="">Courses</option>
                    <option value="tajweed-ul-quran">Tajweed Ul-Quran</option>
                    <option value="memorization-ul-quran">
                      Memorization Ul-Quran
                    </option>
                    <option value="learn-urdu">Learn Urdu</option>
                    <option value="learn-arabic">Learn Arabic</option>
                  </select>
                </div>
              </div>
              <div className="center">
                <div className="input-container">
                  <label className="transition">
                    Resume Google Drive's link
                  </label>
                  <input
                    type="text"
                    name="file"
                    onChange={(e) =>
                      setResume((prevValue) => (prevValue = e.target.value))
                    }
                  />
                </div>
              </div>
              {errorMsg && (
                <div className="error-msg">
                  <p>{errorMsg}</p>
                </div>
              )}
              <button className="btn center" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </>
  );
}
