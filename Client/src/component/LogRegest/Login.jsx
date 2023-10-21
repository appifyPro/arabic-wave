import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./logregest.css";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import ErrorDialog from "../UI/ErrorDialog";
import { BURL } from "../../Utils";
import axios from "axios";
import SuccessDialog from "../UI/SuccessDialog";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export default function Login() {
  const Navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("token");
    // console.log(auth);
    if (auth) {
      Navigate("/");
    }
  }, []);
  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [isadmin, setIsadmin] = useState(false);
  const googleLogin = async () => {
    try {
      window.location.href = `${BURL}/google`;
    } catch (err) {
      console.log("error", err);
    }
  };
  const fbLogin = async () => {
    try {
      window.location.href = `${BURL}/fbLogin`;
    } catch (err) {
      console.log("error", err);
    }
  };
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const handleSubmit = async () => {
    if (!loginData.email || !validateEmail(loginData.email)) {
      setErrorMsg("Enter a Valid Gmail !");
      setOpen(true);
    } else if (!loginData.password) {
      setErrorMsg("Enter password!");
      setOpen(true);
    } else {
      if (isadmin) {
        try {
          const response = await axios.post(`${BURL}/adminLogin`, loginData);
          // console.log(response);
          // console.log(response?.data?.token);
          // console.log(response?.data.message);
          // Store the token in local storage or other state management mechanism
          localStorage.setItem("admin", `Bearer ${response?.data?.token}`);
          // Redirect or navigate to the desired page
          setSuccessMsg(response?.data.message);
          setSuccessOpen(true);

          SetLoginData({
            email: "",
            password: "",
          });
          setTimeout(() => {
            Navigate("/admindashboard");
          }, 3000);
        } catch (err) {
          console.log(err);
          console.log("error", err.response?.data?.message);
          setErrorMsg(err.response?.data?.message);
          setOpen(true);
        }
      } else {
        try {
          const response = await axios.post(`${BURL}/signin`, loginData);
          // console.log(response);
          // console.log(response?.data?.token);
          // console.log(response?.data.message);
          // Store the token in local storage or other state management mechanism
          localStorage.setItem("token", response?.data?.token);
          // Redirect or navigate to the desired page
          setSuccessMsg(response?.data.message);
          setSuccessOpen(true);

          SetLoginData({
            email: "",
            password: "",
          });
          setTimeout(() => {
            Navigate("/");
          }, 3000);
        } catch (err) {
          console.log(err);
          console.log("error", err.response?.data?.message);
          setErrorMsg(err.response?.data?.message);
          setOpen(true);
        }
      }

      // console.log(loginData);
    }
  };
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid
          item
          mt={10}
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Box
              pb={2}
              height={100}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img src="/logo.png" alt="logo" height="auto" width="100" />
            </Box>
            <Typography
              mb={4}
              variant="h5"
              sx={{
                textAlign: "center",
                fontFamily: "Mooli",
                fontWeight: "bolder",
              }}
            >
              Login Form
            </Typography>
            <Box ml={4} component="form">
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
                value={loginData.email}
                onChange={(e) =>
                  SetLoginData({ ...loginData, email: e.target.value })
                }
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
                value={loginData.password}
                onChange={(e) =>
                  SetLoginData({ ...loginData, password: e.target.value })
                }
              />
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="body1"
                  sx={{ marginTop: "20px", fontFamily: "Mooli" }}
                >
                  Admin Login
                </Typography>
                <Switch
                  sx={{ marginTop: "13px" }}
                  value={isadmin}
                  onChange={() => setIsadmin((prevIsAdmin) => !prevIsAdmin)}
                  color="warning"
                />
              </Box>
              <Box mt={2}>
                <Link to="/forgotpassword">Forgot Password?</Link>
              </Box>

              <Button
                sx={{ marginTop: "40px", borderRadius: "8px", width: "90%" }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Button
                sx={{
                  marginTop: "20px",

                  backgroundColor: "#43a047",
                  "&:hover": {
                    backgroundColor: "#43a047",
                  },
                  borderRadius: "8px",
                  width: "90%",
                }}
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
                  to="/register"
                >
                  Register Now
                </Link>
              </Button>
            </Box>
            <Typography
              mt={2}
              sx={{ textAlign: "center", fontFamily: "Mooli" }}
            >
              Or Continue with
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
            // backgroundColor: "#f3e5f5",
          }}
        >
          <Box
            // p={6}

            sx={{
              height: "100%",
              // display: "flex",
              // justifyContent: "center",

              // alignItems: "center",
              padding: "opx",

              // background: `#f3e5f5 url(/pics/bglogin.png) no-repeat top / 600px`,
            }}
          >
            <img src="/pics/login img.png" height="auto" width="100%" />
          </Box>
        </Grid>
      </Grid>
      <ErrorDialog open={open} onClose={handleClose} errorMsg={errorMsg} />
      <SuccessDialog
        open={successopen}
        onClose={handleClose}
        successMsg={successMsg}
      />
    </Box>
  );
}
