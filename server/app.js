const express = require('express');
const path = require('path'); // ✅ สำคัญ
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// serve static files from Vue build
app.use(express.static(path.join(__dirname, '../dist')));

// optional: fallback route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
