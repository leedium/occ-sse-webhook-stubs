# occ-sse-webhook-stubs
Server-Side Extension to handle non payment [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud") [webhook](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s0301usewebhooks01.html "Using webhooks in Oracle Commerce Cloud") requests

## Supported [Webhooks](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s0301usewebhooks01.html "Using webhooks in Oracle Commerce Cloud")

#### Event
(None available...yet)

#### Function
- [External Price Validation](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2203configurethewebhook01.html "External Price validation in Oracle Commerce Cloud")
    -  Use this in tandem with the [occ-pricing-widget](https://github.com/leedium/occ-external-pricing-widget "Occ Pricing Widget")
    -  This enpoint validates that the external prices have not changed post order submission.
       returns:
       ```
       {
                 "responseCode": "5001" // success
                 "responseCode": "5002" // fail
       }
       ```

- [External Promotions](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2204usepromotionsfromanexternalsyste01.html "External Promotions in Oracle Commerce Cloud")
  - Executes after external pricing has been initiated when an item is added to the basket.
  - The payload sent by this webhook contains details about order including all promotions associated withe the order
  and with the product itself.
  -  If the discount(s) is set up in the admin then you will see it in the item's discountInfo Array property.
  Ex:
  ```
   // sample from the webhook request JSON
   //...
   "discountInfo": [
              {
                "promotionLongDesc": "<p>This is a discount for item 2</p>",
                "promotionName": "lee002 item FREE",
                "promotionLevel": "item",
                "promotionDesc": "lee002 item FREE",
                "promotionId": "promo10001",
                "giftWithPurchaseDiscountInfo": []
              }
            ]
  //...
  ```
-  Webhook Response
When responding to the [External Promotions](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2204usepromotionsfromanexternalsyste01.html "External Promotions in Oracle Commerce Cloud")
Webhook you need to return a response code and a promotions adjustments array.

The following example is taken from the Oracle Commerce Cloud documentation.
* Notice that the exmple shows Item discount and Order promotions.
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
  "adjustmentAmount": "-20",
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



- [External Shipping](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2101integratewithexternalshippingcal01.html "External Shipping in Oracle Commerce Cloud")
