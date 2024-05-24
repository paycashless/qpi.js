import { RequestDataObjects } from "lib/types";
import { QrPaymentIntent, IntentType } from ".."

async function testImpl() {
  const dataObjects: RequestDataObjects = {
    version: '01',
    intentType: IntentType.dynamic,
    merchantAccount: {
      accountIndex: '1',
      merchantId: '1'
    },
    merchantCategoryCode: '4111',
    countryCode: 'NG',
    merchantName: 'GRUBWAYS',
    merchantCity: 'ABUJA',
    postalCode: '900231',
    amount: '5000',
    currency: '566',
    additionalDataObjects: {
      storeLabel: '055',
      customerLabel: 'customer@example.com',
      terminalLabel: '05',
      reference: 'PAY_56722803',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521'
    },
    paymentIntentDataObjects: {
      token: "tok_neojvjkwPrrpr9e03hplcag2ig5gpua8"
    },
  } satisfies RequestDataObjects;

  const qpi = new QrPaymentIntent();
  const payload = qpi.encode(dataObjects);
  console.log(payload)
  console.log('uri safe', encodeURI(payload))
  // console.log(JSON.stringify(qpi.decode('000201010212362902011010110015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304BB14')))
}

testImpl();

