# occ-sse-webhook-stubs
Server-Side Extension to handle non payment [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud") [webhook](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s0301usewebhooks01.html "Using webhooks in Oracle Commerce Cloud") requests

## Supported [Webhooks](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s0301usewebhooks01.html "Using webhooks in Oracle Commerce Cloud")

## Event
(coming soon...)

## Function
### [External Price Validation](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2203configurethewebhook01.html "External Price validation in Oracle Commerce Cloud")
-  Use this in tandem with the [occ-pricing-widget](https://github.com/leedium/occ-external-pricing-widget "Occ Pricing Widget")
-  This endpoint validates that the external prices have not changed post order submission.
   returns:
   ```
   {
             "responseCode": "5001" // success
             "responseCode": "5002" // fail
   }
   ```
[Example Schema](https://github.com/leedium/occ-sse-webhook-stubs/blob/master/sse/tests/json/priceValidation-req.json "Example Price Validation Request Schema")

### [External Promotions](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2204usepromotionsfromanexternalsyste01.html "External Promotions in Oracle Commerce Cloud")
#### Webhook Request 
- Executes after external pricing has been initiated when an item is added to the basket.
- The payload sent by this webhook contains details about order including all promotions associated with the order and with the product itself.
[Example Schema](https://github.com/leedium/occ-sse-webhook-stubs/blob/master/sse/tests/json/externalPromotions-req.json "Example Promotions Request Schema")

#### Webhook Response
When responding to the [External Promotions](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2204usepromotionsfromanexternalsyste01.html "External Promotions in Oracle Commerce Cloud")
Webhook you need to return a response code and a promotions adjustments array.

  The following example is taken from the Oracle Commerce Cloud [documentation](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2203configurethewebhook01.html "Configure the promotions webhook").
* Notice that the example shows Item discount and Order promotions.
- Will investigate JSON schema needed for various permutations of orders

```
"responseCode":"6101",
"promotionAdjustments": [
{ // ITEM DISCOUNT
  "adjustmentOperation": "adjustItemPrice",
  "promotionId": "occ_title_0001",
  "description": "$20 discount on selected Title",
  "id": "ci6000413",
  "quantity": "2", // will trigger after two items added
  "adjustmentOrdering": "highestFirst",
  "adjustmentAmount": "-20","adjustmentAmount": "-20",
  "displayName": "$20 OFF",
  "coupon": "20DOLLARSOFF"
},
{ // ORDER DISCOUNT
  "adjustmentOperation": "adjustOrderPrice",
  "promotionId": "EP1003",
  "description": "$50 off order when total above $300",
  "adjustmentAmount": "-50",
  "displayName": "50DollarDiscount"

}
 ```
 #### adjustmentAmount (Important)
 (Courtesy of @[Marcel Tresso Marcolino](https://nl.linkedin.com/in/marcelotm "Marcel Tresso Marcolino")
 - There is no specific code or id for percent, FREE, buy1get1Free, etc, etc for external promotions
 - Set the "adjustmentAmount" price to reflect the included discount
 ```
 // for a free item
 {
   ...
   "adjustmentAmount": "0",
   ...
 }
 ```
 Thanks [Marcelo](https://nl.linkedin.com/in/marcelotm "Marcel Tresso Marcolino")!
 

### [External Shipping](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2101integratewithexternalshippingcal01.html "External Shipping in Oracle Commerce Cloud")

- (coming soon)


