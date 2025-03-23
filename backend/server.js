const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
require("dotenv").config(); // If using environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON request body

// ✅ Database Connection
const db = mysql.createConnection({
  host: "localhost", // Change if using an online DB
  user: "root",      // Your MySQL username
  password: "29458",      // Your MySQL password
  database: "contactus", // Make sure this exists
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// ✅ Fix for POST /contact
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body; // Get form data

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database insert failed" });
    }
    res.json({ success: true, message: "Message sent successfully!" });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
