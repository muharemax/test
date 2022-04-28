const express = require('express');
const app = express();
const port = 4545;

app.get('/api/health', (req, res) => 
  res.json({ 'status': 'ok' }));

app.listen(port, () => console.log(`Node app listening on port ${port}!`))