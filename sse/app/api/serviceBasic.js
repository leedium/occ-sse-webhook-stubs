/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-sse-webhook-stubs
 * @file service1Api.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 31/07/2018
 * @description interface for all the homchoice utility sse enpoints
 **/

const constants = require('../../constants');

class ServiceBasic {
  static promotions (req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: `hello ${req.body.name}`}
      }));
    });
  }
  static externalPrice (req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: `hello ${req.body.name}`}
      }));
    });
  }
  static externalPriceValidation (req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: `hello ${req.body.name}`}
      }));
    });
  }
  static externalShipping (req) {
    return new Promise((resolve) => {
      resolve(({
        statusCode: constants.HTTP_RESPONSE_SUCCESS,
        body: {message: `hello ${req.body.name}`}
      }));
    });
  }


}

module.exports = ServiceBasic;
