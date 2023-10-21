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

const ManageStudent = () => {
  const [user, setUser] = useState([]);
  const [tajweeduser, setTajweedUser] = useState([]);
  const [activestudents, setActivestudents] = useState([]);
  const [activeTajweed, setActiveTajweed] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [emaildisplay, setEmaildisplay] = useState(false);
  const [singlemail, setSinglemail] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const adminToken = localStorage.getItem("admin");
  const [emaildata, setEmaildata] = useState({
    email: "",
    emailTitle: "",
    emailMessage: "",
  });

  const deleteHandletrial = async (id) => {
    try {
      const response = await axios.delete(`${BURL}/booktrial/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.message); // Message from the server
      setSuccessMessage("Student Deleted!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (error) {
      console.error("Error deleting record: ", error);
      setErrorMessage("Error Deleteting record");
      setOpen(true);
    }
  };
  const deleteHandleActivetrial = async (id) => {
    try {
      const response = await axios.delete(`${BURL}/activebooktrial/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.message); // Message from the server
      setSuccessMessage("Student Deleted!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (error) {
      console.error("Error deleting record: ", error);
      setErrorMessage("Error Deleteting record");
      setOpen(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const emailButtonHandler = (emailm) => {
    setEmaildisplay(true);
    setEmaildata({ ...emaildata, email: emailm });
    setSinglemail(true);
  };
  const emailBulkHandler = () => {
    setSinglemail(false);
    setCurrentSection("freetrial");
    setEmaildisplay(true);
  };
  const emailBulkHandler2 = () => {
    setSinglemail(false);
    setCurrentSection("tajweed");
    setEmaildisplay(true);
  };
  const deleteHandletajweed = async (id, audio) => {
    try {
      const response = await axios.delete(`${BURL}/tajweed/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.message); // Message from the server
      setSuccessMessage("Student Deleted!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (error) {
      console.error("Error deleting record: ", error);
      setErrorMessage("Error deleting record!");
      setOpen(true);
    }
  };
  const deleteHandleActivetajweed = async (id) => {
    try {
      const response = await axios.delete(`${BURL}/activetajweed/${id}`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data.message); // Message from the server
      setSuccessMessage("Student Deleted!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (error) {
      console.error("Error deleting record: ", error);
      setErrorMessage("Error deleting record!");
      setOpen(true);
    }
  };
  const activetrialHandle = async (
    id,
    name,
    email,
    phone,
    course,
    country,
    address
  ) => {
    // console.log(id);
    if (!id || id === "") return;
    else {
      try {
        const data = { id, name, email, phone, course, country, address };
        // console.log(data);
        const response = await axios.post(`${BURL}/activatetrial`, data, {
          headers: {
            Authorization: `${adminToken}`,
          },
        });

        // console.log(response.data);
        setSuccessMessage("Student Activated!");
        setSuccessOpen(true);
        setTimeout(() => {
          setSuccessOpen(false);
        }, 3000);
        setRefresh(true);
      } catch (err) {
        setErrorMessage("Error in Activation!");
        setOpen(true);
        console.log(err);
      }
    }
  };
  const activateTajweedhandle = async (
    id,
    name,
    email,
    phone,
    country,
    audio
  ) => {
    try {
      const data = { id, name, email, phone, country, audio };
      // console.log(data);
      const response = await axios.post(`${BURL}/activatetajweed`, data, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response.data);
      setSuccessMessage("Student Activated!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (err) {
      setErrorMessage("Error in Activation!");
      setOpen(true);
      console.log(err);
    }
  };
  const handlEmail = async () => {
    if (!emaildata.emailTitle) {
      console.log("Please Enter Email Title");

      return; // Return early if the title is missing
    }

    if (!emaildata.emailMessage) {
      console.log("Please Enter Description.");
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
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`${BURL}/allbooktrialusers`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setUser(response.data.users);
      const response2 = await axios.get(`${BURL}/alltajweed`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setTajweedUser(response2.data.data);
      const response3 = await axios.get(`${BURL}/allactivetrial`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setActivestudents(response3.data.data);
      const response4 = await axios.get(`${BURL}/allactivetajweed`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setActiveTajweed(response4.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
    setRefresh(false);
  }, [refresh]);
  const sendAllTrialUser = async () => {
    try {
      const response = await axios.post(`${BURL}/sendalltrialmail`, emaildata, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      setSuccessMessage("Email Sent to all Trial Students Successfully!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);
      setRefresh(true);
    } catch (err) {
      console.log(err);
      setErrorMessage("Error in Email Sending!");
      setOpen(true);
    }
  };
  const sendAllTajweedUser = async () => {
    try {
      const response = await axios.post(
        `${BURL}/sendalltajweedmail`,
        emaildata,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      setSuccessMessage("Email Sent to all Tajweed Students Successfully!");
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 3000);

      setRefresh(true);
    } catch (err) {
      console.log(err);
      setErrorMessage("Error in Email Sending!");
      setOpen(true);
    }
  };
  return (
    <Box
      sx={{
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
            Manage Student
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
            Student Requested
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            From Free Trial
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
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map(
                  (
                    { id, name, email, phone, course, country, address },
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
                      <TableCell align="center">{address}</TableCell>
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
                            activetrialHandle(
                              id,
                              name,
                              email,
                              phone,
                              course,
                              country,
                              address
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
                          onClick={() => deleteHandletrial(id)}
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
        <Grid item mt={5} xs={12}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            TajweedUl Quraan
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
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Audio</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tajweeduser.map(
                  ({ id, name, email, phone, country, audio }, item) => (
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
                            window.location.href = `${audio}`; // Downloads the audio file
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
                            activateTajweedhandle(
                              id,
                              name,
                              email,
                              phone,
                              country,
                              audio
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
                          onClick={() => deleteHandletajweed(id)}
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
                onClick={
                  currentSection === "tajweed"
                    ? sendAllTajweedUser
                    : sendAllTrialUser
                }
              >
                Send Mail to all
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item mt={5} xs={12}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            Active Students
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            From Free Trial
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
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Course</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activestudents.map(
                  ({ id, name, email, phone, course, address }, item) => (
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
                          onClick={() => emailButtonHandler(email)}
                        >
                          Send Email
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            margin: "12px",
                            backgroundColor: "red",
                            "&:hover": {
                              backgroundColor: "red",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => deleteHandleActivetrial(id)}
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
        <Grid item mt={5} xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontFamily: "roboto",
              marginBottom: "16px",
              fontWeight: "bolder",
            }}
          >
            From Tajweed
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
            onClick={emailBulkHandler2}
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
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Audio</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activeTajweed.map(
                  ({ id, name, email, phone, country, audio }, item) => (
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
                            window.location.href = `${audio}`; // Downloads the audio file
                          }}
                        >
                          Download
                        </Button>
                      </TableCell>
                      <TableCell align="right">
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
                          onClick={() => emailButtonHandler(email)}
                        >
                          Send Email
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            margin: "12px",
                            backgroundColor: "red",
                            "&:hover": {
                              backgroundColor: "red",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => deleteHandleActivetajweed(id)}
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

export default ManageStudent;
