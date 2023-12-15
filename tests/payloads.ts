import { IntentType } from "../lib/types";

export const VALID_DATA_OBJECTS = {
  payload: {
    with_crc: '00020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304F708',
    without_crc: '00020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304'
  },
  decodedResult: {
    version: '01',
    intentType: IntentType.static,
    merchantAccount: {
      accountNumber: '1100010702',
      nipCode: '090267',
      schemeIdentifier: 'org.paycashless.qpi'
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
      customerLabel: '***',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521'
    },
    checksum: 'F708'
  },
  requestObject: {
    version: '01',
    intentType: IntentType.static,
    merchantAccount: {
      accountNumber: '1100010702',
      nipCode: '090267',
      schemeIdentifier: 'org.paycashless.qpi'
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
      customerLabel: '***',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521'
    }
  }
};

export const INVALID_DATA_OBJECTS = {
  payload: {
    wrong_id: '00020199021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304BB4A',
    wrong_prefix: '77020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304F708',
    invalid_checksum: '00020101021136470210110001070204060902670019org.paycashless.qpi520441115802NG5908GRUBWAYS6005ABUJA6106900231540450005303566625403030550603***07020505065672230813FOOD DELIVERY11035216304BB08'
  },
  decodedResult: {
    version: '01',
    intentType: '11',
    merchantAccount: {
      accountNumber: '1100010702',
      nipCode: '090267',
      schemeIdentifier: 'org.paycashless.qpi'
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
      customerLabel: '***',
      terminalLabel: '05',
      reference: '567223',
      narration: 'FOOD DELIVERY',
      merchantChannel: '521'
    },
    checksum: 'F708'
  }
}