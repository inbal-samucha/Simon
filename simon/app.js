const path = require('path');
const http = require('http');
const express = require('express');
const simonRoute = require('./simonRoute');

const app = express();
app.use(express.static(path.join(__dirname)));
app.use(simonRoute);
const server = http.createServer(app);
server.listen(3000);
