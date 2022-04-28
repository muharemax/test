const express = require('express');
const app = express();
// Constants
const PORT = 4545;
const HOST = '0.0.0.0';

app.get('/api/health', (req, res) => 
  res.json({ 'status': 'ok' }));

app.get('/fruit/:fruitName/:fruitColor', (req, res) => {
  const {
    fruitName,
    fruitColor
  } = req.params
  res.json({
    fruitName,
    fruitColor
  });
});

app.listen(PORT, HOST);