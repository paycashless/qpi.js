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
  payeeAccount: {
    schemeIdentifier: string;
    financialAddress: string;
  };
  merchantCategoryCode: string;
  countryCode: string;
  payeeName: string;
  city: string;
  postalCode: string;
  payeeInfoAltLanguage?: {
    localLanguage: string;
    payeeName: string;
    city: string;
  };
  amount: string;
  currency: string;
  serviceFee?: string;
  percentageServiceFee?: string;
  additionalDataObjects: {
    storeLabel?: string;
    customerLabel?: string;
    terminalLabel?: string;
    loyaltyNumber?: string;
    reference: string;
    narration: string;
    channel: string;
  };
  paymentIntentDataObjects: {
    schemeIdentifier: string;
    token: string;
  }
}

export type RequestDataObjects = Omit<DataObjects, 'checksum'|'paymentIntentDataObjects'|'payeeAccount'> & {
  [key: string]: any;
  merchantCategoryCode?: string;
  payeeAccount: Omit<DataObjects['payeeAccount'], 'schemeIdentifier'> & {
    schemeIdentifier?: string;
  };
  paymentIntentDataObjects: Omit<DataObjects['paymentIntentDataObjects'], 'schemeIdentifier'> & {
    schemeIdentifier?: string;
  }
}