import { QrPaymentIntent, IntentType } from ".."

async function testImpl() {
  const dataObjects = {
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
      customerLabel: 'cust_2bt7pwl20mb25sa',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521'
    }
  }

  const qpi = new QrPaymentIntent();
  const payload = qpi.encode(dataObjects);
  console.log(payload)
  console.log('uri safe', encodeURI(payload))
  console.log(JSON.stringify(qpi.decode('00020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304F708')))
}

testImpl();