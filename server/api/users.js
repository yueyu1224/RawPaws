const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const userSessions = {};

const isValidUsername = (username) => {
  return username.match(/^[0-9a-zA-Z]+$/) && username.trim() !== '';
};

router.post('/login', (req, res) => {
  const { username } = req.body;

  // Check for banned username "dog"
  if (username === 'dog') {
    return res.status(403).json({ error: 'auth-insufficient' });
  }

  // Check for invalid username
  if (!isValidUsername(username)) {
    return res.status(400).json({ error: 'invalid-username' });
  }

  const sessionId = uuidv4();
  userSessions[sessionId] = { username };
  
  // Set the session ID in a cookie
  res.cookie('sessionId', sessionId, { httpOnly: true, sameSite: 'strict' });

  // Return both sessionId and username to the client
  res.json({ message: 'Login successful', sessionId, username });
});

router.post('/logout', (req, res) => {
  const sessionId = req.cookies.sessionId;
  if (sessionId && userSessions[sessionId]) {
    // Delete the user's session
    delete userSessions[sessionId];

    // Clear the session cookie
    res.clearCookie('sessionId');

    res.json({ message: 'Logout successful' });
  } else {
    res.status(401).json({ error: 'auth-insufficient' });
  }
});


module.exports = { router, userSessions };




