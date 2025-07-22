const express = require('express');
const path = require('path'); // For constructing absolute paths
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); 

// Example route (optional) - you can define specific routes for pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.use(express.text());

app.post('/api/predictions', (req, res) => {
  data = req.body;
   fetch('http://127.0.0.1:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: data
  })
  .then((response) => response.text())
  .then((data) => {
    res.send(data);
  })
 });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});