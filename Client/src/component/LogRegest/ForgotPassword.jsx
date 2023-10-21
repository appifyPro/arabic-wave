import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ErrorDialog from "../UI/ErrorDialog";
import SuccessDialog from "../UI/SuccessDialog";
import axios from "axios";
import { BURL } from "../../Utils";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  //   const [forgotData, setForgotData] = useState({
  //     email: "",
  //     verification_code: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    setSuccessOpen(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }
  const handleSendCode = async () => {
    if (!email || !validateEmail(email)) {
      setErrorMsg("Enter a Valid Mail !");
      setOpen(true);
      console.log("Enter Valid Email");
    } else {
      try {
        const response = await axios.post(`${BURL}/forgot-password`, { email });
        // console.log(response?.data?.message);
        setSuccessMsg(response?.data?.message);
        setSuccessOpen(true);
        // Implement sending code logic here
        setShowVerification(true);
        setTimer(120); // Start the timer
      } catch (err) {
        console.log(err);
        console.log("error", err.response?.data?.message);
        setErrorMsg(err.response?.data?.message);
        setOpen(true);
      }
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setErrorMsg("Enter a Verify Code!");
      setOpen(true);
      console.log("Enter a Verify Code");
    } else {
      try {
        const response = await axios.post(`${BURL}/verifycode`, {
          email,
          verificationCode,
        });
        // console.log(response?.data?.message);
        setSuccessMsg(response?.data?.message);
        setSuccessOpen(true);
        // Implement code verification logic here
        setShowPasswordForm(true);
        setTimer(0); // Stop the timer
      } catch (err) {
        console.log(err);
        console.log("error", err.response?.data?.message);
        setErrorMsg(err.response?.data?.message);
        setOpen(true);
      }
    }
  };

  const handleResendCode = () => {
    // Implement resend code logic here
    setTimer(120); // Reset timer
  };

  const handleUpdatePassword = async () => {
    console.log("button");
    if (!newPassword || !confirmpassword) {
      setErrorMsg("Enter new Pasword and Confirm it. !");
      setOpen(true);
      console.log("Enter new Pasword and Confirm it. !");
    } else if (newPassword !== confirmpassword) {
      setErrorMsg("New Password and Confirm Password not Matched. !");
      setOpen(true);
      console.log("New Password and Confirm Password not Matched. !");
    } else {
      try {
        const response = await axios.post(`${BURL}/reset-password`, {
          email,
          verificationCode,
          newPassword,
        });
        // console.log(response?.data?.message);
        setSuccessMsg(response?.data?.message);
        setSuccessOpen(true);
        // Reset fields and UI state after successful password update
        setEmail("");
        setVerificationCode("");
        setNewPassword("");
        setConfirmPassword("");
        setShowVerification(false);
        setShowPasswordForm(false);
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      } catch (err) {
        console.log(err);
        // console.log("error", err.response?.data?.message);
        setErrorMsg(err.response?.data?.message);
        setOpen(true);
      }
    }
  };

  useEffect(() => {
    let interval;

    if ((showVerification || showPasswordForm) && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showVerification, showPasswordForm, timer]);

  return (
    <Box
      pb={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ xs: "100vh", md: 800 }}
      bgcolor="white"
    >
      <Box
        mt={2}
        p={3}
        maxWidth={400}
        width="100%"
        height="fit-content"
        sx={{ backgroundColor: "#ffecb3", borderRadius: "12px" }}
      >
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
          sx={{ textAlign: "center", fontFamily: "Roboto Slab" }}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
        >
          Enter your Email Address:
        </Typography>
        <TextField
          label="Email Address"
          InputProps={{
            sx: {
              borderRadius: "12px",
            },
          }}
          sx={{ marginTop: "10px" }}
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          sx={{ marginTop: "10px", borderRadius: "8px" }}
          variant="contained"
          color="primary"
          onClick={handleSendCode}
        >
          Send Code
        </Button>
        <Box mt={1} ml={1}>
          <Link to="/login" style={{ color: "green" }}>
            Back to Login
          </Link>
        </Box>

        {showVerification && (
          <>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
            >
              Enter your Verification Code:
            </Typography>
            <TextField
              label="Verification Code"
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
              }}
              sx={{ marginTop: "10px" }}
              fullWidth
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <Typography variant="body2">
              Time remaining: {formatTime(timer)}
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleVerifyCode}
                sx={{ borderRadius: "8px" }}
              >
                Verify
              </Button>
              <Button onClick={handleResendCode} sx={{ borderRadius: "8px" }}>
                Resend Code
              </Button>
            </Box>
          </>
        )}
        {showPasswordForm && (
          <>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
            >
              Enter your Password:
            </Typography>
            <TextField
              sx={{ marginTop: "10px" }}
              label="New Password"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
            >
              Confirm Password:
            </Typography>
            <TextField
              sx={{ marginTop: "10px" }}
              label="Confirm Password"
              type="password"
              fullWidth
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "20px", borderRadius: "8px" }}
              onClick={handleUpdatePassword}
            >
              Update Password
            </Button>
          </>
        )}
      </Box>
      <ErrorDialog open={open} onClose={handleClose} errorMsg={errorMsg} />
      <SuccessDialog
        open={successopen}
        onClose={handleClose}
        successMsg={successMsg}
      />
    </Box>
  );
};

export default ForgotPassword;
