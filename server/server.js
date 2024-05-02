const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(cookieParser());

const { router: usersRouter } = require('./api/users'); 
const petProfilesRouter = require('./api/petProfiles');
const forumRouter = require('./api/forum'); 


app.use('/api/users', usersRouter); 
app.use('/api/pet-profiles', petProfilesRouter);
app.use('/api/forum', forumRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


