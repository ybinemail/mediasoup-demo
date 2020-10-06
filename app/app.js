#!/usr/bin/env node

const https = require('https');
const express = require('express');
const serverIndex = require('serve-index');
const fs = require('fs');

// 加载证书
const options = {
	key  : fs.readFileSync('../certs/server.key'),
	cert : fs.readFileSync('../certs/server.pem')
};

const app = express();

app.use(serverIndex('./public'));
app.use(express.static('./public'));

const httpsServer = https.createServer(options, app);

httpsServer.listen('9443', '0.0.0.0');
