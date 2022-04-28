const express = require('express');
const app = express();
// Constants
const PORT = 4545;
const HOST = '0.0.0.0';

app.get('/api/health', (req, res) => 
  res.json({ 'status': 'ok' }));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);