/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
* @project leedium-sse
* @file serviceExternalRequestTransformer.js
* @company leedium
* @createdBy davidlee
* @contact david@leedium.com
* @dateCreated 31/07/2018
* @description Class providing transformation of responses back to OCC
**/

class ServiceExternalRequestTransformer {
  /**
   * Transform intellisense
   * @returns {Promise<any>}
   */
  static transformPlanetData (responseObj) {
    //  do whatever tansformations you need to do here, 'don't do anything
    return new Promise((resolve) => {
      resolve(responseObj);
    });
  }
}

module.exports = ServiceExternalRequestTransformer;
