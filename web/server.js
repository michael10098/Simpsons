const express = require('express')
const next = require('next')
const path = require('path');

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
 
 server.get('/funProjects', (req, res) => {
  return app.render(req, res, '/funProjects')
 })

 server.get('/resume', (req, res) => {
  return app.render(req, res, '/resume')
 })

 server.get('/resumepdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'Resume.pdf'));
 })

 server.get("/leverage", (req, res) => {
  return app.render(req, res, '/leverage')
 })

 server.get('/images/BartSimpson', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'BartSimpson.png'));
 })
 server.get('/images/GrampaSimpson', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'GrampaSimpson.png'));
 })
 server.get('/images/HomerSimpson', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'HomerSimpson.png'));
 })
 server.get('/images/LisaSimpson', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'LisaSimpson.png'));
 })
 server.get('/images/MargeSimpson', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'MargeSimpson.png'));
 })
 server.get('/images/MilhouseVanHouten', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'MilhouseVanHouten.png'));
 })
 server.get('/images/NedFlanders', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'NedFlanders.png'));
 })
 server.get('/images/NelsonMuntz', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'NelsonMuntz.png'));
 })
 server.get('/images/GroundskeeperWillie', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'GroundskeeperWillie.png'));
 })

server.use(express.text());

server.post('/api/predictions', (req, res) => {
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

 server.all('*', (req, res) => {
  return handle(req, res)
 })

 server.listen(3000, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3000')
 })
})