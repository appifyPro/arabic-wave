import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./logregest.css";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import { WidthWide } from "@mui/icons-material";
import ErrorDialog from "../UI/ErrorDialog";
import SuccessDialog from "../UI/SuccessDialog";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BURL } from "../../Utils";
// import Button from "../UI/Button";
export default function Register() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleInputChange = (field, value) => {
    setSignupData({
      ...signupData,
      [field]: value,
    });
    setErrorMsg("");
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [doneMsg, setDoneMsg] = useState("");
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const handleSubmit = async (event) => {
    // event.preventDefault();
    if (!signupData.name) {
      setErrorMsg("Enter Name!");
      setOpen(true);
    } else if (!signupData.phone || signupData.phone.length < 11) {
      setErrorMsg("Enter Valid Phone Number");
      setOpen(true);
    } else if (!validateEmail(signupData.email) || !signupData.email) {
      setErrorMsg("Please enter a valid Email");
      setOpen(true);
    } else if (!signupData.password) {
      setErrorMsg("Please enter a Password");
      setOpen(true);
    } else {
      try {
        const response = await axios.post(`${BURL}/`, signupData);
        // console.log(response);
        // console.log(response?.data?.message);
        setSuccessMsg(response?.data?.message);
        setSuccessOpen(true);
        setSignupData({
          name: "",
          phone: null,
          email: "",
          password: "",
        });
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      } catch (err) {
        console.log(err);
        console.log("error", err.response.data.message);
        setErrorMsg(err.response.data.message);
        setOpen(true);
      }
    }
  };
  const fbLogin = async () => {
    try {
      window.location.href = `${BURL}/fbLogin`;
    } catch (err) {
      console.log("error", err);
    }
  };
  const googleLogin = async () => {
    try {
      window.location.href = `${BURL}/google`;
    } catch (err) {
      console.log("error", err);
    }
  };
  const handlePhoneChange = (value, country) => {
    setSignupData({
      ...signupData,
      phone: value,
      country: country.name,
    });
  };

  return (
    <Box sx={{ backgroundColor: "#f4f4f4" }}>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid
          item
          md={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box p={3} sx={{ width: { xs: "100%", md: "70%" } }}>
            <Box
              pb={2}
              height={100}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src="/logo.png" alt="logo" height="auto" width="100" />
            </Box>

            <Typography
              variant="h4"
              sx={{
                color: "#121212",
                textAlign: "center",
                fontFamily: "Open Sans",
                fontWeight: "bolder",
              }}
            >
              Create an Account
            </Typography>
            <Box component="form">
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
              >
                Enter your Name:
              </Typography>
              <TextField
                // variant="standard"
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="Name"
                sx={{ marginTop: "10px", width: "90%" }}
                value={signupData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
              >
                Enter your Email Address:
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="Email"
                sx={{ marginTop: "10px", width: "90%" }}
                value={signupData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
              >
                Enter your Phone Number:
              </Typography>
              <PhoneInput
                placeholder="Enter phone number"
                inputStyle={{ width: "100%" }}
                value={signupData.phone}
                onChange={handlePhoneChange}
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
              >
                Enter your Country:
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                value={signupData.country}
                sx={{ marginTop: "10px", width: "90%" }}
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Mooli" }}
              >
                Enter your Password:
              </Typography>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  })
                }
              />
              {/* <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="Password"
                sx={{ marginTop: "10px", width: "90%" }}
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    password: e.target.value,
                  })
                }
              /> */}
              <Button
                sx={{
                  marginTop: "20px",
                  width: "90%",
                  borderRadius: "8px",
                  backgroundColor: "#43a047",
                  "&:hover": {
                    backgroundColor: "#43a047",
                  },
                }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Box>
            <Button
              sx={{ marginTop: "20px", borderRadius: "8px", width: "90%" }}
              variant="contained"
              color="primary"
            >
              <Link
                style={{
                  fontStyle: "none",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "100",
                }}
                to="/login"
              >
                Sign In
              </Link>
            </Button>

            <Typography
              mt={3}
              variant="body2"
              sx={{ textAlign: "center", fontFamily: "Mooli" }}
            >
              OR
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", fontFamily: "Mooli" }}
            >
              Signup with
            </Typography>
            <Box
              mb={2}
              mt={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="contained"
                color="primary"
                onClick={googleLogin}
              >
                <img
                  src="/pics/Gmail.png"
                  alt="gmail logo"
                  height={25}
                  width={30}
                />
              </Button>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  width: "50px",
                  height: "50px",
                  marginLeft: "30px",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="contained"
                color="primary"
                onClick={fbLogin}
              >
                <FacebookIcon sx={{ color: "blue" }} />
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "#f3e5f5",
          }}
        >
          <Box
            height="1000px"
            sx={{
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              background: `#f3e5f5 url(/pics/bglogin.png) no-repeat top / 800px`,
            }}
          ></Box>
        </Grid>
        <ErrorDialog open={open} onClose={handleClose} errorMsg={errorMsg} />
        <SuccessDialog
          open={successopen}
          onClose={handleClose}
          successMsg={successMsg}
        />
      </Grid>
    </Box>
  );
}
