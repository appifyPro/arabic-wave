import { Router } from "express";
import { dbConnection } from "../index.js";
export const blogRouter = Router();
import { verifyToken } from "../middleware/verifyToken.js";
blogRouter.get("/blogs", (req, res) => {
  const query = "SELECT * FROM blogs";

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
blogRouter.get("/blogs/:id", (req, res) => {
  const id = req.params.id; // Get the blog ID from the URL parameter
  const query = "SELECT * FROM blogs WHERE id = ?"; // Query to fetch a specific blog by its ID

  dbConnection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error fetching data:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Blog not found." });
    }

    return res.status(200).json({ data: results[0] }); // Assuming the query returns a single result
  });
});

blogRouter.post("/blogs", verifyToken, (req, res) => {
  const { header, paragraph, details } = req.body;
  const query = "INSERT INTO blogs (header, paragraph,details) VALUES (?, ?,?)";

  dbConnection.query(query, [header, paragraph, details], (error, results) => {
    if (error) {
      console.error("Error Creating Blogs.", error);
      return res.status(500).json({ error: "Error Creating Blogs.." });
    }

    return res.json({ message: "Blog created successfully." });
  });
});
blogRouter.delete("/blog/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM blogs WHERE id = ?";

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
