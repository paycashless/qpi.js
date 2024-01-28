import { RequestDataObjects } from "lib/types";
import { QrPaymentIntent, IntentType } from ".."

async function testImpl() {
  const dataObjects: RequestDataObjects = {
    version: '01',
    intentType: IntentType.dynamic,
    merchantAccount: {
      accountNumber: '2200010702',
      nipCode: '090267'
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
  }

  const qpi = new QrPaymentIntent();
  const payload = qpi.encode(dataObjects);
  console.log(payload)
  console.log('uri safe', encodeURI(payload))
  console.log(JSON.stringify(qpi.decode('00020101021236470210220001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180630136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80019org.paycashless.qpi630423C0')))
}

testImpl();