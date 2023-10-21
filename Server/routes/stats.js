import { Router } from "express";
import { dbConnection } from "../index.js";
import { verifyToken } from "../middleware/verifyToken.js";
export const statsRouter = Router();
statsRouter.get("/maxtajweedApplicants", verifyToken, (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_Tajweed_Applicants FROM join_tajweed",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxtrialApplicants", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_Trial_Applicants FROM booktrial",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxteachApplicants", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_Teach_Applicants FROM join_teacher",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxactivetrialapplicants", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_ActiveTrial_Applicants FROM Activebooktrial",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxactivetajweedapplicants", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_ActiveTajweed_Applicants FROM activetajweed",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxactiveteachers", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_ActiveTeacher_Applicants FROM activeteacher",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxusers", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_users FROM Users",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
statsRouter.get("/maxtusers", (req, res) => {
  dbConnection.query(
    "SELECT COUNT(id) AS Total_tusers FROM thirdpartyUsers",
    (error, results) => {
      if (!error) {
        return res.send(results);
      } else {
        console.log("error", error);
      }
    }
  );
});
