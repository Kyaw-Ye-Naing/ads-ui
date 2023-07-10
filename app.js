const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors")
const {createProxyMiddleware} = require("http-proxy-middleware")

app.use(express.static(path.join(__dirname, 'utility-web')));
app.use('/vb', express.static(path.join(__dirname, 'vibration-web')));
app.use('/chiller', express.static(path.join(__dirname, 'chiller-web')));
// app.use('/landing', express.static(path.join(__dirname, 'landing-app')));
app.use('/co2', express.static(path.join(__dirname, 'co2-web')));
app.use('/quality', express.static(path.join(__dirname, 'aq-wq-web')));
// app.use('/utility', express.static(path.join(__dirname, 'ads-app')));
// app.use('/farm', express.static(path.join(__dirname, 'vertical-farm-app')));
app.use('/ml', express.static(path.join(__dirname, 'ml-web')));

// const BASE_URL = "https://adsapi.emscloud.net";
// const BASE_URL='http://206.189.39.45:8080'
// const REGISTRY_BASE_URL='http://206.189.39.45:8761'
// app.use(express.static(path.join(__dirname, 'chiller-ui')));

 
 app.use(cors());

 app.get('/co2/*',cors(), function(req, res) {
  res.sendFile(path.join(__dirname,'co2-web','index.html'));
});

 app.get('/ml/*',cors(), function(req, res) {
  res.sendFile(path.join(__dirname,'ml-web','index.html'));
});

 app.get('/vb/*',cors(), function(req, res) {
  res.sendFile(path.join(__dirname,'vibration-web','index.html'));
});

app.get('/chiller/*',cors(), function(req, res) {
  res.sendFile(path.join(__dirname,'chiller-web','index.html'));
});

 app.get('/quality/*',cors(), function(req, res) {
  res.sendFile(path.join(__dirname,'aq-wq-web','index.html'));
});

app.get('/*',cors(), function(req, res) {
  res.sendFile(path.join(__dirname,'utility-web','index.html'));
});


app.listen(5002);
