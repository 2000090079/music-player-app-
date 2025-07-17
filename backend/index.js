
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (if you build React frontend)
app.use(express.static(path.join(__dirname, '../client/build')));

// API route (example)
app.get('/api/songs', (req, res) => {
  res.json([
    { id: 1, title: "Song One", artist: "Artist A", url: "/songs/song1.mp3" },
    { id: 2, title: "Song Two", artist: "Artist B", url: "/songs/song2.mp3" }
  ]);
});

// Fallback to frontend for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
