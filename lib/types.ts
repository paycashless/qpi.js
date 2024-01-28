export enum DataObjectType {
  RootPrimitive='root_primitive',
  RootTemplate='root_template',
  TemplatePrimitive='template_primitive',
  TemplateTemplate='template_template'
}

export enum IntentType {
  static='11',
  dynamic='12'
}

export interface RegistryItem {
  id: string;
  type: DataObjectType;
  maxLength: number;
  minLength: number;
  template?: Record<string, RegistryItem>;
  [key: string]: any;
}

export interface DataObjects {
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
  }
}

export type RequestDataObjects = Omit<DataObjects, 'checksum'|'merchantAccount'|'paymentIntentDataObjects'> & {
  [key: string]: any;
  merchantAccount: Omit<DataObjects['merchantAccount'], 'schemeIdentifier'> & {
    schemeIdentifier?: string;
  };
  paymentIntentDataObjects: Omit<DataObjects['paymentIntentDataObjects'], 'schemeIdentifier'> & {
    schemeIdentifier?: string;
  }
}