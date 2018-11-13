# occ-sse-webhook-stubs
Server-Side Extension to handle non payment [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud") [webhook](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s0301usewebhooks01.html "Using webhooks in Oracle Commerce Cloud") requests

## Supported [Webhooks](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s0301usewebhooks01.html "Using webhooks in Oracle Commerce Cloud")

#### Event
(None available)

#### Function
- [External Price Validation](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2201integratewithanexternalpricingsy01.html "External Price validation in Oracle Commerce Cloud")
  - Set your OCC catalog to match the products defined in [/stubs/price.json](https://github.com/leedium/occ-sse-webhook-stubs/blob/master/sse/stubs/price.json)
- [External Promotions](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2204usepromotionsfromanexternalsyste01.html "External Promotions in Oracle Commerce Cloud")
 - Executes after external pricing has been initiated
- [External Shipping](https://docs.oracle.com/cd/E97801_01/Cloud.18C/ExtendingCC/html/s2101integratewithexternalshippingcal01.html "External Shipping in Oracle Commerce Cloud")
