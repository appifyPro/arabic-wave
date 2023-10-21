import { Router } from "express";
import { dbConnection } from "../index.js";
import { verifyToken } from "../middleware/index.js";
import nodemailer from "nodemailer";
import {
  ADMIN_EMAIL,
  ADMIN_EMAILPASSWORD,
  API_KEY,
  API_SECRET,
  CLOUD_NAME,
} from "../config/app.js";
import { v2 as cloudinary } from "cloudinary";

export const joinRouter = Router();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: "465",
  secure: true,
  auth: {
    user: ADMIN_EMAIL,
    pass: ADMIN_EMAILPASSWORD,
  },
});
cloudinary.config({
  cloud_name: "djbaissil",
  api_key: "769493588899384",
  api_secret: "LPpLBxYabo3z9fu9ypmidHjWnRI",
});

// const transporter = nodemailer.createTransport({
//   service: "gmail", // e.g., 'gmail'
//   auth: {
//     user: "support@arabicwave.com",
//     pass: "Arabic@123",
//   },
// });

// Function to send an email
const sendEmail = async (toEmail, emailTitle, emailMessage) => {
  const mailOptions = {
    from: ADMIN_EMAIL, // Sender's email address
    to: toEmail, // Recipient's email address
    subject: emailTitle, // Subject of the email
    // text: emailMessage, // Plain text body
    html: emailMessage, // HTML content (optional)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return true; // Return true if email is sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Return false if there's an error sending email
  }
};
joinRouter.post("/sendmail", verifyToken, async (req, res) => {
  const { email, emailTitle, emailMessage } = req.body;

  // Send the email
  const emailSent = await sendEmail(email, emailTitle, emailMessage);

  if (emailSent) {
    res.status(200).json({ message: "Email sent successfully." });
  } else {
    res.status(500).json({ message: "Failed to send email." });
  }
});
joinRouter.post("/jointeacher", async (req, res) => {
  const { name, email, phone, country, course } = req.body;
  const resume = req.files.resume;
  try {
    const result = await cloudinary.uploader.upload(resume.tempFilePath, {
      resource_type: "auto",
    });

    if (!result) {
      return res.status(500).json({ message: "Something Went Wrong." });
    }
    const resumePath = result.url;
    // Insert data into your SQL database
    const response = dbConnection.query(
      "INSERT INTO join_teacher (name, email, phone, country, course, resume) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, phone, country, course, resumePath],
      async (err, result) => {
        if (!err) {
          // Successful insertion
          const emailSent = await sendEmail(
            email,
            "Your Application at Arabic Wave Academy",
            `<body><p>Dear ${name},</p><p>السلام عليكم ورحمة الله وبركاته</p><p>Thank you for applying to join Arabic Wave Academy. We've received your application and are reviewing it carefully. If your qualifications match our current needs, we'll be in touch soon to discuss next steps.</p><p>In the meantime, explore our mission and values on our <a href="https://www.arabicwave.com">website</a>. We're dedicated to empowering individuals through Quranic education.</p><p>If you have questions, feel free to reach out to our HR team at <a href="mailto:hr@arabicwave.com">hr@arabicwave.com</a></p><p>جزاك الله خيرا وأحسن الجزاء</p><p>Best regards,<br>Arabic Wave Academy Team</p></body>`
          );
          if (emailSent) {
            console.log(emailSent);
            return res.status(200).json({ message: "Data sent successfully." });
          } else {
            return res.status(301).json({ message: "Something went wrong" });
          }
        } else {
          console.log("Error", err);
          res.status(404).json({
            message: "error",
          });
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

joinRouter.post("/jointajweed", async (req, res) => {
  const { name, email, phone, country } = req.body;
  const audio = req.files.audio;
  try {
    // Insert data into your SQL database
    const result = await cloudinary.uploader.upload(audio.tempFilePath, {
      resource_type: "auto",
    });

    if (!result) {
      return res.status(500).json({ message: "Something Went Wrong." });
    }
    const audioPath = result.url;
    const response = dbConnection.query(
      "INSERT INTO join_tajweed (name, email, phone, country, audio) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, country, audioPath],
      async (err, result) => {
        if (!err) {
          // Successful insertion
          const emailSent = await sendEmail(
            email,
            "Confirmation: Your Tajweed-Ul-Quran Evaluation Request",
            `<body><p>السلام عليكم ورحمة الله وبركاته</p><p>Dear ${name},</p><p>We hope this message finds you in the best of health and high spirits.</p><p>الحمد لله We are delighted to inform you that we have received your request for a Free Evaluation of your Tajweed-Ul-Quran skills, along with your uploaded recorded audio. Thank you for taking this important step in your journey to improve your recitation.</p><p>Our dedicated team is already hard at work, meticulously evaluating your submission. Within the coming days, you can expect a comprehensive assessment of your skills, along with valuable feedback to guide your improvement.</p><p>In the meantime, if you have any questions or need further assistance, please feel free to reach out to us at <p>care@arabicwave.com</p>.</p><p>We appreciate your commitment to perfecting your Tajweed, and we are excited to be a part of your progress.</p><p>Stay tuned for your evaluation results, and let's continue this journey together.</p><p>جزاك الله خيرا وأحسن الجزاء</p><p>Warm regards,<br>Arabic Wave Academy Team<br><p>care@arabicwave.com</p></p></body>`
          );
          if (emailSent) {
            console.log(emailSent);
            return res.status(200).json({ message: "Data sent successfully." });
          } else {
            return res.status(301).json({ message: "Something went wrong" });
          }
        } else {
          console.log("Error", err);
          res.status(404).json({
            message: "error",
          });
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});
joinRouter.post("/booktrial", async (req, res) => {
  const { name, email, phone, country, course, address } = req.body;
  try {
    // Insert data into your SQL database
    const response = dbConnection.query(
      "INSERT INTO booktrial (name, email,course, phone, country, address) VALUES (?, ?, ?,?, ?, ?)",
      [name, email, course, phone, country, address],
      async (err, result) => {
        if (!err) {
          // Successful insertion
          const emailSent = await sendEmail(
            email,
            "Your Free Trial Class Booking - Arabic Wave Academy",
            `<body><p> السلام عليكم ورحمة الله وبركاته</p><p>Dear ${name},</p> <p>Thank you for your interest in Arabic Wave Academy's Tajweed Ul Quran Education using the Special Shahidi Qaida. We are thrilled that you've decided to explore our free trial class.</p><p>Here's what to expect next:</p><ol><li>إن شاء الله Within the next 24 hours, one of our admission specialists will reach out to you via email, messages, or WhatsApp to schedule your free trial class.</li><li>The session duration will be approximately 30 to 40 minutes, allowing you to experience our teaching approach and curriculum.</li><li>You will receive a Microsoft Teams OR Zoom Meeting link via email or WhatsApp to join your free trial class.</li><li>In the rare event of any delays or if you have any questions, please don't hesitate to reply to this email or reach out to our support team at <p>care@arabicwave.com</p></li></ol><p>We can't wait to have you with us and assist you on your journey to mastering Tajweed Ul Quran with our Special Shahidi Qaida in detailed curriculum.</p><p>Thank you for choosing Arabic Wave Academy. We look forward to meeting you soon!</p><p> جزاك الله خيرا وأحسن الجزاء</p><p>Best regards,<br>Admission Team<br>Arabic Wave Academy<br><p>care@arabicwave.com</p></p></body>`
          );
          if (emailSent) {
            console.log(emailSent);
            return res.status(200).json({ message: "Data sent successfully." });
          } else {
            return res.status(301).json({ message: "Something went wrong" });
          }
        } else {
          console.log("Error", err);
          res.status(404).json({
            message: "error",
          });
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});
// joinRouter.get("/getusers", (req, res) => {
//   dbConnection.query(
//     "SELECT Max(id) AS Students FROM  Users",
//     (error, results) => {
//       if (!error) {
//         return res.send({ data: results });
//       } else {
//         console.log("error", error);
//       }
//     }
//   );
// });
// joinRouter.get("/get", (req, res) => {
//   dbConnection.query(
//     "SELECT Max(id) AS Students FROM  Users",
//     (error, results) => {
//       if (!error) {
//         return res.send({ data: results });
//       } else {
//         console.log("error", error);
//       }
//     }
//   );
// });

joinRouter.get("/allbooktrialusers", verifyToken, (req, res) => {
  const query = "SELECT * FROM booktrial";
  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching users." });
    }
    return res.status(200).json({ users: results });
  });
});
joinRouter.get("/alltajweed", verifyToken, (req, res) => {
  const query = "SELECT * FROM join_tajweed";
  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }
    return res.status(200).json({ data: results });
  });
});
joinRouter.get("/allactivetrial", verifyToken, (req, res) => {
  const query = "SELECT * FROM Activebooktrial";

  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }

    return res.status(200).json({ data: results });
  });
});
joinRouter.get("/allactivetajweed", verifyToken, (req, res) => {
  const query = "SELECT * FROM activetajweed";

  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }

    return res.status(200).json({ data: results });
  });
});
joinRouter.get("/alljointeahcers", verifyToken, (req, res) => {
  const query = "SELECT * FROM join_teacher";

  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }

    return res.status(200).json({ data: results });
  });
});
joinRouter.get("/allactiveteahcers", verifyToken, (req, res) => {
  const query = "SELECT * FROM activeteacher";

  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }

    return res.status(200).json({ data: results });
  });
});
joinRouter.post("/activatetrial", verifyToken, (req, res) => {
  const { id, name, email, phone, country, course, address } = req.body;

  try {
    // Insert data into the Activebooktrial table
    dbConnection.query(
      "INSERT INTO Activebooktrial (name, email, course, phone, country, address) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, course, phone, country, address],
      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res
            .status(500)
            .json({ message: "An error occurred while inserting data." });
        }

        // Delete data from the free_trial table
        const deleteQuery = "DELETE FROM booktrial WHERE id = ?";
        dbConnection.query(deleteQuery, [id], (deleteErr, deleteResult) => {
          if (deleteErr) {
            console.log("Error:", deleteErr);
            return res
              .status(500)
              .json({ message: "An error occurred while deleting data." });
          }

          // Successful insertion and deletion
          res
            .status(200)
            .json({ message: "Data sent and deleted successfully." });
        });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});

joinRouter.post("/activatetajweed", verifyToken, async (req, res) => {
  const { id, name, email, phone, country, audio } = req.body;
  // const audioPath = req.file ? req.file.path : null;

  try {
    // Insert data into the activetajweed table
    dbConnection.query(
      "INSERT INTO activetajweed (name, email, phone, country, audio) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, country, audio],
      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res
            .status(500)
            .json({ message: "An error occurred while inserting data." });
        }

        // Delete data from the tajweed_form table
        const deleteQuery = "DELETE FROM join_tajweed WHERE id = ?";
        dbConnection.query(deleteQuery, [id], (deleteErr, deleteResult) => {
          if (deleteErr) {
            console.log("Error:", deleteErr);
            return res
              .status(500)
              .json({ message: "An error occurred while deleting data." });
          }

          // Successful insertion and deletion
          res
            .status(200)
            .json({ message: "Data saved and deleted successfully." });
        });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});
joinRouter.post("/activateteacher", verifyToken, (req, res) => {
  const { id, name, email, phone, country, course, resume } = req.body;
  // const resumePath = req.file ? req.file.path : null;

  try {
    // Insert data into the Activebooktrial table
    dbConnection.query(
      "INSERT INTO activeteacher (name, email, course, phone, country, resume) VALUES (?, ?, ?, ?, ?, ?)",
      [name, email, course, phone, country, resume],
      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res
            .status(500)
            .json({ message: "An error occurred while inserting data." });
        }

        // Delete data from the free_trial table
        const deleteQuery = "DELETE FROM join_teacher WHERE id = ?";
        dbConnection.query(deleteQuery, [id], (deleteErr, deleteResult) => {
          if (deleteErr) {
            console.log("Error:", deleteErr);
            return res
              .status(500)
              .json({ message: "An error occurred while deleting data." });
          }

          // Successful insertion and deletion
          res
            .status(200)
            .json({ message: "Data sent and deleted successfully." });
        });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred." });
  }
});
joinRouter.delete("/booktrial/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM booktrial WHERE id = ?";

  dbConnection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Error deleting record: ", err);
      res.status(500).json({ error: "Error deleting record" });
    } else {
      console.log("Record deleted successfully");
      res.json({ message: "Record deleted successfully" });
    }
  });
});
joinRouter.delete("/activebooktrial/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM Activebooktrial WHERE id = ?";

  dbConnection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Error deleting record: ", err);
      res.status(500).json({ error: "Error deleting record" });
    } else {
      console.log("Record deleted successfully");
      res.json({ message: "Record deleted successfully" });
    }
  });
});
joinRouter.delete("/tajweed/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM join_tajweed WHERE id = ?";

  dbConnection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Error deleting record: ", err);
      res.status(500).json({ error: "Error deleting record" });
    } else {
      console.log("Record deleted successfully");
      res.json({ message: "Record deleted successfully" });
    }
  });
});
joinRouter.delete("/activetajweed/:id", verifyToken, async (req, res) => {
  const { id } = req.params;

  // First, retrieve the audioPath from the database based on the id
  const selectQuery = "SELECT audio FROM activetajweed WHERE id = ?";
  dbConnection.query(selectQuery, [id], async (selectError, selectResults) => {
    if (selectError) {
      console.error(
        "Error fetching audioPath from the database: ",
        selectError
      );
      return res.status(500).json({ error: "Error fetching audioPath" });
    }

    if (selectResults.length === 0) {
      console.error("Audio record not found");
      return res.status(404).json({ error: "Audio record not found" });
    }

    const audioPath = selectResults[0].audio;

    if (!audioPath) {
      console.error("Invalid audioPath:", audioPath);
      return res.status(400).json({ error: "Invalid audioPath" });
    }

    // Delete the audio from Cloudinary
    const urlArray = audioPath.split("/");
    const audiourl = urlArray[urlArray.length - 1];
    const audioName = audiourl.split(".")[0];
    // console.log(audioName);

    const cloudinaryResult = await cloudinary.uploader.destroy(audioName);

    if (cloudinaryResult.result !== "ok") {
      console.error("Error deleting audio from Cloudinary:", cloudinaryResult);
    }

    // Delete the record from the database
    const deleteQuery = "DELETE FROM activetajweed WHERE id = ?";
    dbConnection.query(deleteQuery, [id], (deleteError, deleteResult) => {
      if (deleteError) {
        console.error("Error deleting record from the database: ", deleteError);
        res.status(500).json({ error: "Error deleting record" });
      } else {
        console.log("Record deleted successfully");
        res.json({ message: "Record deleted successfully" });
      }
    });
  });
});

joinRouter.delete("/teacher/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM join_teacher WHERE id = ?";

  dbConnection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Error deleting record: ", err);
      res.status(500).json({ error: "Error deleting record" });
    } else {
      console.log("Record deleted successfully");
      res.json({ message: "Record deleted successfully" });
    }
  });
});
joinRouter.delete("/activeteacher/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM activeteacher WHERE id = ?";

  dbConnection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Error deleting record: ", err);
      res.status(500).json({ error: "Error deleting record" });
    } else {
      console.log("Record deleted successfully");
      res.json({ message: "Record deleted successfully" });
    }
  });
});

joinRouter.post("/sendalltrialmail", verifyToken, (req, res) => {
  // Fetch email addresses from the database
  dbConnection.query("SELECT email FROM Activebooktrial", (error, results) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching emails" });
    }

    // Extract email addresses from the database response
    const emails = results.map((row) => row.email);

    // Retrieve email data from request body
    const { emailTitle, emailMessage } = req.body;

    // Loop through the list of email addresses and send emails
    emails.forEach((email) => {
      const mailOptions = {
        from: ADMIN_EMAIL,
        to: email,
        subject: emailTitle,
        text: emailMessage,
      };

      // Send email
      transporter.sendMail(mailOptions, (mailError) => {
        if (mailError) {
          console.error(mailError);
        } else {
          console.log(`Email sent to ${email}`);
        }
      });
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  });
});

joinRouter.post("/sendalltajweedmail", verifyToken, (req, res) => {
  // Fetch email addresses from the database
  dbConnection.query("SELECT email FROM activetajweed", (error, results) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching emails" });
    }

    const emails = results.map((row) => row.email);

    const { emailTitle, emailMessage } = req.body;

    emails.forEach((email) => {
      const mailOptions = {
        from: ADMIN_EMAIL,
        to: email,
        subject: emailTitle,
        text: emailMessage,
      };

      // Send email
      transporter.sendMail(mailOptions, (mailError) => {
        if (mailError) {
          console.error(mailError);
        } else {
          console.log(`Email sent to ${email}`);
        }
      });
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  });
});
joinRouter.post("/sendallteachersmail", verifyToken, (req, res) => {
  // Fetch email addresses from the database
  dbConnection.query("SELECT email FROM activeteacher", (error, results) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching emails" });
    }

    // Extract email addresses from the database response
    const emails = results.map((row) => row.email);

    // Retrieve email data from request body
    const { emailTitle, emailMessage } = req.body;

    // Loop through the list of email addresses and send emails
    emails.forEach((email) => {
      const mailOptions = {
        from: ADMIN_EMAIL,
        to: email,
        subject: emailTitle,
        text: emailMessage,
      };

      // Send email
      transporter.sendMail(mailOptions, (mailError) => {
        if (mailError) {
          console.error(mailError);
        } else {
          console.log(`Email sent to ${email}`);
        }
      });
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  });
});
