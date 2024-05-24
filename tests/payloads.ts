import { IntentType } from "../lib/types";

export const VALID_DATA_OBJECTS = {
  payload: {
    with_crc: '000201010212362902011010110015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304BB14',
    without_crc: '000201010212362902011010110015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304'
  },
  decodedResult: {
    version: '01',
    intentType: IntentType.dynamic,
    merchantAccount: {
      schemeIdentifier: "com.paycashless",
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
      schemeIdentifier: "com.paycashless",
      token: "tok_neojvjkwPrrpr9e03hplcag2ig5gpua8"
    },
    checksum: 'BB14'
  },
  requestObject: {
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
  }
};

export const INVALID_DATA_OBJECTS = {
  payload: {
    wrong_id: '000201990212362902011010110015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304256A',
    wrong_prefix: '770201010212362902011010110015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304BB14',
    invalid_checksum: '000201010212362902011010110015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304BB33'
  },
  decodedResult: {
    version: '99',
    intentType: IntentType.static,
    merchantAccount: {
      accountIndex: '1',
      merchantId: '1',
      schemeIdentifier: 'com.paycashless'
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