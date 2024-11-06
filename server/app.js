const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static
app.use(express.static(path.join(__dirname, '../public')));

//database connection
const db = new sqlite3.Database(path.join(__dirname, '../database/school.db'), (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Route to get students data
app.get('/api/students', (req, res) => {
  db.all("SELECT * FROM Students", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Route to get courses data
app.get('/api/courses', (req, res) => {
    db.all("SELECT * FROM Courses", [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });
 

// Route to get registrations data
app.get('/api/registrations', (req, res) => {
    db.all("SELECT * FROM Registrations", [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });
  
  // Route to get instructors data
  app.get('/api/instructors', (req, res) => {
    db.all("SELECT * FROM Instructors", [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });

   // Route to get assignments data
   app.get('/api/assignments', (req, res) => {
    db.all("SELECT * FROM Assignments", [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
