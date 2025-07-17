const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const songs = [
  {
    id: 1,
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
    img: "/images/good4u.jpg",
    genre: "pop",
    source: "/assets/song-one.mp3"
  },
  {
    id: 2,
    name: "Levitating",
    artist: "Dua Lipa",
    img: "/images/levitating.jpg",
    genre: "pop",
    source: "/assets/song-two.mp3"
  },
  {
    id: 3,
    name: "Shape of You",
    artist: "Ed Sheeran",
    img: "/images/shape-of-you.jpg",
    genre: "pop",
    source: "/assets/shape-of-you.mp3"
  }
];

app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.listen(5000, () => {
  console.log('🎵 Server is running at http://localhost:5000');
});