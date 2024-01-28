import { IntentType } from "../lib/types";

export const VALID_DATA_OBJECTS = {
  payload: {
    with_crc: '00020101021236470210220001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180630136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80019org.paycashless.qpi630423C0',
    without_crc: '00020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304'
  },
  decodedResult: {
    version: '01',
    intentType: IntentType.dynamic,
    merchantAccount: {
      schemeIdentifier: "org.paycashless.qpi",
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
      schemeIdentifier: "org.paycashless.qpi",
      token: "tok_neojvjkwPrrpr9e03hplcag2ig5gpua8"
    },
    checksum: '23C0'
  },
  requestObject: {
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
};

export const INVALID_DATA_OBJECTS = {
  payload: {
    wrong_id: '00020199021236470210220001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180630136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80019org.paycashless.qpi63048D41',
    wrong_prefix: '77020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304F708',
    invalid_checksum: '00020101021236470210220001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180630136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80019org.paycashless.qpi630423AA'
  },
  decodedResult: {
    version: '99',
    intentType: IntentType.static,
    merchantAccount: {
      accountNumber: '1100010702',
      nipCode: '090267',
      schemeIdentifier: 'org.paycashless.qpi'
    },
    merchantCategoryCode: '4111',
    countryCode: 'NGL',
    merchantName: 'GRUBWAYS',
    merchantCity: 'ABUJA',
    postalCode: '900231',
    amount: '5000',
    currency: '566',
    additionalDataObjects: {
      storeLabel: '055',
      customerLabel: '***',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521'
    },
    paymentIntentDataObjects: {
      token: "tok_neojvjtlPrrpr9e03hplcag2ig5gpua8"
    },
    checksum: 'F708'
  }
}