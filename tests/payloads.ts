import { IntentType } from "../lib/types";

export const VALID_DATA_OBJECTS = {
  payload: {
    with_crc: '00020101021236370114grubways61@fbn0015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304B06F',
    without_crc: '00020101021236370114grubways61@fbn0015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304'
  },
  decodedResult: {
    version: '01',
    intentType: IntentType.dynamic,
    payeeAccount: {
      schemeIdentifier: "com.paycashless",
      financialAddress: 'grubways61@fbn',
    },
    merchantCategoryCode: '4111',
    countryCode: 'NG',
    payeeName: 'GRUBWAYS',
    city: 'ABUJA',
    postalCode: '900231',
    amount: '5000',
    currency: '566',
    additionalDataObjects: {
      storeLabel: '055',
      customerLabel: 'customer@example.com',
      terminalLabel: '05',
      reference: 'PAY_56722803',
      narration: 'FOOD DELIVERY',
      channel: '521'
    },
    paymentIntentDataObjects: {
      schemeIdentifier: "com.paycashless",
      token: "tok_neojvjkwPrrpr9e03hplcag2ig5gpua8"
    },
    checksum: 'B06F'
  },
  requestObject: {
    version: '01',
    intentType: IntentType.dynamic,
    payeeAccount: {
      financialAddress: 'grubways61@fbn'
    },
    merchantCategoryCode: '4111',
    countryCode: 'NG',
    payeeName: 'GRUBWAYS',
    city: 'ABUJA',
    postalCode: '900231',
    amount: '5000',
    currency: '566',
    additionalDataObjects: {
      storeLabel: '055',
      customerLabel: 'customer@example.com',
      terminalLabel: '05',
      reference: 'PAY_56722803',
      narration: 'FOOD DELIVERY',
      channel: '521'
    },
    paymentIntentDataObjects: {
      token: "tok_neojvjkwPrrpr9e03hplcag2ig5gpua8"
    },
  }
};

export const INVALID_DATA_OBJECTS = {
  payload: {
    wrong_id: '00020199021236370114grubways61@fbn0015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless630458A2',
    wrong_prefix: '99029901021236370114grubways61@fbn0015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304DE3A',
    invalid_checksum: '00020101021236370114grubways61@fbn0015com.paycashless520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566627703030550620customer@example.com0702050512PAY_567228030813FOOD DELIVERY110352180590136tok_neojvjkwPrrpr9e03hplcag2ig5gpua80015com.paycashless6304B0FF'
  },
  decodedResult: {
    version: '99',
    intentType: IntentType.static,
    payeeAccount: {
      schemeIdentifier: 'com.paycashless',
      financialAddress: 'grubways61@fbn'
    },
    merchantCategoryCode: '4111',
    countryCode: 'NGL',
    payeeName: 'GRUBWAYS',
    city: 'ABUJA',
    postalCode: '900231',
    amount: '5000',
    currency: '566',
    additionalDataObjects: {
      storeLabel: '055',
      customerLabel: '***',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      channel: '521'
    },
    paymentIntentDataObjects: {
      token: "tok_neojvjtlPrrpr9e03hplcag2ig5gpua8"
    },
    checksum: 'F708'
  }
}