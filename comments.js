// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory store for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to create a new comment
app.post('/comments', (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid comment text' });
  }
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Route to delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Comment not found' });
  }
  comments.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Comments server is running at http://localhost:${port}`);
});