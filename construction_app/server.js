const express = require("express");

const pool = require("./src/db");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// Get all tasks

app.get("/tasks", (req, res) => {
  pool.query("SELECT * FROM tasks", (error, results) => {
    if (error) throw error;

    res.json(results);
  });
});

// Add a new task

app.post("/tasks", (req, res) => {
  const { title } = req.body;

  pool.query(
    "INSERT INTO tasks (title) VALUES (?)",
    [title],
    (error, results) => {
      if (error) throw error;

      pool.query("SELECT * FROM tasks", (error, results) => {
        if (error) throw error;

        res.json(results);
      });
    }
  );
});

// Delete a task

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;

  pool.query("DELETE FROM tasks WHERE id = ?", [id], (error, results) => {
    if (error) throw error;

    res.json({ message: "Task deleted" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
