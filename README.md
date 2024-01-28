# QR Payment Intent
This library allows you to encode and decode QPI data objects.
Note: it won't generate a QR image, it only creates what can be used as the content of the QR code, you'll have use a seperate library for generating QR codes.

## Get started
```bash
npm install @paycashless/qpi.js
```

## `encode`
This function encodes your payment intent data objects into a string that can be easily embeded in a QR code.

```js
  import { QrPaymentIntent } from '@paycashless/qpi.js';

  const dataObjects = {
    version: '01',
    intentType: IntentType.static,
    merchantAccount: {
      accountNumber: '2200010702',
      nipCode: '090267'
    },
    merchantCategoryCode: '4111', // transportation
    countryCode: 'NG',
    merchantName: 'GRUBWAYS',
    merchantCity: 'ABUJA',
    postalCode: '900231',
    amount: '5000',
    currency: '566', // NGN
    additionalDataObjects: {
      storeLabel: '055',
      customerLabel: 'cust_2bt7pwl20mb25sa',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521' // online
    },
    paymentIntentDataObjects: {
      token: "tok_neojvjkwPrrpr9e03hplcag2ig5gpua8"
    },
  }

  const qpi = new QrPaymentIntent();
  const payload = qpi.encode(dataObjects);
  console.log(payload);
```

## `decode`
This function allows you to decode a QR payment intent payload back to readable data objects

```js
import { QrPaymentIntent } from '@paycashless/qpi.js';

const payload = '00020101021236470210220001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180630136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80019org.paycashless.qpi630423C0';
const qpi = new QrPaymentIntent();
const dataObjects = qpi.decode(payload);
console.log(dataObjects);
```

## Data Objects
You can find all the possible data objects listed below;

```js
interface DataObjects {
  version: string;
  intentType: IntentType;
  checksum: string;
  merchantAccount: {
    schemeIdentifier: string;
    accountNumber: string;
    nipCode: string;
    piftCode?: string;
    merchantId?: string;
  };
  merchantCategoryCode: string;
  countryCode: string;
  merchantName: string;
  merchantCity: string;
  postalCode: string;
  merchantInfoAltLanguage?: {
    localLanguage: string;
    merchantName: string;
    merchantCity: string;
  };
  amount: string;
  currency: string;
  serviceFee?: string;
  percentageServiceFee?: string;
  additionalDataObjects: {
    storeLabel: string;
    customerLabel: string;
    terminalLabel: string;
    loyaltyNumber?: string;
    reference: string;
    narration: string;
    merchantChannel: string;
  };
  paymentIntentDataObjects: {
    schemeIdentifier: string;
    token: string;
  },
}
```

> `merchantCategoryCode` data object shall contain MCC as defined by [ISO 18245]

> `countryCode` data object shall contain the country code of the merchant as defined by [ISO 3166-1 alpha-2]

> `additionalDataObjects.merchantChannel` has three chracters, each chracter in each position identifies the characteristic of the channel used for the transaction. The possible value of each character and its definition are listed below

> `currency` data object is to conform with [ISO 4217] containing 3 digit numeric representation of the transaction currency

### Merchant Channel: First chracter (Media)

| Value      | Meaning |
| ----------- | ----------- |
| "0" | Print - Merchant Sticker |
| "1" | Print - Bill/Invoice |
| "2" | Print - Magazine/Poster |
| "3" | Print - Other |
| "4" | Screen/Electronic - Merchant POS/POI |
| "5" | Screen/Electronic - Website |
| "6" | Screen/Electronic - App |
| "7" | Screen/Electronic - Other |

### Merchant Channel: Second chracter (Transaction Location)

| Value      | Meaning |
| ----------- | ----------- |
| "0" | At Merchant premises/registered address |
| "1" | Not at merchant premises/registered address |
| "2" | Remote commerce |
| "3" | Other |

### Merchant Channel: Third chracter (Merchant Presence)

| Value      | Meaning |
| ----------- | ----------- |
| "0" | Attended POI |
| "1" | Unattended |
| "2" | Semi attended (Self-checkout) |
| "3" | Other |