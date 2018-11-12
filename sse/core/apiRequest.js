/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-sse-webhook-stubs
 * @file apiRequest.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 31/07/2018
 * @description central point to make external requests to third parties
 **/

const querystring = require('querystring');

const constants = require('../constants');

/**
 * Central http request interface for all outbound calls from SSE
 * @param httpRequest
 * @param data
 * @param logger
 * @param secure - whether to use https or http, defaults to true
 * @returns {Promise<any>}
 */
function apiRequest (httpRequest, data, logger, secure = true) {
  return new Promise((resolve) => {
    const request = secure ? global.httpsRequest : global.httpRequest;
    if (typeof global.agent !== 'undefined') {
      httpRequest['agent'] = global.agent;
    }
    let response = '';
    logger.debug(`#HC_SSE:REQUEST:START::${httpRequest.hostname}${httpRequest.path}#`);
    let req = request.request(httpRequest, res => {
      res.on('data', chunk => {
        response += chunk;
      });
      res.on('end', () => {
        try {
          if (res.statusCode === constants.HTTP_RESPONSE_SUCCESS) {
            logger.debug(`#HC_SSE:REQUEST:SUCCESS::${httpRequest.path}:HTTP response: ${res.statusCode}#`);
            if (httpRequest.headers['Content-Type'] === constants.CONTENT_TYPE_APPLICATION_JSON ||
              httpRequest.headers['content-type'] === constants.CONTENT_TYPE_APPLICATION_JSON) {
              response = JSON.parse(response);
            }
            resolve({
              statusCode: res.statusCode,
              body: response
            });
          } else {
            logger.error(`#HC_SSE:ERROR::${httpRequest.path}:HTTP response: ${res.statusCode}#`);
            resolve({
              statusCode: res.statusCode,
              body: {message: `message ${res.statusCode}`}
            });
          }
        } catch (err) {
          logger.error(`#HC_SSE:ERROR::${httpRequest.path}:HTTP response: ${res.statusCode}#`);
          resolve({
            statusCode: constants.HTTP_RESPONSE_SERVER_ERROR,
            body: {message: `message ${err.statusCode}`}
          });
        }
      });
    });
    req.on('error', err => {
      logger.error(`#HC_SSE:ERROR::${httpRequest.path}:HTTP response: 500#`);
      resolve({
        statusCode: constants.HTTP_RESPONSE_SERVER_ERROR,
        body: {message: err.message}
      });
    });
    if (httpRequest.headers['Content-Type'] === constants.CONTENT_TYPE_APPLICATION_JSON) {
      req.write(JSON.stringify(data));
    } else if (httpRequest.headers['Content-Type'] === constants.CONTENT_TYPE_APPLICATION_FORM_URLENCODED) {
      req.write(querystring.stringify(data));
    }
    req.end();
  });
}

module.exports = apiRequest;
