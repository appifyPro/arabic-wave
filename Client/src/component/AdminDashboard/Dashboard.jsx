import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BURL } from "../../Utils";

const Dashboard = () => {
  const [maxData, setMaxData] = useState({
    max_user: 0,
    max_tuser: 0,
    max_tajweedapp: 0,
    max_trialapp: 0,
    max_teachapp: 0,
    max_activetrialapp: 0,
    max_activetajweedapp: 0,
    activeTeachers: 0,
  });

  const getData = async () => {
    const adminToken = localStorage.getItem("admin");
    try {
      const response = await axios.get(`${BURL}/maxtajweedApplicants`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response2 = await axios.get(`${BURL}/maxtrialApplicants`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response3 = await axios.get(`${BURL}/maxteachApplicants`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response4 = await axios.get(`${BURL}/maxactivetrialapplicants`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response5 = await axios.get(`${BURL}/maxactivetajweedapplicants`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response6 = await axios.get(`${BURL}/maxactiveteachers`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response7 = await axios.get(`${BURL}/maxusers`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      const response8 = await axios.get(`${BURL}/maxtusers`, {
        headers: {
          Authorization: `${adminToken}`,
        },
      });
      // console.log(response5.data[0].Total_ActiveTajweed_Applicants);
      setMaxData({
        ...maxData,
        max_tajweedapp: response.data[0].Total_Tajweed_Applicants,
        max_trialapp: response2.data[0].Total_Trial_Applicants,
        max_teachapp: response3.data[0].Total_Teach_Applicants,
        max_activetrialapp: response4.data[0].Total_ActiveTrial_Applicants,
        max_activetajweedapp: response5.data[0].Total_ActiveTajweed_Applicants,
        activeTeachers: response6.data[0].Total_ActiveTeacher_Applicants,
        max_user: response7.data[0].Total_users,
        max_tuser: response8.data[0].Total_tusers,
      });
    } catch (err) {
      console.log(err);
      alert("Error Fetching Data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const statistics = [
    { category: "Total Users", total: maxData.max_user },
    { category: "Total thirdparty Users", total: maxData.max_tuser },
    { category: "Tajweed Applicants", total: maxData.max_tajweedapp },
    { category: "Free Trial Applicants", total: maxData.max_trialapp },
    { category: "Teachers applied", total: maxData.max_teachapp },
    { category: "Active Trial Applicants", total: maxData.max_activetrialapp },
    {
      category: "Active Tajweed Applicants",
      total: maxData.max_activetajweedapp,
    },
    { category: "Active Teachers", total: maxData.activeTeachers },
    // ...and so on
  ];

  return (
    <Box
      mt={10}
      sx={{
        // marginLeft: { xs: "2px", md: "2px" },
        backgroundColor: "#e0f2f1",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Grid container spacing={2}>
        {statistics.map((statistic) => (
          <Grid item key={statistic.category} xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "16px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                {statistic.category}
              </Typography>
              <Typography variant="body1">Total: {statistic.total}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
