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

  /**
   * Method handles the promotions route
   * @returns {Promise<any>}
   */
  static promotions(req) {
    console.log('promotions',JSON.stringify(req.body, null, 2));
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: "ok"}
      }));
    });
  }

  /**
   * Method handles the externalPrice route
   * @returns {Promise<any>}
   */
  static externalPrice(req) {
    console.log('externalPrice',JSON.stringify(req.body, null, 2));
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: transformer.transformPrices(req.body)
      }));
    });
  }

  /**
   * Method handles the externalPriceValidation route
   * Return "responseCode": "5001" for success
   * Return "responseCode": "5002" for failure
   * @returns {Promise<any>}
   */
  static externalPriceValidation() {
    console.log('externalPriceValidation',JSON.stringify(req.body, null, 2));
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {
          "responseCode": "5001"
        }
      }));
    });
  }

  /**
   * Method handles the externalShipping route
   * @returns {Promise<any>}
   */
  static externalShipping() {
    console.log('externalShipping',JSON.stringify(req.body, null, 2));
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: "ok"}
      }));
    });
  }

}

module.exports = ServiceExternalRequestApi;
