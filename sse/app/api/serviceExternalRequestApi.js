/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-sse-webhook-stubs
 * @file serviceExternalRequestApi.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 31/07/2018
 * @description interface for all service enpoints
 **/

const constants = require('../../constants');
const apiRequest = require('../../core/apiRequest');
const transformer = require('./serviceExternalRequestTransformer');

class ServiceExternalRequestApi {
  static getPlanet (req, logger) {
    let httpRequest = {
      path: constants.EXTERNAL_RREQUEST_1_PATH,
      hostname: constants.SWAPI_HOST,
      port: null,
      headers: {
        'Content-Type': constants.CONTENT_TYPE_APPLICATION_JSON
      },
      method: constants.HTTP_GET
    };
    return new Promise((resolve) => {
      apiRequest(httpRequest, req.body, logger)
        .then(response => {
          transformer.transformPlanetData(response)
            .then(resolve)
            .catch(err => ({
              statusCode: constants.HTTP_RESPONSE_SERVER_ERROR,
              body: {message: err.message}
            }));
        });
    });
  }
}

module.exports = ServiceExternalRequestApi;
