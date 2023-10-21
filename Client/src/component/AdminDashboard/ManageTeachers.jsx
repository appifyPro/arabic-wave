import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BURL } from "../../Utils";
import CloseIcon from "@mui/icons-material/Close";
const ManageTeachers = () => {
  const [teacherapp, setTeacherapp] = useState([]);
  const [activeteachers, setActiveTeachers] = useState([]);
  const [emaildisplay, setEmaildisplay] = useState(false);
  const [singlemail, setSinglemail] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");

  const [emaildata, setEmaildata] = useState({
    email: "",
    emailTitle: "",
    emailMessage: "",
  });
  const adminToken = localStorage.getItem("admin");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const newTeacherHandler = async () => {
    try {
      const response = await axios.get(`${BURL}/alljointeahcers`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      //   console.log(response.data.data);
      setTeacherapp(response.data.data);
      const response2 = await axios.get(`${BURL}/allactiveteahcers`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      //   console.log(response.data.data);
      setActiveTeachers(response2.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const emailButtonHandler = (emailm) => {
    setEmaildisplay(true);
    setEmaildata({ ...emaildata, email: emailm });
    setSinglemail(true);
  };
  const activeteacherHandle = async (
    id,
    name,
    email,
    phone,
    course,
    country,
    resume
  ) => {
    try {
      const data = { id, name, email, phone, course, country, resume };
      const response = await axios.post(`${BURL}/activateteacher`, data, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data);
      setSuccessMessage("Activation Successfull!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteHandleteacher = async (id) => {
    try {
      const response = await axios.delete(`${BURL}/teacher/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.message);
      setSuccessMessage("Deletion Successfull!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (err) {
      setErrorMessage("Error in Deletion!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      console.log(err);
    }
  };
  const deleteHandleActiveteacher = async (id) => {
    try {
      const response = await axios.delete(`${BURL}/activeteacher/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.message);
      setSuccessMessage("Deletion Successfull!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (err) {
      setErrorMessage("Error in Deletion!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      console.log(err);
    }
  };
  const handlEmail = async () => {
    if (!emaildata.emailTitle) {
   
      setErrorMessage("Please Enter Email Title!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return; // Return early if the title is missing
    }

    if (!emaildata.emailMessage) {
   
      setErrorMessage("Please Enter Description.!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      return; // Return early if the message is missing
    }

    // Both title and message are provided, proceed to send the email
    try {
      const response = await axios.post(`${BURL}/sendmail`, emaildata, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response?.data);
      setSuccessMessage("Email Sent Successfully!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Error in Email Sending!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };
  const emailBulkHandler = () => {
    setSinglemail(false);
    setEmaildisplay(true);
  };
  const sendAllActiveTeachers = async () => {
    try {
      const response = await axios.post(
        `${BURL}/sendallteachersmail`,
        emaildata,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      setSuccessMessage("Email Sent to all Active Teachers Successfully!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);

      setRefresh(true);
    } catch (err) {
      console.log(err);
      setErrorMessage("Error in Email Sending!");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };
  useEffect(() => {
    newTeacherHandler();
    setRefresh(false);
  }, [refresh]);
  return (
    <Box
      sx={{
        // width: "100%",
        marginLeft: { xs: "2px", md: "2px" },
        backgroundColor: "#e0f2f1",
        // height: 100000,
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
            }}
          >
            Manage Teachers
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            Teacher Requested
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Course</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Resume</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teacherapp.map(
                  (
                    { id, name, email, phone, course, country, resume },
                    item
                  ) => (
                    <TableRow
                      key={item}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {name}
                      </TableCell>
                      <TableCell align="center">{email}</TableCell>
                      <TableCell align="center">{phone}</TableCell>
                      <TableCell align="center">{course}</TableCell>
                      <TableCell align="center">{country}</TableCell>
                      <TableCell align="center">
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            margin: "12px",
                            backgroundColor: "green",
                            "&:hover": {
                              backgroundColor: "green",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => {
                            window.location.href = `${resume}`;
                          }}
                        >
                          Download
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            margin: "12px",
                            backgroundColor: "green",
                            "&:hover": {
                              backgroundColor: "green",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() =>
                            activeteacherHandle(
                              id,
                              name,
                              email,
                              phone,
                              course,
                              country,
                              resume
                            )
                          }
                        >
                          Active
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            margin: "12px",
                            backgroundColor: "red",
                            "&:hover": {
                              backgroundColor: "red",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => deleteHandleteacher(id)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sx={{ display: emaildisplay ? "block" : "none" }}>
          <Box width="90%" sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button size="medium" onClick={() => setEmaildisplay(false)}>
              <CloseIcon sx={{ color: "black" }} />
            </Button>
          </Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            Email Portion
          </Typography>

          <Box component="form">
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
            >
              Enter your Email Title:
            </Typography>
            <TextField
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
              }}
              label="title"
              sx={{ marginTop: "10px", width: "90%" }}
              value={emaildata.emailTitle}
              onChange={(e) =>
                setEmaildata({
                  ...emaildata,
                  emailTitle: e.target.value,
                })
              }
            />
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
            >
              Enter your Email Description:
            </Typography>
            <TextField
              label="Description"
              type="text"
              multiline
              rows={4}
              InputProps={{
                sx: {
                  borderRadius: "12px",
                },
              }}
              sx={{ marginTop: "10px", width: "90%" }}
              value={emaildata.emailMessage}
              onChange={(e) =>
                setEmaildata({
                  ...emaildata,
                  emailMessage: e.target.value,
                })
              }
            />
            {singlemail ? (
              <Button
                sx={{ marginTop: "40px", borderRadius: "8px", width: "90%" }}
                variant="contained"
                color="primary"
                onClick={handlEmail}
              >
                Send Mail
              </Button>
            ) : (
              <Button
                sx={{ marginTop: "40px", borderRadius: "8px", width: "90%" }}
                variant="contained"
                color="primary"
                onClick={sendAllActiveTeachers}
              >
                Send Mail to all
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item mt={5} xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            Active Teachers
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{
              margin: "12px",
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "green",
                boxShadow: "none",
              },
            }}
            onClick={emailBulkHandler}
          >
            Send Email to all
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Course</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Resume</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activeteachers.map(
                  (
                    { id, name, email, phone, course, country, resume },
                    item
                  ) => (
                    <TableRow
                      key={item}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {name}
                      </TableCell>
                      <TableCell aalign="center">{email}</TableCell>
                      <TableCell align="center">{phone}</TableCell>
                      <TableCell align="center">{course}</TableCell>
                      <TableCell align="center">{country}</TableCell>
                      <TableCell align="left">
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            margin: "0px",
                            backgroundColor: "green",
                            "&:hover": {
                              backgroundColor: "green",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => {
                            window.location.href = `${resume}`;
                          }}
                        >
                          Download
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            padding: "5px",
                            backgroundColor: "green",
                            "&:hover": {
                              backgroundColor: "green",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => emailButtonHandler(email)}
                        >
                          Email
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            margin: "15px",
                            backgroundColor: "red",
                            "&:hover": {
                              backgroundColor: "red",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => deleteHandleActiveteacher(id)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={500} onClose={handleClose}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <Snackbar open={successopen} autoHideDuration={500}>
        <Alert severity="success">{SuccessMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default ManageTeachers;
