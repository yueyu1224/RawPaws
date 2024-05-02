const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const { userSessions } = require('./users');

// Store all forum posts in a common structure
const forumPosts = [];

router.get('/', (req, res) => {
    // Authentication check is not required for reading posts
    res.json({ posts: forumPosts });
});

router.post('/', (req, res) => {
    const sid = req.cookies.sessionId;
    const username = userSessions[sid]?.username;

    if (!username) {
        return res.status(401).json({ error: 'auth-insufficient' });
    }

    const { content } = req.body;
    const post = { id: uuidv4(), username, content };

    forumPosts.push(post); // Add the new post to the common forum posts array

    res.json(post);
});

module.exports = router;
