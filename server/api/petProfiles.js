const express = require('express');
const router = express.Router();

const { userSessions } = require('./users');

const petProfilesByUser = {};

router.get('/', (req, res) => {
  const sid = req.cookies.sessionId;
  const username = userSessions[sid]?.username;
  
  if (!username) {
    return res.status(401).json({ error: 'auth-insufficient' });
  }

  const petProfile = petProfilesByUser[username] || {};
  res.json(petProfile);
});

router.post('/', (req, res) => {
  const sid = req.cookies.sessionId;
  const username = userSessions[sid]?.username;
  
  if (!username) {
    return res.status(401).json({ error: 'auth-insufficient' });
  }

  const { name, type, breed } = req.body;
  petProfilesByUser[username] = { name, type, breed };
  res.json(petProfilesByUser[username]);
});

module.exports = router;




