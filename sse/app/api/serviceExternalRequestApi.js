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
  static promotions(req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: "ok"}
      }));
    });
  }

  static externalPrice(req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: transformer.transformPrices(req.body)
      }));
    });
  }

  static externalPriceValidation(req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: "ok"}
      }));
    });
  }

  static externalShipping(req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: "ok"}
      }));
    });
  }

}

module.exports = ServiceExternalRequestApi;
