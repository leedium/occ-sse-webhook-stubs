/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-sse-webhook-stubs
 * @file serviceExternalRequestTransformer.js
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 31/07/2018
 * @description Class providing transformation of responses back to OCC
 **/

const priceStub = require('../../stubs/price');


class ServiceExternalRequestTransformer {
  /**
   * Transform intellisense
   * @returns {Promise<any>}
   */
  static transformPlanetData(responseObj) {
    //  do whatever tansformations you need to do here, 'don't do anything
    return new Promise((resolve) => {
      resolve(responseObj);
    });
  }

  /**
   * This is just an examples that Mocks the transformation
   * from an external pricing system
   *
   * uses priceStub - ../../stubs/price.json
   *
   * @param responseObj
   * @returns {Promise<any>}
   */
  static transformPrices(items) {
    const updatedPriceList = items.reduce((a, item) => {
      let key = priceStub[item.catRefId];
      if (key) {
        a.push(Object.assign({},item,key));
      }
      return a;
    }, []);

    console.log(updatedPriceList)

    return {
      numberOfItems: updatedPriceList.length,
      items: updatedPriceList
    };
  }
}

module.exports = ServiceExternalRequestTransformer;
