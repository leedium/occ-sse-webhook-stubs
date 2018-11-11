/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * Route.js
 * Abstract Class for SSE Routes
 * @type {*|createApplication}
 */
/**
 * @project leedium-sse
 * @file route.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 13/07/2018
 * @description Base Class for a route.
 *              Extend this to add more features or functionality.
 **/

const cors = require('cors');

const constants = require('../../constants');
const config = require('../../config.json');
const helpers = require('../../core/helpers');

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: constants.HTTP_RESPONSE_SUCCESS,
  preflightContinue: true,
  allowedHeaders: [
    'Accept',
    'Accept-Encoding',
    'Authorization',
    'Cache-Control',
    'Connection',
    'Content-Length',
    'Content-Type',
    'Cookie',
    'env',
    'Host',
    'Origin',
    'Pragma',
    'Referer',
    'User-Agent',
    'X-Requested-With'
  ]
};

class Route {
  constructor (options) {
    this.router = options.router;
    this.api = options.api;
    const responseHandler = (req, res) => {
      let logger = res.locals.logger;
      /**
       * Handles the 'transformed' response and send it back to client
       * @param result
       */
      let handleResult = (result) => {
        logger.debug(`#HC_SSE:RESPONSE::${result.statusCode}#`);
        res.status(result.statusCode).json(result.body);
      };
      /**
       * Conducts a request to the LIVE endpoint
       */
      let apiCheck = () => {
        this.api(req, logger)
          .then(handleResult)
          .catch((err) => {
            handleResult({
              statusCode: constants.HTTP_RESPONSE_SERVER_ERROR,
              body: {message: err.message}
            });
          });
      };
      /**
       * Conditional check to see if SSE is running in dev|test|production mode
       * If running locally for development or testing this route will respond with test
       * JSON data specific to the route.
       */
      try {
        if (process.env.NODE_ENV === constants.NODE_ENV_DEVELOPMENT || process.env.NODE_ENV === constants.NODE_ENV_TEST) {
          if (global.testMode) {
            let body = helpers.readJSONFile(`../${config.testFolder}/json/${options.testRes}`);
            handleResult({
              statusCode: constants.HTTP_RESPONSE_SUCCESS,
              body
            });
          } else {
            apiCheck();
          }
        } else {
          apiCheck();
        }
      } catch (err) {
        handleResult({
          statusCode: constants.HTTP_RESPONSE_SERVER_ERROR,
          body: {message: err.message}
        });
      }
    };

    switch (options.method) {
      case constants.HTTP_GET:
        this.router.get(`${options.route}`, cors(corsOptions), responseHandler);
        break;
      case constants.HTTP_POST:
        this.router.post(`${options.route}`, cors(corsOptions), responseHandler);
        break;
      case constants.HTTP_PUT:
        this.router.put(`${options.route}`, cors(corsOptions), responseHandler);
        break;
      case constants.HTTP_DELETE:
        this.router.delete(`${options.route}`, cors(corsOptions), responseHandler);
        break;
    }
    return this.router;
  };
}

module.exports = Route;
