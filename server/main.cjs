const express = require('express');
const cors = require('cors');
const app = express();
// Enable CORS for requests from http://localhost:5173 (your Vite frontend)
app.use(cors({
  origin: 'http://localhost:5173'
}));
const port = 3001;

app.get('/api/quotes', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/quotes');
    const quotes = await response.json();
    res.json(quotes);
  } catch (error) {
    res.status(500).send('Error fetching quotes');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port http://localhost:${port}`);
});
