const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mock database (replace with real DB calls)
let comments = [];

// Route to handle comment submission
app.post('/submit-comment', (req, res) => {
    const { userId, postId, commentText } = req.body;

    // Validate input
    if (!userId || !postId || !commentText) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Insert comment into the "database"
    const newComment = {
        id: comments.length + 1,
        userId,
        postId,
        commentText,
        createdAt: new Date(),
    };
    comments.push(newComment);

    // Send back the new comment as a response
    res.status(201).json(newComment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
