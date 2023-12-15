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
    }
  }

  const qpi = new QrPaymentIntent();
  const payload = qpi.encode(dataObjects);
  console.log(payload);
```

## `decode`
This function allows you to decode a QR payment intent payload back to readable data objects

```js
import { QrPaymentIntent } from '@paycashless/qpi.js';

const payload = '00020101021136470210220001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627103030550620cust_2bt7pwl20mb25sa07020505065672230813FOOD DELIVERY1103521630487F7';
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
}
```

