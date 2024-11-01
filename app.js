// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! The app is running on Heroku. allah you are gthe greatest');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});