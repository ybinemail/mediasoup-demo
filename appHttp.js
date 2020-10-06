#!/usr/bin/env node

const http = require('http');
const express = require('express');
const serverIndex = require('serve-index');

const app = express();

app.use(serverIndex('./public'));
app.use(express.static('./public'));

const httpServer = http.createServer(app);

httpServer.listen('9999', '0.0.0.0');
