import { DataObjectType, RegistryItem } from "./types";

type Registry = Record<string, RegistryItem>

export const DataObjectRegistry: Registry  = {
  version: {
    id: '00',
    type: DataObjectType.RootPrimitive,
    maxLength: 2,
    minLength: 2
  },
  checksum: {
    id: '63',
    type: DataObjectType.RootPrimitive,
    maxLength: 4,
    minLength: 4
  },
  intentType: {
    id: '01',
    type: DataObjectType.RootPrimitive,
    maxLength: 2,
    minLength: 2
  },
  merchantAccount: {
    id: '36',
    type: DataObjectType.RootTemplate,
    maxLength: 99,
    minLength: 35,
    template: {
      schemeIdentifier: {
        id: '00',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 19,
        minLength: 19,
      },
      merchantId: {
        id: '01',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 10,
        minLength: 10
      },
      accountNumber: {
        id: '02',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 10,
        minLength: 10
      },
      piftCode: {
        id: '03',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 10,
        minLength: 2
      },
      nipCode: {
        id: '04',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 10,
        minLength: 1
      },
    }
  },
  merchantCategoryCode: {
    id: '52',
    type: DataObjectType.RootPrimitive,
    maxLength: 4,
    minLength: 4
  },
  countryCode: {
    id: '58',
    type: DataObjectType.RootPrimitive,
    maxLength: 2,
    minLength: 2
  },
  merchantName: {
    id: '59',
    type: DataObjectType.RootPrimitive,
    maxLength: 25,
    minLength: 2
  },
  merchantCity: {
    id: '60',
    type: DataObjectType.RootPrimitive,
    maxLength: 15,
    minLength: 2
  },
  postalCode: {
    id: '61',
    type: DataObjectType.RootPrimitive,
    maxLength: 10,
    minLength: 2
  },
  merchantInfoAltLanguage: {
    id: '64',
    type: DataObjectType.RootTemplate,
    maxLength: 99,
    minLength: 0,
    template: {
      localLanguage: {
        id: '00',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      merchantName: {
        id: '01',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      merchantCity: {
        id: '02',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      }
    }
  },
  amount: {
    id: '54',
    type: DataObjectType.RootPrimitive,
    maxLength: 13,
    minLength: 0
  },
  currency: {
    id: '53',
    type: DataObjectType.RootPrimitive,
    maxLength: 3,
    minLength: 3
  },
  serviceFee: {
    id: '56',
    type: DataObjectType.RootPrimitive,
    maxLength: 13,
    minLength: 0
  },
  percentageServiceFee: {
    id: '57',
    type: DataObjectType.RootPrimitive,
    maxLength: 5,
    minLength: 0
  },
  additionalDataObjects: {
    id: '62',
    type: DataObjectType.RootTemplate,
    maxLength: -1,
    minLength: 0,
    template: {
      storeLabel: {
        id: '03',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      customerLabel: {
        id: '06',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      terminalLabel: {
        id: '07',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      loyaltyNumber: {
        id: '04',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      reference: {
        id: '05',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      narration: {
        id: '08',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 25,
        minLength: 0
      },
      merchantChannel: {
        id: '11',
        type: DataObjectType.TemplatePrimitive,
        maxLength: 3,
        minLength: 3
      }
    }
  }
}