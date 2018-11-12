/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-sse-webhook-stubs
 * @file index.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 13/07/2018
 * @description main entry file
 **/

const nconf = require('nconf');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const HttpsProxyAgent = require('https-proxy-agent');

const constants = require('../constants');
const routeMap = require('./routes/routeMap');
const router = express.Router();

const app = express();

const proxy = process.env.http_proxy || nconf.get('general:proxy-server');

global.httpRequest = http;
global.httpsRequest = https;

if (typeof proxy !== 'undefined') {
  global['agent'] = new HttpsProxyAgent(proxy);
}

//  define mock logging how it's done on the server with winston
if (global.logging) {
  app.use((req, res, next) => {
    if (!res.locals) {
      res.locals = {};
    }
    res.locals.logger = global.logging;
    next();
  });
}

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
//  Route references
app.use(constants.ROUTE_BASE, routeMap(router));

module.exports = app;
