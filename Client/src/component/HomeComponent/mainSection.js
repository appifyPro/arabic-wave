import { Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
// import "./homepage.css";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MainSection() {
  const age1 = [8, 9, 10, 11, 12];
  const age2 = [13, 14, 15, 16, 17];
  const age3 = [18, 19, 20, 21, 22];
  const [loginShow, setLoginshow] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      setLoginshow(true);
      setOpen(true);
    } else {
      setLoginshow(false);
      setOpen(false);
    }
  }, []);
  return (
    <Box
      pt={7}
      sx={{
        backgroundColor: "black",
        backgroundImage: "url(/pics/curriculum-bg1.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "fitContent",
        width: "100%",
      }}
    >
      <Box sx={{ display: open ? "block" : "none" }}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Login User! Now you can easily ContactUs.Thank You.
        </Alert>
      </Box>
      <Box pt={12}>
        {" "}
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <Grid
              mt={5}
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                width={350}
                height={300}
                sx={{
                  // padding: "2em",
                  borderRadius: "5px",
                  paddingRight: { xs: "0px", md: "10px" },
                  // marginRight: "40px",
                  backgroundColor: "rgba(0, 0, 0, 0.681)",
                  backdropFilter: "blur(5.8px)",
                  color: "var(--whiteColor--)",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                <Typography
                  pt={2}
                  mb={3}
                  variant="h5"
                  sx={{ textAlign: "center", fontFamily: "Mooli" }}
                >
                  Book Your Free Class
                </Typography>
                <ButtonGroup
                  sx={{ marginLeft: { xs: "0px", md: "20px" } }}
                  variant="outlined"
                >
                  {age1.map((item, i) => (
                    <Button
                      key={i}
                      size="small"
                      sx={{
                        color: "white",
                        border: "1px solid #f49d1a",
                        width: "60px",
                        "&:hover": {
                          border: "1px solid #f49d1a",
                        },
                      }}
                    >
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        to="/bookfreetrail"
                      >
                        Age {item}
                      </Link>
                    </Button>
                  ))}
                </ButtonGroup>
                <ButtonGroup
                  sx={{ marginLeft: { xs: "0px", md: "20px" } }}
                  variant="outlined"
                >
                  {age2.map((item, i) => (
                    <Button
                      key={i}
                      sx={{
                        color: "white",
                        border: "1px solid #f49d1a",
                        width: "60px",
                        "&:hover": {
                          border: "1px solid #f49d1a",
                        },
                      }}
                      size="small"
                    >
                      {i === 4 ? (
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/bookfreetrail"
                        >
                          Above {">"} {item}
                        </Link>
                      ) : (
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/bookfreetrail"
                        >
                          Age {item}
                        </Link>
                      )}
                    </Button>
                  ))}
                </ButtonGroup>
                {/* <ButtonGroup
                  sx={{ marginLeft: { xs: "0px", md: "20px" } }}
                  variant="outlined"
                >
                  {age3.map((item, i) => (
                    <Button
                      key={i}
                      sx={{
                        color: "white",
                        border: "1px solid #f49d1a",
                        width: "60px",
                        "&:hover": {
                          border: "1px solid #f49d1a",
                        },
                      }}
                      size="small"
                    >
                      {i === 4 ? (
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/bookfreetrail"
                        >
                          Above {">"} {item}
                        </Link>
                      ) : (
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/bookfreetrail"
                        >
                          Age {item}
                        </Link>
                      )}
                    </Button>
                  ))}
                </ButtonGroup> */}
                <Box mt={5} sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#f49d1a",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#f49d1a",
                      },
                    }}
                  >
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/bookfreetrail"
                    >
                      <Typography>Book a Trial</Typography>
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  padding: "2em",
                  marginLeft: { xs: "0px", md: "10px" },
                  borderRadius: "5px",
                  backgroundColor: "rgba(0, 0, 0, 0.681)",
                  backdropFilter: "blur(2.8px)",
                  color: "var(--whiteColor--)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontsize: "21px",
                    fontFamily: "Mooli",
                  }}
                >
                  Recite the Quran as it revealed
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginTop: "10px", fontFamily: "Mooli" }}
                >
                  Discover 24/7 Quran lessons for all ages with our dedicated
                  instructors. Master the Quran online, from beginners to
                  advanced levels.
                </Typography>
                <br />
                <br />
                <Typography variant="h6" sx={{ fontFamily: "Mooli" }}>
                  Uthman-Bin-Affan has narrated that the Prophet Muhammad (Peace
                  Be Upon Him) said:
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: "Mooli" }}>
                  (خيركم من تعلم القرآن وعلمه)
                </Typography>
                <Typography variant="h6" mt={2} sx={{ fontFamily: "Mooli" }}>
                  “The best among you are those people who teach and learn the
                  Qur'an” (Sahih-Al-Bukhari:5028)
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
