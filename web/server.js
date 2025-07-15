const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var http = require('http');

app.prepare().then(() => {
 const server = express()

 server.get('/', (req, res) => {
  return app.render(req, res, '/home')
 })

 state = {
   dataReturned: "Waiting"
 };
 
 server.get('/predictions', (req, res) => {
  return app.render(req, res, '/predictions')
 })

server.use(express.text());

server.post('/api/predictions', (req, res) => {
  data = req.body;
  //fetch('http://python:5000/predict', {
  fetch('http://localhost:5000/predict', {
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

 server.all('*', (req, res) => {
  return handle(req, res)
 })

 server.listen(3000, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3000')
 })
})