/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project leedium-sse
 * @file constants.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 13/07/2018
 * @description constants
 **/
module.exports = {
  SSE_NAME: 'leedium',
  SSE_VERSION: '1',
  TEST_FOLDER: 'tests',
  NODE_EXTENSION_SERVER_PORT: 11372,
  NODE_EXTENSION_TEST_PORT: 3099,
  ROUTE_BASE: '/v1/leedium',
  //
  HTTP_GET: 'GET',
  HTTP_POST: 'POST',
  HTTP_PUT: 'PUT',
  HTTP_DELETE: 'DELETE',
  HTTP_RESPONSE_SUCCESS: 200,
  HTTP_RESPONSE_SERVER_ERROR: 500,
  HTTP_RESPONSE_UNAUTHORIZED: 401,
  HTTP_RESPONSE_CONFLICT: 409,
  //
  CONTENT_TYPE_APPLICATION_JSON: 'application/json',
  CONTENT_TYPE_APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
  //
  NODE_ENV_DEVELOPMENT: 'development',
  NODE_ENV_TEST: 'test',
  //
  SSE_ENDPOINT_PROMOTIONS: '/promotions',
  SAY_HELLO: '/servicebasic/sayHello',
  GET_PLANETS: '/serviceexternal/getPlanet',
  //
  OCC_DEPLOY_HOST: 'https://ccadmin-z4ma.oracleoutsourcing.com',
  OCC_ENDPOINT_CURRENT_PROFILE: '/ccstoreui/v1/profiles/current',
  OCC_ENDPOINT_PROFILE: '/ccstoreui/v1/profiles',
  OCC_ENDPOINT_LOGIN: '/ccadmin/v1/login',
  OCC_ENV_PREVIEW: 'preview',
  //
  SWAPI_HOST: 'swapi.co',
  EXTERNAL_RREQUEST_1_PATH: '/api/planets/1/'
};
