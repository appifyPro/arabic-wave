import {
  Alert,
  Box,
  Button,
  Container,
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
import React, { useEffect, useState, useRef } from "react";
import { BURL } from "../../Utils";
import JoditEditor from "jodit-react";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [successopen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");
  const editor = useRef(null);

  const [newblogs, setNewBlogs] = useState({
    header: "",
    paragraph: "",
    details: "",
  });
  const adminToken = localStorage.getItem("admin");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getBlogs();
    setRefresh(false);
  }, [refresh]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const getBlogs = async () => {
    try {
      const response = await axios.get(`${BURL}/blogs`);
      //   console.log(response.data.data);
      setBlogs(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteBlogs = async (id) => {
    try {
      const response = await axios.delete(`${BURL}/blog/${id}`, {
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
  const newBlogsHandler = async () => {
    if (!newblogs.header) {
      alert("Please enter the title");
    } else if (!newblogs.paragraph) {
      alert("please add some text");
    } else if (!newblogs.details) {
      alert("please add some Details Text");
    } else {
      // console.log(newblogs.details);
      // newblogs.details = editor.value;
      try {
        const response = await axios.post(`${BURL}/blogs`, newblogs, {
          headers: {
            Authorization: `${adminToken}`,
          },
        });
        // console.log(response.data);
        setSuccessMessage("Blog Added Successfully!");
        setSuccessOpen(true);
        setTimeout(() => {
          setSuccessOpen(false);
        }, 3000);
        setNewBlogs({ header: "", paragraph: "", details: "" });
        setRefresh(true);
      } catch (err) {
        setErrorMessage("Error in Adding Blog!");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
        console.error(err);
      }
    }
  };
  return (
    <Box
      width="100%"
      sx={{
        paddingLeft: { xs: "2px", md: "29px" },
        backgroundColor: "#e0f2f1",
        // height: 100000,
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "roboto",
                marginBottom: "16px",
                fontWeight: "bolder",
              }}
            >
              Blogs
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="form">
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Blog Title:
              </Typography>
              <TextField
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                label="title"
                sx={{ marginTop: "10px", width: "90%" }}
                value={newblogs.header}
                onChange={(e) =>
                  setNewBlogs({
                    ...newblogs,
                    header: e.target.value,
                  })
                }
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
              >
                Enter your Blog Paragraph:
              </Typography>
              <TextField
                label="Paragraph"
                type="text"
                multiline
                fullWidth
                rows={15}
                InputProps={{
                  sx: {
                    borderRadius: "12px",
                  },
                }}
                sx={{ marginTop: "10px", width: "90%" }}
                value={newblogs.paragraph}
                onChange={(e) =>
                  setNewBlogs({
                    ...newblogs,
                    paragraph: e.target.value,
                  })
                }
              />
              <Box mt={10} sx={{ width: "90%" }}>
                <Typography
                  variant="body1"
                  mb={3}
                  sx={{ marginTop: "20px", fontFamily: "Roboto Slab" }}
                >
                  Enter your Blog Details:
                </Typography>
                <JoditEditor
                  ref={editor}
                  value={newblogs.details}
                  // config={config}
                  // tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) =>
                    setNewBlogs({ ...newblogs, details: newContent })
                  }
                  onChange={(newContent) =>
                    setNewBlogs({ ...newblogs, details: newContent })
                  }
                />
              </Box>
              {/* <Box>{formattedContent}</Box> */}
              <Button
                size="small"
                variant="contained"
                sx={{
                  // margin: "12px",
                  marginTop: "12px",
                  backgroundColor: "green",
                  width: "90%",
                  "&:hover": {
                    backgroundColor: "green",
                    boxShadow: "none",
                  },
                }}
                onClick={newBlogsHandler}
              >
                Add Blog
              </Button>
            </Box>
          </Grid>
          <Grid mt={10} item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "roboto",
                marginBottom: "16px",
                fontWeight: "bolder",
              }}
            >
              Added Blogs
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
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Paragraph</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {blogs.map(({ id, header, paragraph }, item) => (
                    <TableRow
                      key={item}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">{header}</TableCell>
                      <TableCell align="center">{paragraph}</TableCell>
                      <TableCell align="center">
                        {" "}
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
                          onClick={() => deleteBlogs(id)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={open} autoHideDuration={500} onClose={handleClose}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <Snackbar open={successopen} autoHideDuration={500}>
        <Alert severity="success">{SuccessMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Blogs;
