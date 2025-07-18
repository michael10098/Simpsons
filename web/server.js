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

server.get('/images/alarmLive', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'alarm live.png'));
 })
server.get('/images/alertApplied', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'alertapplied_user.png'));
 })
server.get('/images/buildingMapMoveCamera', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'building-map-move-camera-1.png'));
 })
server.get('/images/joystickCameraView', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'joystickcameraview.png'));
 })
server.get('/images/multiAlarmMap', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'multi-alarm-map.png'));
 })
server.get('/images/networkNodeIcons', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'networknode-icons.png'));
 })
server.get('/images/networkNodeView', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'network-node-view1.png'));
 })
server.get('/images/presetDisplayView', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'preset_displayview.png'));
 })
server.get('/images/simulate', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'simulate-6.png'));
 })
server.get('/images/simulateAlarm', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'simulate-alarm-1.png'));
 })
server.get('/images/skedExample', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'sked_example1.png'));
 })
server.get('/images/sortCamera', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'sort-camera-1.png'));
 })
server.get('/images/structureIcons', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'structureicons.png'));
 })
server.get('/images/systemSettingsMapping', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'system-settings-mapping.png'));
 })
server.get('/images/thumbnailsActivated', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'thumbnails activated.png'));
 })
server.get('/images/thumbnailsSelected', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'thumbnails selected.png'));
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